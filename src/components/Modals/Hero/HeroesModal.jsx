import classes from "./HeroesModal.module.css";

import heroes from "../../../data/heroes";

import HeroStats from "./HeroStats";

import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { heroActions } from "../../../store/hero-slice";

export default function HeroesModal() {
  const dispatch = useDispatch();
  const party = useSelector((state) => state.hero.party);
  const [hoveredElement, setHoveredElement] = useState(null);

  const handleChangeParty = (hero) => {
    if (party.includes(hero)) {
      dispatch(heroActions.changeParty({ change: "REMOVE", hero }));
    } else {
      dispatch(heroActions.changeParty({ change: "ADD", hero }));
    }
  };

  return (
    <div className={classes.hero}>
      <h1>Heroes</h1>
      <div className={classes.container}>
        <div className={classes.left}>
          {heroes.map((hero) => {
            if (hero.unlocked) {
              return (
                <img
                  key={hero.name}
                  src=""
                  alt={hero.name}
                  onMouseEnter={() => setHoveredElement(hero)}
                  onClick={() => handleChangeParty(hero)}
                />
              );
            }
          })}
        </div>
        <div className={classes.right}>
          <div className={classes.selected}>
            {hoveredElement ? (
              <HeroStats hero={hoveredElement} />
            ) : (
              <p>Please select a hero.</p>
            )}
          </div>
          <div className={classes.party}>
            <h3>Selected Party Members</h3>
            <div>
              {party.map((hero) => (
                <img
                  key={hero.name}
                  src=""
                  alt={hero.name}
                  onMouseEnter={() => setHoveredElement(hero)}
                  onClick={() => handleChangeParty(hero)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
