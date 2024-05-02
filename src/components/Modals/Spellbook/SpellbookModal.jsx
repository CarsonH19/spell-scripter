import { useState } from "react";
import classes from "./SpellbookModal.module.css";

import Spell from "./Spell";

import SPELLS from "../../../data/spells";
import { useSelector } from "react-redux";

export default function SpellbookModal() {
  const [active, setActive] = useState(1);
  const [school, setSchool] = useState(SPELLS["evocation"]);

  const player = useSelector((state) => state.player);
  const preparedSpells = player.spellList.length;
  const totalSpells = player.stats.arcana.totalArcana + 3;

  const handleChange = (index) => {
    setActive(index);
  };

  const handleSchoolChange = (name) => {
    setSchool(SPELLS[name]);
  };

  let content;

  switch (active) {
    case 1:
      content = <div></div>;
      break;

    case 2:
      content = (
        <div className={classes.prepare}>
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
              <li onClick={() => handleSchoolChange("necromancy")}>
                Necromancy
              </li>
              <li onClick={() => handleSchoolChange("enchantment")}>
                Enchantment
              </li>
              <li onClick={() => handleSchoolChange("illusion")}>Illusion</li>
            </ol>
          </div>
          <div className={classes.spells}>
            <h3>Spells</h3>
            <ul>
              {school.map((spell) => (
                <Spell key={spell.name} spell={spell} />
              ))}
            </ul>
            <div className={classes.prepared}>
              <h3>Prepared</h3>
              <p>
                {preparedSpells} / {totalSpells}
              </p>
              <ul>
                {player.spellList.map((spell) => (
                  <Spell key={spell.name} spell={spell} />
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
          Spell Mastery
        </button>
        <button
          onClick={() => handleChange(2)}
          className={active === 2 ? classes.active : ""}
        >
          Prepared Spells
        </button>
      </div>
      <div className={classes.content}>{content}</div>
    </div>
  );
}
