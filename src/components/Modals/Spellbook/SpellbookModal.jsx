import { useState } from "react";
import classes from "./SpellbookModal.module.css";

import Skill from "./Skill";

import { useDispatch, useSelector } from "react-redux";

import { spellbookActions } from "../../../store/spellbook-slice";
import { playerActions } from "../../../store/player-slice";

export default function SpellbookModal() {
  const [school, setSchool] = useState("evocation");
  const dispatch = useDispatch();

  const spellbook = useSelector((state) => state.spellbook);
  const pointsExpended = calculateTotalPoints(spellbook[school]);
  const player = useSelector((state) => state.player);

  const handleSchoolChange = (name) => {
    setSchool(name);
  };

  const handleResetButton = (school) => {
    const totalPoints = calculateTotalPoints(spellbook[school]);
    dispatch(spellbookActions.resetSkillTree({ school, totalPoints }));
    dispatch(
      playerActions.changeMasteryPoints({
        change: "INCREASE",
        quantity: totalPoints,
      })
    );
  };

  return (
    <div className={classes.spellbook}>
      <h1>Spellbook</h1>
      <div className={classes.container}>
        <div className={classes.schools}>
          <h3>Schools of Magic</h3>
          <ol>
            <li
              className={
                school === "evocation"
                  ? classes["active-school"]
                  : classes["inactive-school"]
              }
              onClick={() => handleSchoolChange("evocation")}
            >
              Evocation
            </li>
            <li
              className={
                school === "restoration"
                  ? classes["active-school"]
                  : classes["inactive-school"]
              }
              onClick={() => handleSchoolChange("restoration")}
            >
              Restoration
            </li>
            <li
              className={
                school === "abjuration"
                  ? classes["active-school"]
                  : classes["inactive-school"]
              }
              onClick={() => handleSchoolChange("abjuration")}
            >
              Abjuration
            </li>
            <li
              className={
                school === "conjuration"
                  ? classes["active-school"]
                  : classes["inactive-school"]
              }
              onClick={() => handleSchoolChange("conjuration")}
            >
              Conjuration
            </li>
            <li
              className={
                school === "enchantment"
                  ? classes["active-school"]
                  : classes["inactive-school"]
              }
              onClick={() => handleSchoolChange("enchantment")}
            >
              Enchantment
            </li>
            <li
              className={
                school === "necromancy"
                  ? classes["active-school"]
                  : classes["inactive-school"]
              }
              onClick={() => handleSchoolChange("necromancy")}
            >
              Necromancy
            </li>
          </ol>
        </div>

        <div className={classes["skill-tree"]}>
          <h3>Mastery Points: {player.masteryPoints}</h3>

          <div
            className={`${classes.expertise} ${
              pointsExpended < 17 ? classes.closed : ""
            }`}
          >
            <h3>Expert</h3>
            {pointsExpended >= 17 && <h4>{pointsExpended} / 18</h4>}
            <ul>
              {spellbook[school].expert.map((skill) => {
                const isSkillActive =
                  skill.points < skill.max && pointsExpended >= 17;

                return (
                  <Skill
                    key={skill.name}
                    skill={skill}
                    school={school}
                    isSkillActive={isSkillActive}
                  />
                );
              })}
            </ul>
          </div>

          <div
            className={`${classes.expertise} ${
              pointsExpended < 9 || pointsExpended >= 17 ? classes.closed : ""
            }`}
          >
            <h3>Adept</h3>
            {pointsExpended >= 9 && pointsExpended < 17 && (
              <h4>{pointsExpended} / 17</h4>
            )}
            <ul>
              {spellbook[school].adept.map((skill) => {
                const isSkillActive =
                  skill.points < skill.max && pointsExpended >= 9;

                return (
                  <Skill
                    key={skill.name}
                    skill={skill}
                    school={school}
                    isSkillActive={isSkillActive}
                  />
                );
              })}
            </ul>
          </div>

          <div
            className={`${classes.expertise} ${
              pointsExpended < 3 || pointsExpended >= 9 ? classes.closed : ""
            }`}
          >
            <h3>Apprentice</h3>
            {pointsExpended >= 3 && pointsExpended < 9 && (
              <h4>{pointsExpended} / 9</h4>
            )}
            <ul>
              {spellbook[school].apprentice.map((skill) => {
                const isSkillActive =
                  skill.points < skill.max && pointsExpended >= 3;

                return (
                  <Skill
                    key={skill.name}
                    skill={skill}
                    school={school}
                    isSkillActive={isSkillActive}
                  />
                );
              })}
            </ul>
          </div>

          <div
            className={`${classes.expertise} ${
              pointsExpended >= 3 ? classes.closed : ""
            }`}
          >
            <h3>Novice</h3>
            {pointsExpended < 3 && <h4>{pointsExpended} / 3</h4>}
            <ul>
              {spellbook[school].novice.map((skill) => {
                const isSkillActive =
                  skill.points < skill.max && pointsExpended < 3;

                return (
                  <Skill
                    key={skill.name}
                    skill={skill}
                    school={school}
                    isSkillActive={isSkillActive}
                  />
                );
              })}
            </ul>
          </div>
          <button onClick={() => handleResetButton(school)}>
            Reset School Mastery
          </button>
        </div>
      </div>
    </div>
  );
}

function calculateTotalPoints(category) {
  let totalPoints = 0;

  for (let level in category) {
    const spells = category[level];
    spells.forEach((spell) => {
      totalPoints += spell.points;
    });
  }

  return totalPoints;
}
