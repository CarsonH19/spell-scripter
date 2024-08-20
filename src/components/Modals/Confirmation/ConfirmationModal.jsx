import classes from "./ConfirmationModal.module.css";

import { uiActions } from "../../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

import { combatActions } from "../../../store/combat-slice";

import updateStatTotals from "../../../store/stats-actions";

import Icon from "../../UI/Icon";
import Tooltip from "../../UI/Tooltip";
import Attributes from "../Attribute/Attributes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";

import { getSpell } from "../../../util/spell-util";
import spellDescriptions from "../../../util/spell-descriptions";
import changeStatusEffect from "../../../store/status-effect-actions";
import { checkSkillPoints } from "../../../util/spellbook-util";
import { createArcaneShield } from "../../../util/skills";
import { openModal } from "../../../store/ui-actions";
import playSoundEffect from "../../../util/audio-util";
import { backgroundMusic, playMusic } from "../../../data/audio/music";

export default function ConfirmationModal() {
  const dispatch = useDispatch();
  const dungeon = useSelector((state) => state.dungeon.name);
  const spellList = useSelector((state) => state.player.spellList);
  // const partyMembers = useSelector((state) => state.hero.party);
  const attunedItems = useSelector(
    (state) => state.player.inventory.attunedItems
  );

  const heroes = useSelector((state) => state.hero.party);
  const player = useSelector((state) => state.player);
  const characters = [...heroes, player];

  const handleConfirmation = () => {
    enterDungeonTransition(dispatch, characters);
  };

  const handleClickChange = (modal) => {
    openModal(dispatch, modal);
  };

  return (
    <div className={classes.confirmation}>
      {/* <h1>Are You Ready?</h1> */}
      <div className={classes.content}>
        <div className={classes.heroes}>
          <h3>Party</h3>
          <ul>
            {characters.map((hero) => (
              <div key={hero.name}>
                <img src={`${hero.image}.png`} alt={hero.name} />
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
          {/* <h3>Attributes</h3> */}

          {/* <img
            className={classes["player-image"]}
            src={`${player.image}`}
            alt=""
          /> */}
          <Attributes />
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
                    position="right-middle"
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
              {spellList.length === 0 && <p>No spells prepared!</p>}
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
                  key={attunedItems[0].id}
                  position="item"
                  title={attunedItems[0].name}
                  text={attunedItems[0].rarity}
                  detailOne={attunedItems[0].description}
                  detailTwo={attunedItems[0].effect.map((line, index) => (
                    <span key={index} className={classes["item-effect"]}>
                      {line}
                    </span>
                  ))}
                >
                  <Icon
                    style={{
                      backgroundImage: `url(${attunedItems[0].image})`,
                    }}
                  ></Icon>
                </Tooltip>
              )) || <Icon className={classes.empty}></Icon>}
              {/* ITEM 2 */}
              {(attunedItems[1] && (
                <Tooltip
                  key={attunedItems[1].id}
                  position="item"
                  title={attunedItems[1].name}
                  text={attunedItems[1].rarity}
                  detailOne={attunedItems[1].description}
                  detailTwo={attunedItems[1].effect.map((line, index) => (
                    <span key={index} className={classes["item-effect"]}>
                      {line}
                    </span>
                  ))}
                >
                  <Icon
                    style={{
                      backgroundImage: `url(${attunedItems[1].image})`,
                    }}
                  ></Icon>
                </Tooltip>
              )) || <Icon className={classes.empty}></Icon>}

              {/* ITEM 3 */}
              {(attunedItems[2] && (
                <Tooltip
                  key={attunedItems[2].id}
                  position="item"
                  title={attunedItems[2].name}
                  text={attunedItems[2].rarity}
                  detailOne={attunedItems[2].description}
                  detailTwo={attunedItems[2].effect.map((line, index) => (
                    <span key={index} className={classes["item-effect"]}>
                      {line}
                    </span>
                  ))}
                >
                  <Icon
                    style={{
                      backgroundImage: `url(${attunedItems[2].image})`,
                    }}
                  ></Icon>
                </Tooltip>
              )) || <Icon className={classes.empty}></Icon>}

              {/* ITEM 4 */}
              {(attunedItems[3] && (
                <Tooltip
                  key={attunedItems[3].id}
                  position="item"
                  title={attunedItems[3].name}
                  text={attunedItems[3].rarity}
                  detailOne={attunedItems[3].description}
                  detailTwo={attunedItems[3].effect.map((line, index) => (
                    <span key={index} className={classes["item-effect"]}>
                      {line}
                    </span>
                  ))}
                >
                  <Icon
                    style={{
                      backgroundImage: `url(${attunedItems[3].image})`,
                    }}
                  ></Icon>
                </Tooltip>
              )) || <Icon className={classes.empty}></Icon>}

              {/* ITEM 5 */}
              {(attunedItems[4] && (
                <Tooltip
                  key={attunedItems[4].id}
                  position="item"
                  title={attunedItems[4].name}
                  text={attunedItems[4].rarity}
                  detailOne={attunedItems[4].description}
                  detailTwo={attunedItems[4].effect.map((line, index) => (
                    <span key={index} className={classes["item-effect"]}>
                      {line}
                    </span>
                  ))}
                >
                  <Icon
                    style={{
                      backgroundImage: `url(${attunedItems[4].image})`,
                    }}
                  ></Icon>
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
async function enterDungeonTransition(dispatch, characters) {
  // Fade transition
  await dispatch(uiActions.updateFade({ change: "CALL" }));
  playSoundEffect(false, "ui", "GUIMenuButton");
  playMusic(backgroundMusic.mazeHeist);
  await delay(3000);

  // Ensure event options are not visible
  dispatch(
    uiActions.changeUi({ element: "eventOptionsAreVisible", visible: false })
  );
  // Ensure continue arrow is not visible
  dispatch(
    uiActions.changeUi({ element: "continueIsVisible", visible: false })
  );
  // Ensure modals are not visible
  dispatch(uiActions.changeUi({ element: "modalIsVisible", visible: false }));
  // Change from dashboard to game window
  dispatch(
    uiActions.changeUi({ element: "dashboardIsVisible", visible: false })
  );
  dispatch(
    uiActions.changeUi({ element: "gameWindowIsVisible", visible: true })
  );
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

  await dispatch(uiActions.updateFade({ change: "CLEAR" }));

  async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
