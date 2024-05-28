import classes from "./Actions.module.css";
import { setPlayerAction } from "../../../../store/combat-actions";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../../../store/ui-slice";

import { setSelect } from "../../../../store/combat-actions";

import Item from "../../../Modals/Inventory/Item";
import castSpell from "../../../../util/cast-spell";

export default function Actions() {
  const dispatch = useDispatch();

  const spellUI = useSelector((state) => state.ui.spellListIsVisible);
  const spellList = useSelector((state) => state.player.spellList);
  const itemUI = useSelector((state) => state.ui.itemListIsVisible);
  const itemList = useSelector((state) => state.player.inventory.consumables);

  // Used to determine if buttons should be disabled or not
  const playerID = useSelector((state) => state.player.id);
  const isCharacterTurn = useSelector(
    (state) => state.combat.isCharacterTurn === playerID
  );
  const danger = useSelector((state) => state.dungeon.danger);
  const isDisabled = !isCharacterTurn && !danger;

  // mana tracking for spell button disabled
  const order = useSelector((state) => state.combat.order);

  const findCharacterById = () => {
    return order.find((char) => char.id === "Player");
  };

  const player = findCharacterById();
  
  const handlePlayerChoice = (action) => {
    setPlayerAction(action);

    if (action === "CAST SPELL") {
      dispatch(uiActions.toggle({ modal: "spellListIsVisible" })); // set to true
    }

    if (action === "USE ITEM") {
      dispatch(uiActions.toggle({ modal: "itemListIsVisible" })); // set to true
    }
  };

  const handleSelectChoice = (choice, modal) => {
    setSelect(choice);
    if (danger) {
      castSpell(dispatch, choice);
    }

    dispatch(uiActions.toggle({ modal })); // set to false
  };

  const handleCloseList = (modal) => {
    setSelect(null);
    dispatch(uiActions.toggle({ modal })); // set to false
  };

  let content;

  if (spellUI) {
    const playerMana = player.currentMana;

    content = (
      <div className={classes.spells}>
        <h3>Spell List</h3>
        {spellList.map((spell) => (
          <li
          className={playerMana < spell.manaCost ? classes.disabled : ''}            key={spell.name}
            onClick={() => handleSelectChoice(spell, "spellListIsVisible")}
          >
            {spell.name}
          </li>
        ))}
        <p
          onClick={() => handleCloseList("spellListIsVisible")}
          className={classes.close}
        >
          x
        </p>
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
        <button
          disabled={isDisabled}
          onClick={() => handlePlayerChoice("CAST SPELL")}
        >
          Cast Spell
        </button>
        <div>
          <button
            disabled={isDisabled || !isCharacterTurn}
            onClick={() => handlePlayerChoice("ATTACK")}
          >
            Attack
          </button>
          <button
            disabled={isDisabled || !isCharacterTurn}
            onClick={() => handlePlayerChoice("GUARD")}
          >
            Guard
          </button>
          <button
            disabled={isDisabled || !isCharacterTurn}
            onClick={() => handlePlayerChoice("USE ITEM")}
          >
            Use Item
          </button>
          <button
            disabled={isDisabled || !isCharacterTurn}
            onClick={() => handlePlayerChoice("FLEE")}
          >
            Flee
          </button>
        </div>
      </div>
    );
  }

  return content;
}
