import { useState } from "react";
import classes from "./SpellbookModal.module.css";

import Skill from "./Skill";
import School from "./School";

import { useDispatch, useSelector } from "react-redux";

import { spellbookActions } from "../../../store/spellbook-slice";
import { playerActions } from "../../../store/player-slice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import playSoundEffect from "../../../util/audio-util";

export default function SpellbookModal() {
  const [school, setSchool] = useState("evocation");
  const dispatch = useDispatch();

  const spellbook = useSelector((state) => state.spellbook);
  const pointsExpended = calculateSchoolPoints(spellbook[school]);
  const player = useSelector((state) => state.player);

  const handleSchoolChange = (name) => {
    setSchool(name);
  };

  const handleResetButton = (school) => {
    playSoundEffect(false, "misc", "shimmerCrysta", 0.4);
    // Calculate total points expended in skill tree
    const totalPoints = calculateSchoolPoints(spellbook[school]);
    // Remove points from spellbook-slice
    dispatch(spellbookActions.resetSkillTree({ school, totalPoints }));
    // Return points to player-slice masteryPoints
    dispatch(
      playerActions.changeMasteryPoints({
        change: "INCREASE",
        quantity: totalPoints,
      })
    );
    // Remove all spells from player-slice spellList that are from the school reset
    dispatch(playerActions.changeSpellList({ change: "RESET", school }));
  };
  return (
    <div className={classes.spellbook}>
      <h1>Spellbook</h1>
      <div className={classes.container}>
        <div className={classes.schools}>
          <h3>Schools of Magic</h3>
          <ol>
            <School
              text={"Evocation"}
              active={school === "evocation"}
              onChangeSchool={() => handleSchoolChange("evocation")}
            />
            {player.level >= 2 ? (
              <School
                text={"Abjuration"}
                active={school === "abjuration"}
                onChangeSchool={() => handleSchoolChange("abjuration")}
              />
            ) : (
              <School text={"?"} />
            )}

            {player.level >= 3 ? (
              <School
                text={"Conjuration"}
                active={school === "conjuration"}
                onChangeSchool={() => handleSchoolChange("conjuration")}
              />
            ) : (
              <School text={"?"} />
            )}
            {player.level >= 4 ? (
              <School
                text={"Restoration"}
                active={school === "restoration"}
                onChangeSchool={() => handleSchoolChange("restoration")}
              />
            ) : (
              <School text={"?"} />
            )}
            {player.level >= 5 ? (
              <School
                text={"Enchantment"}
                active={school === "enchantment"}
                onChangeSchool={() => handleSchoolChange("enchantment")}
              />
            ) : (
              <School text={"?"} />
            )}

            {/* Unlock Necromancy through beating the final boss of The great Catacombs?*/}
            {player.level >= 6 ? (
              <School
                text={"Necromancy"}
                active={school === "necromancy"}
                onChangeSchool={() => handleSchoolChange("necromancy")}
              />
            ) : (
              <School text={"?"} />
            )}
          </ol>
          <div className={classes.header}>
            <h3>Mastery Points</h3>
            <div
              className={classes.points}
              style={{
                color:
                  player.masteryPoints > 0 ? "var(--accent)" : "var(--text)",
              }}
            >
              <FontAwesomeIcon className={classes.change} icon={faBookOpen} />
              <p>{player.masteryPoints}</p>
            </div>
            <button
              onClick={() => handleResetButton(school)}
              style={
                pointsExpended === 0
                  ? { opacity: 0.6, pointerEvents: "none" }
                  : {}
              }
            >
              Reset School Mastery
            </button>
          </div>
        </div>

        <div className={classes["skill-tree"]}>
          <div
            className={`${classes.expertise} ${
              pointsExpended >= 15 ? "" : classes.closed
            }`}
          >
            {pointsExpended >= 15 && <h3>Expert</h3>}
            {pointsExpended >= 15 && <h4>{pointsExpended} / 16</h4>}
            <ul>
              {spellbook[school].expert.map((skill) => {
                const activeExpertise =
                  skill.points < skill.max && pointsExpended >= 15;

                return (
                  <Skill
                    key={skill.name}
                    skill={skill}
                    school={school}
                    activeExpertise={activeExpertise}
                  />
                );
              })}
            </ul>
          </div>

          <div
            className={`${classes.expertise} ${
              pointsExpended >= 8 ? "" : classes.closed
            }`}
          >
            {pointsExpended >= 8 && pointsExpended < 15 && <h3>Adept</h3>}
            {pointsExpended >= 8 && pointsExpended < 15 && (
              <h4>{pointsExpended} / 15</h4>
            )}
            <ul>
              {spellbook[school].adept.map((skill) => {
                const activeExpertise =
                  skill.points < skill.max &&
                  pointsExpended >= 8 &&
                  pointsExpended < 15;

                return (
                  <Skill
                    key={skill.name}
                    skill={skill}
                    school={school}
                    activeExpertise={activeExpertise}
                  />
                );
              })}
            </ul>
          </div>

          <div
            className={`${classes.expertise} ${
              pointsExpended >= 3 ? "" : classes.closed
            }`}
          >
            {pointsExpended >= 3 && pointsExpended < 8 && <h3>Apprentice</h3>}
            {pointsExpended >= 3 && pointsExpended < 8 && (
              <h4>{pointsExpended} / 8</h4>
            )}
            <ul>
              {spellbook[school].apprentice.map((skill) => {
                const activeExpertise =
                  skill.points < skill.max &&
                  pointsExpended >= 3 &&
                  pointsExpended < 8;

                return (
                  <Skill
                    key={skill.name}
                    skill={skill}
                    school={school}
                    activeExpertise={activeExpertise}
                  />
                );
              })}
            </ul>
          </div>

          <div className={`${classes.expertise}`}>
            {pointsExpended < 3 && <h3>Novice</h3>}
            {pointsExpended < 3 && <h4>{pointsExpended} / 3</h4>}
            <ul>
              {spellbook[school].novice.map((skill) => {
                const activeExpertise =
                  skill.points < skill.max && pointsExpended < 3;

                return (
                  <Skill
                    key={skill.name}
                    skill={skill}
                    school={school}
                    activeExpertise={activeExpertise}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function calculateSchoolPoints(school) {
  let totalPoints = 0;

  for (let expertise in school) {
    const skill = school[expertise];
    skill.forEach((skill) => {
      totalPoints += skill.points;
    });
  }

  return totalPoints;
}
