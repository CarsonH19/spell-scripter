import { useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import classes from "./SpellbookModal.module.css";
import Skill from "./Skill";
import School from "./School";
import { spellbookActions } from "../../../store/spellbook-slice";
import { playerActions } from "../../../store/player-slice";
import playSoundEffect from "../../../util/audio-util";

export default function SpellbookModal() {
  const [school, setSchool] = useState("evocation");
  const dispatch = useDispatch();

  // Retrieve state
  const player = useSelector((state) => state.player);
  const spellbook = useSelector((state) => state.spellbook);

  // Calculate pointsExpended using useMemo for performance
  const pointsExpended = useMemo(
    () => calculateSchoolPoints(spellbook[school]),
    [school, spellbook]
  );

  // Callback to handle school change
  const handleSchoolChange = useCallback((name) => {
    setSchool(name);
  }, []);

  // Callback to handle reset button
  const handleResetButton = useCallback(() => {
    playSoundEffect(false, "misc", "shimmerCrysta", 0.3);
    const totalPoints = calculateSchoolPoints(spellbook[school]);
    dispatch(spellbookActions.resetSkillTree({ school, totalPoints }));
    dispatch(
      playerActions.changeMasteryPoints({
        change: "INCREASE",
        quantity: totalPoints,
      })
    );
    dispatch(playerActions.changeSpellList({ change: "RESET", school }));
  }, [dispatch, spellbook, school]);

  // School data
  const schools = useMemo(
    () => [
      { name: "Evocation", levelRequired: 1 },
      { name: "Abjuration", levelRequired: 2 },
      { name: "Conjuration", levelRequired: 3 },
      { name: "Restoration", levelRequired: 4 },
      { name: "Enchantment", levelRequired: 5 },
      { name: "Necromancy", levelRequired: 6 },
    ],
    []
  );

  // Expertise levels
  const expertiseLevels = useMemo(
    () => [
      { name: "Expert", threshold: 15, maxPoints: 16 },
      { name: "Adept", threshold: 8, maxPoints: 15 },
      { name: "Apprentice", threshold: 3, maxPoints: 8 },
      { name: "Novice", threshold: 0, maxPoints: 3 },
    ],
    []
  );

  return (
    <div className={classes.spellbook}>
      <h1>Spellbook</h1>
      <div className={classes.container}>
        <div className={classes.schools}>
          <h3>Schools of Magic</h3>
          <ol>
            {schools.map((schoolData) =>
              player.level >= schoolData.levelRequired ? (
                <School
                  key={schoolData.name}
                  text={schoolData.name}
                  active={school === schoolData.name.toLowerCase()}
                  onChangeSchool={() =>
                    handleSchoolChange(schoolData.name.toLowerCase())
                  }
                />
              ) : (
                <School key={schoolData.name} text={"?"} />
              )
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
              onClick={handleResetButton}
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
          {expertiseLevels.map((level) => (
            <div
              key={level.name}
              className={`${classes.expertise} ${
                pointsExpended >= level.threshold ? "" : classes.closed
              }`}
            >
              {pointsExpended >= level.threshold && <h3>{level.name}</h3>}
              {pointsExpended >= level.threshold && (
                <h4>
                  {pointsExpended} / {level.maxPoints}
                </h4>
              )}
              <ul>
                {spellbook[school][level.name.toLowerCase()].map((skill) => {
                  const activeExpertise =
                    skill.points < skill.max &&
                    pointsExpended >= level.threshold &&
                    pointsExpended < level.maxPoints;

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
          ))}
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
