import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "../../../store/player-slice";

import Icon from "../../UI/Icon";
import Tooltip from "../../UI/Tooltip";
import { spellbookActions } from "../../../store/spellbook-slice";

import spellDescriptions from "../../../util/spell-descriptions";

export default function Skill({ school, skill, isSkillActive }) {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.player);
  const spellPower = useSelector(
    (state) => state.player.stats.arcana.spellPower
  );

  let skillDescription;
  let descriptionFunction;

  if (skill.text === "Spell") {
    const snakeCaseSpellName = toSnakeCase(skill.name);
    descriptionFunction = spellDescriptions[snakeCaseSpellName];
    console.log(descriptionFunction);
    skillDescription = descriptionFunction(spellPower);
  } else {
    skillDescription = skill.description;
  }

  const handleSkillClick = (school, name) => {
    // Check if point is available and add point to skill
    if (player.masteryPoints > 0) {
      const added = dispatch(spellbookActions.expendPoint({ school, name }));

      // If point was added successfully deduct the point from the player-slice
      if (added) {
        dispatch(
          playerActions.changeMasteryPoints({ change: "DECREASE", quantity: 1 })
        );

        if (skill.text === "Spell") {
          dispatch(
            playerActions.changeSpellList({
              change: "ADD",
              spellName: skill.name,
            })
          );
        }
      }
    }
  };

  return (
    <div key={skill.name}>
      <Tooltip
        key={skill.name}
        title={skill.name}
        text={skill.text}
        detailOne={skillDescription}
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

function toSnakeCase(str) {
  return str.toUpperCase().replace(/\s+/g, "_");
}
