import classes from "./HeroesModal.module.css";

import heroes from "../../../data/heroes";

import HeroStats from "./HeroStats";

import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { heroActions } from "../../../store/hero-slice";
import Icon from "../../UI/Icon";

import { constructStats } from "../../../util/dungeon-util";

export default function HeroesModal() {
  const dispatch = useDispatch();
  const party = useSelector((state) => state.hero.party);
  const [hoveredElement, setHoveredElement] = useState("");

  const handleHoveredHero = (hero) => {
    const baseStats = constructStats(hero.stats);
    const updatedHero = {
      ...hero,
      stats: baseStats,
      damageDisplay: "",
    };

    setHoveredElement(updatedHero);
  };

  const handleChangeParty = (hero) => {
    const isInParty = party.find((char) => char.id === hero.id);

    if (isInParty) {
      dispatch(heroActions.changeParty({ change: "REMOVE", hero }));
    } else {
      const baseStats = constructStats(hero.stats);
      const updatedHero = {
        ...hero,
        stats: baseStats,
        damageDisplay: "",
      };

      dispatch(heroActions.changeParty({ change: "ADD", hero: updatedHero }));
    }
  };

  return (
    <div className={classes.hero}>
      <h1>Heroes</h1>
      <div className={classes.container}>
        <div className={classes.left}>
          <ul className={classes.heroes}>
            {heroes.map((hero) => {
              if (hero.unlocked) {
                return (
                  <Icon
                    key={hero.name}
                    style={{ backgroundImage: `url(${hero.image})` }}
                    alt={hero.name}
                    onMouseEnter={() => handleHoveredHero(hero)}
                    onClick={() => handleChangeParty(hero)}
                  />
                );
              }
            })}
          </ul>
          <img src={hoveredElement.image} alt={hoveredElement.name} />
          <div className={classes.party}>
            <p>Selected Party Members</p>
            <ul>
              {party.map((hero) => (
                <Icon
                  key={hero.name}
                  src=""
                  alt={hero.name}
                  onMouseEnter={() => handleHoveredHero(hero)}
                  onClick={() => handleChangeParty(hero)}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className={classes.right}>
          {hoveredElement ? (
            <HeroStats hero={hoveredElement} />
          ) : (
            <p>Please select a hero.</p>
          )}
        </div>
      </div>
    </div>
  );
}
