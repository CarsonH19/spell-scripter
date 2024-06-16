import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "../../../store/player-slice";

import Icon from "../../UI/Icon";
import Tooltip
 from "../../UI/Tooltip";
import { spellbookActions } from "../../../store/spellbook-slice";

export default function Skill({ school, skill, isSkillActive }) {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.player);

  const handleSkillClick = (school, name) => {
    // Check if point is available and add point to skill
    if (player.masteryPoints > 0) {
      const added = dispatch(spellbookActions.expendPoint({ school, name }));

      // If point was added successfully deduct the point from the player-slice
      if (added) {
        dispatch(
          playerActions.changeMasteryPoints({ change: "DECREASE", quantity: 1 })
        );
      }
    }
  };

  return (
    <div key={skill.name}>
      <Tooltip
        key={skill.name}
        title={skill.name}
        detailOne={skill.text}
        position="skill"
      >
        <Icon
          onClick={
            isSkillActive
              ? () => handleSkillClick(school, skill.name)
              : undefined
          }
        />
      </Tooltip>
      <p>
        {skill.points} / {skill.max}
      </p>
    </div>
  );
}
