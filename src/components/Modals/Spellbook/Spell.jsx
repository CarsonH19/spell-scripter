import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "../../../store/player-slice";

export default function Spell({ spell }) {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.player);

  const handleSpellClick = (spell) => {
    if (player.spellList.includes(spell)) {
      dispatch(playerActions.changeSpellList({ change: "REMOVE", spell }));
    } else {
      dispatch(playerActions.changeSpellList({ change: "ADD", spell }));
    }
  };

  return <li onClick={() => handleSpellClick(spell)}>{spell.name}</li>;
}
