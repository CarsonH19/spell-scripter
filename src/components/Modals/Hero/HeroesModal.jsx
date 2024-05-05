import classes from "./HeroesModal.module.css";

import heroes from "../../../data/heroes";

import HeroStats from "./HeroStats";

import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { heroActions } from "../../../store/hero-slice";
import Icon from "../../UI/Icon";

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
        <ul className={classes.left}>
          {heroes.map((hero) => {
            if (hero.unlocked) {
              return (
                <Icon
                  key={hero.name}
                  style={{ backgroundImage: `url(${hero.image})` }}
                  alt={hero.name}
                  onMouseEnter={() => setHoveredElement(hero)}
                  onClick={() => handleChangeParty(hero)}
                />
              );
            }
          })}
        </ul>
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
            <ul>
              {party.map((hero) => (
                <Icon
                  key={hero.name}
                  src=""
                  alt={hero.name}
                  onMouseEnter={() => setHoveredElement(hero)}
                  onClick={() => handleChangeParty(hero)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
