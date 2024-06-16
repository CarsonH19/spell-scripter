import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "../../../store/player-slice";

import Icon from "../../UI/Icon";
import { spellbookActions } from "../../../store/spellbook-slice";

export default function Skill({ school, skill }) {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.player);

  console.log(skill.name);
  const handleSkillClick = (school, name) => {
    // Check if point is available and add point to skill
    console.log("HANDLE");

    if (player.masteryPoints > 0) {
      console.log("DISPATCH 1");
      const added = dispatch(spellbookActions.expendPoint({ school, name }));

      // If point was added successfully deduct the point from the player-slice
      if (added) {
        console.log("DISPATCH 2");
        dispatch(playerActions.changeMasteryPoints({ change: "DECREASE" }));
      }
    }
  };

  return <Icon onClick={() => handleSkillClick(school, skill.name)} />;
}
