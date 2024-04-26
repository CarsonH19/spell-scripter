import { useDispatch } from "react-redux";
import { uiActions } from "../../../../store/ui-slice";
import { setSpell } from "../../../../store/combat-actions";

export default function Spell({ spell }) {
  const dispatch = useDispatch();

  const handleSpellChoice = () => {
    setSpell(spell);
    dispatch(uiActions.toggle({ modal: "spellListIsVisible" })); // set to true
  };

  return <li onClick={handleSpellChoice}>{spell.name}</li>;
}

