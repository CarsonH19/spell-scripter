import { useState } from "react";
import classes from "./SpellbookModal.module.css";

import Spell from "./Spell";
import Skill from "./Skill";

import SPELLS from "../../../data/spells";
import { useSelector } from "react-redux";

import Tooltip from "../../UI/Tooltip";

export default function SpellbookModal() {
  const [active, setActive] = useState(1);
  const [school, setSchool] = useState("evocation");

  const spellbook = useSelector((state) => state.spellbook);

  const pointsExpended = calculateTotalPoints(spellbook[school]);
  console.log(pointsExpended);

  const player = useSelector((state) => state.player);
  const preparedSpells = player.spellList.length;
  const totalSpells = player.stats.arcana.totalArcana + 3;

  const handleChange = (index) => {
    setActive(index);
  };

  const handleSchoolChange = (name) => {
    setSchool(name);
  };

  let content;

  switch (active) {
    case 1: // MASTERY
      content = (
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
            <div
              className={`${classes.expertise} ${
                pointsExpended < 17 ? classes.closed : ""
              }`}
            >
              <h3>Expert</h3>
              {pointsExpended >= 17 && <h4>{pointsExpended} / 24</h4>}
              <ul>
                {console.log(spellbook[school].expert)};
                {console.log(spellbook[school])};

                {spellbook[school].expert.map((skill) => (
                  <Tooltip
                    key={skill.name}
                    title={skill.name}
                    detailOne={skill.text}
                  >
                    <Skill key={skill.name} skill={skill} />
                  </Tooltip>
                ))}
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
                {spellbook[school].adept.map((skill) => (
                  <Tooltip
                    key={skill.name}
                    title={skill.name}
                    detailOne={skill.text}
                  >
                    <Skill key={skill.name} skill={skill} />
                  </Tooltip>
                ))}
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
                {spellbook[school].apprentice.map((skill) => (
                  <>
                    <Tooltip
                      key={skill.name}
                      title={skill.name}
                      detailOne={skill.text}
                    >
                      <Skill key={skill.name} skill={skill} />
                    </Tooltip>
                  </>
                ))}
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
                {spellbook[school].novice.map((skill) => (
                  <div key={skill.name}>
                    <Tooltip
                      key={skill.name}
                      title={skill.name}
                      detailOne={skill.text}
                      position="skill"
                    >
                      <Skill key={skill.name} skill={skill} school={school} />
                    </Tooltip>
                    <p>
                      {skill.points} / {skill.max}
                    </p>
                  </div>
                ))}
              </ul>
            </div>
            <h3>Mastery Points: {player.masteryPoints}</h3>
            <button>Reset Mastery Points</button>
          </div>
        </div>
      );
      break;

    case 2: // SPELLS
      content = (
        <div className={classes.container}>
          <div className={classes.schools}>
            <h3>Schools of Magic</h3>
            <ol>
              <li onClick={() => handleSchoolChange("evocation")}>Evocation</li>
              <li onClick={() => handleSchoolChange("restoration")}>
                Restoration
              </li>
              <li onClick={() => handleSchoolChange("abjuration")}>
                Abjuration
              </li>
              <li onClick={() => handleSchoolChange("conjuration")}>
                Conjuration
              </li>
              <li onClick={() => handleSchoolChange("enchantment")}>
                Enchantment
              </li>
              <li onClick={() => handleSchoolChange("necromancy")}>
                Necromancy
              </li>
            </ol>
          </div>
          <div className={classes.spells}>
            <ul>
              {SPELLS[school].map((spell) => {
                if (spell.unlocked) {
                  return (
                    <Tooltip
                      key={spell.name}
                      title={spell.name}
                      text={spell.school}
                      detailOne={spell.description}
                    >
                      <Spell key={spell.name} spell={spell} />
                    </Tooltip>
                  );
                }
              })}
            </ul>
            <h3>Prepared Spells</h3>
            <div className={classes.prepared}>
              <p className={classes.counter}>
                {preparedSpells} / {totalSpells}
              </p>
              <ul>
                {player.spellList.map((spell) => (
                  <Tooltip
                    key={spell.name}
                    title={spell.name}
                    text={spell.school}
                    detailOne={spell.description}
                  >
                    <Spell key={spell.name} spell={spell} />
                  </Tooltip>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
      break;
  }

  return (
    <div className={classes.spellbook}>
      <h1>Spellbook</h1>
      <div className={classes.buttons}>
        <button
          onClick={() => handleChange(1)}
          className={active === 1 ? classes.active : ""}
        >
          Mastery
        </button>
        <button
          onClick={() => handleChange(2)}
          className={active === 2 ? classes.active : ""}
        >
          Spells
        </button>
      </div>
      <div className={classes.content}>{content}</div>
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
