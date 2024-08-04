import classes from "./SpellbookModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "../../../store/player-slice";

import Icon from "../../UI/Icon";
import Tooltip from "../../UI/Tooltip";
import { spellbookActions } from "../../../store/spellbook-slice";

import spellDescriptions from "../../../util/spell-descriptions";
import { getSpell } from "../../../util/spell-util";

import { useState } from "react";
import { isAction } from "redux";
import playSoundEffect from "../../../util/audio-util";

export default function Skill({ school, skill, activeExpertise }) {
  const [isHovered, setIsHovered] = useState(false);

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

      playSoundEffect(true, "skill");
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
          <div className={classes.shadow}>
            <Icon
              onClick={
                activeExpertise
                  ? () => handleSkillClick(school, skill.name)
                  : undefined
              }
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={classes.skill}
              style={{
                backgroundImage: `url(${skill.image})`,
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: isHovered
                  ? "var(--text)"
                  : activeExpertise
                  ? skill.points === skill.max
                    ? "var(--text)"
                    : "var(--secondary)"
                  : skill.points === skill.max
                  ? "var(--text)"
                  : "var(--secondary)",
                opacity: "1",
                cursor: skill.points < skill.max ? "pointer" : "",
                pointerEvents: activeExpertise
                  ? skill.points === skill.max
                    ? "none"
                    : "auto"
                  : "none",
                boxShadow: activeSkill
                  ? " inset 0px 0px 0px rgba(0, 0, 0, 4.8)"
                  : "",
              }}
            />
          </div>
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
      <p
        style={{
          opacity: activeSkill ? "1" : "0.4",
        }}
      >
        {skill.points} / {skill.max}
      </p>
    </div>
  );
}

function toSnakeCase(str) {
  return str.toUpperCase().replace(/\s+/g, "_");
}
