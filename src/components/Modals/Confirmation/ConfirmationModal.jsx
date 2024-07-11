import classes from "./ConfirmationModal.module.css";

import { uiActions } from "../../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

// import { getRoomEnemies } from "../../../util/dungeon-util";
import { combatActions } from "../../../store/combat-slice";

import updateStatTotals from "../../../store/stats-actions";

import Icon from "../../UI/Icon";
import Tooltip from "../../UI/Tooltip";

import { getSpell } from "../../../util/spell-util";
import spellDescriptions from "../../../util/spell-descriptions";
import changeStatusEffect from "../../../store/status-effect-actions";
import CONDITIONS from "../../../data/conditions";
import { checkSkillPoints } from "../../../util/spellbook-util";
import { createArcaneShield } from "../../../util/skills";
import statusEffectFunctions from "../../../util/status-effect-functions";
import { openModal } from "../../../store/ui-actions";

export default function ConfirmationModal() {
  const dispatch = useDispatch();
  const dungeon = useSelector((state) => state.dungeon.name);
  const spellList = useSelector((state) => state.player.spellList);
  const partyMembers = useSelector((state) => state.hero.party);
  const attunedItems = useSelector(
    (state) => state.player.inventory.attunedItems
  );

  // Test
  const ui = useSelector((state) => state.ui);

  const heroes = useSelector((state) => state.hero.party);
  const player = useSelector((state) => state.player);
  const characters = [...heroes, player];

  const handleConfirmation = () => {
    dispatch(
      uiActions.changeUi({ element: "dashboardIsVisible", visible: false })
    ); // false
    dispatch(
      uiActions.changeUi({ element: "gameWindowIsVisible", visible: true })
    ); // true

    // Add the characters array to the combat-slice order
    dispatch(combatActions.setInitiative({ characters }));

    // Update all characters stats
    for (let i = 0; i < characters.length; i++) {
      updateStatTotals(dispatch, characters[i].id);
    }

    // Max Health
    characters.forEach((character) => {
      dispatch(
        combatActions.updateHealth({
          id: character.id,
          change: "HEAL",
          value: 999,
        })
      );
    });

    // Full Mana
    dispatch(
      combatActions.updateMana({
        change: "ADD",
        value: 999,
      })
    );

    //  Shield - Add status effect to player
    const arcaneShield = checkSkillPoints("Arcane Shield");
    if (arcaneShield) {
      const statusEffect = createArcaneShield();
      const index = characters.findIndex((char) => char.id === "Player");
      changeStatusEffect(dispatch, characters[index], "ADD", statusEffect);
    }

    dispatch(
      uiActions.changeUi({ element: "continueIsVisible", visible: false })
    );

    dispatch(uiActions.changeUi({ element: "modalIsVisible", visible: false }));
  };

  const handleClickChange = (modal) => {
    openModal(dispatch, modal);
  };

  return (
    <div className={classes.confirmation}>
      <h1>{dungeon}</h1>
      <div className={classes.container}>
        <div className={classes.section}>
          <h3>Spell List</h3>
          <div className={classes.block}>
            <ul>
              {spellList.map((spell) => {
                // SPELL objects
                const spellObject = getSpell(spell);
                // spell-descriptions.js
                const snakeCaseSpellName = toSnakeCase(spell);
                const descriptionFunction =
                  spellDescriptions[snakeCaseSpellName];
                const spellDescription = descriptionFunction(
                  player.stats.arcana.spellPower
                );

                return (
                  <Tooltip
                    key={spellObject.name}
                    title={spellObject.name}
                    text={spellObject.school}
                    detailOne={spellDescription}
                    detailTwo={`Mana Cost: ${spellObject.manaCost}`}
                    position="skill"
                  >
                    <Icon key={spellObject.name} />
                  </Tooltip>
                );
              })}
            </ul>
            <button onClick={() => handleClickChange("spellbookModal")}>
              Change
            </button>
          </div>
        </div>
        <div className={classes.section}>
          <h3>Party Members</h3>
          <div className={classes.block}>
            <ul>
              {partyMembers.map((hero) => (
                <Tooltip key={hero.name} title={hero.name} text={hero.level}>
                  <Icon key={hero.name}>{hero.name}</Icon>
                </Tooltip>
              ))}
              <p className={classes.tracker}>{partyMembers.length} / 3</p>
            </ul>
            <button onClick={() => handleClickChange("heroesModal")}>
              Change
            </button>
          </div>
        </div>
        <div className={classes.section}>
          <h3>Attuned Items</h3>
          <div className={classes.block}>
            <ul>
              {attunedItems.map((item) => (
                <Tooltip
                  key={item.name}
                  title={item.name}
                  text={item.description}
                >
                  <Icon key={item.name}>{item.name}</Icon>
                </Tooltip>
              ))}
              <p className={classes.tracker}>{attunedItems.length} / 5</p>
            </ul>
            <button onClick={() => handleClickChange("inventoryModal")}>
              Change
            </button>
          </div>
        </div>
        <button onClick={handleConfirmation}>Confirm</button>
      </div>
    </div>
  );
}

function toSnakeCase(str) {
  return str.toUpperCase().replace(/\s+/g, "_");
}
