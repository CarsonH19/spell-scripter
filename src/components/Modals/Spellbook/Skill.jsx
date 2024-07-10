import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "../../../store/player-slice";

import Icon from "../../UI/Icon";
import Tooltip from "../../UI/Tooltip";
import { spellbookActions } from "../../../store/spellbook-slice";

import spellDescriptions from "../../../util/spell-descriptions";
import { getSpell } from "../../../util/spell-util";

export default function Skill({ school, skill, activeExpertise }) {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.player);
  const spellPower = useSelector(
    (state) => state.player.stats.arcana.spellPower
  );

  const activeSkill = skill.points > 0;
  const isSpell = skill.type === "Spell";
  let spellObject;
  let skillDescription;
  let descriptionFunction;

  if (isSpell) {
    spellObject = getSpell(skill.name);

    const snakeCaseSpellName = toSnakeCase(skill.name);
    descriptionFunction = spellDescriptions[snakeCaseSpellName];
    skillDescription = descriptionFunction(spellPower);
  } else {
    let descriptionIndex;
    if (skill.points < skill.max) {
      descriptionIndex = skill.points;
    } else {
      descriptionIndex = skill.max - 1;
    }
    skillDescription = skill.description[descriptionIndex];
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

        if (isSpell) {
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
      {(activeExpertise || activeSkill) && (
        <Tooltip
          key={skill.name}
          title={skill.name}
          text={skill.type}
          detailOne={skillDescription}
          {...(isSpell && spellObject
            ? { detailTwo: `Mana Cost: ${spellObject.manaCost}` }
            : {})}
          position="skill"
        >
          <Icon
            onClick={
              activeExpertise
                ? () => handleSkillClick(school, skill.name)
                : undefined
            }
            style={{
              backgroundImage: `url(${skill.image})`,
              borderStyle: "solid",
              borderWidth: "2px",
              borderColor: activeSkill
                ? skill.points === skill.max
                  ? "var(--text)"
                  : "var(--secondary)"
                : "var(--secondary)",
              opacity: activeSkill ? "1" : !activeExpertise ? "1" : "",
              cursor: skill.points < skill.max ? "pointer" : "",
            }}
          />
        </Tooltip>
      )}
      {!activeExpertise && !activeSkill && (
        <Icon
          onClick={
            activeExpertise
              ? () => handleSkillClick(school, skill.name)
              : undefined
          }
          style={{
            backgroundImage: `url(${skill.image})`,
            pointerEvents: "none",
          }}
        />
      )}
      <p>
        {skill.points} / {skill.max}
      </p>
    </div>
  );
}

function toSnakeCase(str) {
  return str.toUpperCase().replace(/\s+/g, "_");
}
