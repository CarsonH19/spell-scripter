import classes from "./ConfirmationModal.module.css";

import { uiActions } from "../../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

import { combatActions } from "../../../store/combat-slice";

import updateStatTotals from "../../../store/stats-actions";

import Icon from "../../UI/Icon";
import Tooltip from "../../UI/Tooltip";
import Attributes from "../Inventory/Attributes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";

import { getSpell } from "../../../util/spell-util";
import spellDescriptions from "../../../util/spell-descriptions";
import changeStatusEffect from "../../../store/status-effect-actions";
import { checkSkillPoints } from "../../../util/spellbook-util";
import { createArcaneShield } from "../../../util/skills";
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
      <h1>Are You Ready?</h1>
      <div className={classes.content}>
        <div className={classes.heroes}>
          <h3>Party</h3>
          <ul>
            {partyMembers.map((hero) => (
              <div key={hero.name}>
                <img src={`${hero.image}`} alt={hero.name} />
                <p>{hero.name}</p>
              </div>
            ))}
          </ul>
          <FontAwesomeIcon
            className={classes.change}
            icon={faRepeat}
            onClick={() => handleClickChange("heroesModal")}
          />
        </div>
        <div className={classes.player}>
          <h3>Attributes</h3>

          <img
            className={classes["player-image"]}
            src={`${player.image}`}
            alt=""
          />
          <Attributes noInfo={true}/>
        </div>
        <div className={classes.container}>
          {/* <div className={classes.dungeon}>
            <h3>Dungeon</h3>
            <p>{dungeon}</p>
          </div> */}
          <div className={classes.spells}>
            <h3>Spell List</h3>
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
                    <Icon
                      key={spellObject.name}
                      style={{
                        backgroundImage: `url(${spellObject.image})`,
                      }}
                    />
                  </Tooltip>
                );
              })}
            </ul>
            <FontAwesomeIcon
              className={classes.change}
              icon={faRepeat}
              onClick={() => handleClickChange("spellbookModal")}
            />
          </div>

          <div className={classes.attuned}>
            <h3>Attuned Items</h3>
            <ul>
              {/* ITEM 1 */}
              {(attunedItems[0] && (
                <Tooltip
                  title={attunedItems[0].name}
                  text={attunedItems[0].description}
                  position="skill"
                >
                  <Icon>{attunedItems[0].name}</Icon>
                </Tooltip>
              )) || <Icon className={classes.empty}></Icon>}
              {/* ITEM 2 */}
              {(attunedItems[1] && (
                <Tooltip
                  title={attunedItems[1].name}
                  text={attunedItems[1].description}
                  position="skill"
                >
                  <Icon>{attunedItems[1].name}</Icon>
                </Tooltip>
              )) || <Icon className={classes.empty}></Icon>}

              {/* ITEM 3 */}
              {(attunedItems[2] && (
                <Tooltip
                  title={attunedItems[2].name}
                  text={attunedItems[2].description}
                  position="skill"
                >
                  <Icon>{attunedItems[2].name}</Icon>
                </Tooltip>
              )) || <Icon className={classes.empty}></Icon>}

              {/* ITEM 4 */}
              {(attunedItems[3] && (
                <Tooltip
                  title={attunedItems[3].name}
                  text={attunedItems[3].description}
                  position="skill"
                >
                  <Icon>{attunedItems[3].name}</Icon>
                </Tooltip>
              )) || <Icon className={classes.empty}></Icon>}

              {/* ITEM 5 */}
              {(attunedItems[4] && (
                <Tooltip
                  title={attunedItems[4].name}
                  text={attunedItems[4].description}
                  position="skill"
                >
                  <Icon>{attunedItems[4].name}</Icon>
                </Tooltip>
              )) || <Icon className={classes.empty}></Icon>}
            </ul>
            <FontAwesomeIcon
              className={classes.change}
              icon={faRepeat}
              onClick={() => handleClickChange("inventoryModal")}
            />
          </div>
        </div>
      </div>
      <div className={classes.ready}>
        <button onClick={handleConfirmation}>Ready</button>
      </div>
    </div>
  );
}

function toSnakeCase(str) {
  return str.toUpperCase().replace(/\s+/g, "_");
}
