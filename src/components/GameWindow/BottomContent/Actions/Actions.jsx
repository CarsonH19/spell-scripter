import classes from "./Actions.module.css";
import { setPlayerAction } from "../../../../store/combat-actions";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../../../store/ui-slice";

import Spell from "./Spell";

export default function Actions() {
  const spellList = useSelector((state) => state.player.spellList);
  const spellUI = useSelector((state) => state.ui.spellListIsVisible);

  const dispatch = useDispatch();

  const handlePlayerChoice = (action) => {
    setPlayerAction(action);

    if (action === "CAST SPELL") {
      console.log("CAST SPELL");
      dispatch(uiActions.toggle({ modal: "spellListIsVisible" })); // set to true
    }
  };

  let content;

  if (!spellUI) {
    content = (
      <div className={classes.actions}>
        <button onClick={() => handlePlayerChoice("CAST SPELL")}>
          Cast Spell
        </button>
        <div>
          <button onClick={() => handlePlayerChoice("ATTACK")}>Attack</button>
          <button onClick={() => handlePlayerChoice("GUARD")}>Guard</button>
          <button onClick={() => handlePlayerChoice("ITEM")}>Use Item</button>
          <button onClick={() => handlePlayerChoice("FLEE")}>Flee</button>
        </div>
      </div>
    );
  } else {
    content = (
      <div className={classes.spells}>
        <h3>Spell List</h3>
        {spellList.map((spell) => (
          <Spell key={spell.name} spell={spell}/>
        ))}

      </div>
    );
  }

  return content;
}
