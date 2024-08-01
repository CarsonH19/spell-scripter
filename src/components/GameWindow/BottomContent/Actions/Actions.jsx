import classes from "./Actions.module.css";

import { setPlayerAction } from "../../../../store/combat-actions";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../../../store/ui-slice";

import { setSelect } from "../../../../store/combat-actions";

import Item from "../../../Modals/Inventory/Item";
import castSpell from "../../../../util/cast-spell";
import { getSpell } from "../../../../util/spell-util";

import Tooltip from "../../../UI/Tooltip";
import Icon from "../../../UI/Icon";

import spellDescriptions from "../../../../util/spell-descriptions";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandSparkles,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Actions() {
  const dispatch = useDispatch();
  // Dialogue - is dialogue.active the action are not rendered
  const isDialogue = useSelector((state) => state.dialogue.active);
  // Player
  const player = findCharacterById();
  // Event
  const event = useSelector((state) => state.dungeon.event);
  const entrance = event && event.type === "ENTRANCE";
  //Spells
  const spellUI = useSelector((state) => state.ui.spellListIsVisible);
  const spellList = useSelector((state) => state.player.spellList);
  // Items
  const itemUI = useSelector((state) => state.ui.itemListIsVisible);
  const itemList = useSelector((state) => state.player.inventory.consumables);

  // Used to determine if buttons should be disabled or not
  const playerID = useSelector((state) => state.player.id);
  const isCharacterTurn = useSelector(
    (state) => state.combat.isCharacterTurn === playerID
  );
  const danger = useSelector((state) => state.dungeon.danger);
  const isDisabled = (!isCharacterTurn && danger) || event;
  const [search, setSearch] = useState("BEFORE COMBAT");

  useEffect(() => {
    setSearch(danger ? "DURING COMBAT" : "BEFORE COMBAT");
  }, [danger]);

  const handlePlayerChoice = (action) => {
    setPlayerAction(action);

    if (action === "CAST SPELL") {
      dispatch(
        uiActions.changeUi({ element: "spellListIsVisible", visible: true })
      );
    }

    if (action === "USE ITEM") {
      dispatch(
        uiActions.changeUi({ element: "itemListIsVisible", visible: true })
      );
    }
  };

  const handleSelectChoice = (choice, modal) => {
    setSelect(choice);
    castSpell(dispatch, choice);

    dispatch(uiActions.changeUi({ element: modal, visible: false }));
  };

  const handleCloseList = (modal) => {
    setSelect(null);
    dispatch(uiActions.changeUi({ element: modal, visible: false }));
  };

  let content;

  if (spellUI) {
    const playerMana = player.currentMana;

    content = (
      <div className={classes.spells}>
        <div className={classes.mana}>
          {/* ICONS */}
          <span>
            <FontAwesomeIcon icon={faHandSparkles} className={classes.icon} />
            {player.currentMana} / {player.stats.arcana.maxMana}
          </span>
          {/* MANA BAR */}
          <progress
            max={player.stats.arcana.maxMana}
            value={player.currentMana}
            className={classes.mana}
          ></progress>
        </div>
        <h3>Spell List</h3>
        <ul>
          {spellList.map((spell) => {
            // SPELLS Object
            const spellObject = getSpell(spell);
            // spell-descriptions.js
            const snakeCaseSpellName = toSnakeCase(spell);
            const descriptionFunction = spellDescriptions[snakeCaseSpellName];
            const spellDescription = descriptionFunction(
              player.stats.arcana.spellPower
            );

            if (
              spellObject.castTime === search ||
              spellObject.castTime === "ANYTIME"
            ) {
              return (
                <Tooltip
                  key={spellObject.name}
                  title={spellObject.name}
                  text={spellObject.school}
                  detailOne={spellDescription}
                  detailTwo={`Mana Cost: ${spellObject.manaCost}`}
                  position="skill"
                  container="spell-list-container"
                >
                  <Icon
                    className={
                      playerMana < spellObject.manaCost ? classes.disabled : ""
                    }
                    key={spellObject.name}
                    onClick={() =>
                      handleSelectChoice(spellObject, "spellListIsVisible")
                    }
                    style={{
                      backgroundImage: `url(${spellObject.image})`,
                    }}
                  >
                    {/* {spellObject.name} */}
                  </Icon>
                </Tooltip>
              );
            }
          })}
        </ul>
        <FontAwesomeIcon
          icon={faCircleXmark}
          onClick={() => handleCloseList("spellListIsVisible")}
          className={classes.close}
        />
      </div>
    );
  } else if (itemUI) {
    // Counter logic
    let counters = [];
    itemList.map((item) => {
      let existingItem = counters.find((obj) => obj.name === item.name);
      if (existingItem) {
        existingItem.counter++;
      } else {
        counters.push({ ...item, counter: 1 });
      }
    });

    content = (
      <div className={classes.spells}>
        <h3>Item List</h3>
        {counters.map((item) => {
          if (item.useInCombat) {
            return (
              <Item
                key={item.id}
                item={item}
                count={item.counter}
                // onClick={() => handleSelectChoice(item, "itemListIsVisible")}
              />
            );
          }
        })}
        <p
          onClick={() => handleCloseList("itemListIsVisible")}
          className={classes.close}
        >
          x
        </p>
      </div>
    );
  } else {
    content = (
      <div className={classes.actions}>
        {(!isDisabled || entrance) && (
          <button
            disabled={isDisabled}
            onClick={() => handlePlayerChoice("CAST SPELL")}
            className={isDisabled ? classes["disabled-btn"] : ""}
          >
            Cast Spell
          </button>
        )}
        {!isDisabled && isCharacterTurn && (
          <button
            disabled={isDisabled || !isCharacterTurn}
            onClick={() => handlePlayerChoice("ATTACK")}
            className={
              isDisabled || !isCharacterTurn ? classes["disabled-btn"] : ""
            }
          >
            Attack
          </button>
        )}
        {!isDisabled && isCharacterTurn && (
          <button
            disabled={isDisabled || !isCharacterTurn}
            onClick={() => handlePlayerChoice("GUARD")}
            className={
              isDisabled || !isCharacterTurn ? classes["disabled-btn"] : ""
            }
          >
            Guard
          </button>
        )}
        {!isDisabled && isCharacterTurn && (
          <button
            disabled={isDisabled || !isCharacterTurn}
            onClick={() => handlePlayerChoice("USE ITEM")}
            className={
              isDisabled || !isCharacterTurn ? classes["disabled-btn"] : ""
            }
          >
            Use Item
          </button>
        )}
      </div>
    );
  }

  if (event) {
    return;
  } else {
    return !isDialogue && content;
  }
}

function toSnakeCase(str) {
  return str.toUpperCase().replace(/\s+/g, "_");
}

const findCharacterById = () => {
  // mana tracking for spell button disabled
  const order = useSelector((state) => state.combat.order);
  return order.find((char) => char.id === "Player");
};
