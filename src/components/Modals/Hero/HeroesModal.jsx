import classes from "./HeroesModal.module.css";
import HeroStats from "./HeroStats";

import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { heroActions } from "../../../store/hero-slice";
import Icon from "../../UI/Icon";

import { constructStats } from "../../../util/dungeon-util";

export default function HeroesModal() {
  const dispatch = useDispatch();
  const heroes = useSelector((state) => state.hero.heroes);
  const party = useSelector((state) => state.hero.party);
  const hasHero = heroes.find((hero) => hero.unlocked);
  const [hoveredElement, setHoveredElement] = useState(
    hasHero ? hasHero : ""
  );

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
      {hasHero ? (
        <div className={classes.container}>
          <div className={classes.left}>
            <ul className={classes.heroes}>
              {heroes.map((hero) => {
                if (hero.unlocked) {
                  const isInParty = party.find((char) => char.id === hero.id);
                  return (
                    <Icon
                      key={hero.name}
                      style={{
                        backgroundImage: `url(${hero.icon}.png)`,
                        borderColor: isInParty
                          ? "var(--primary)"
                          : "var(--accent)",
                      }}
                      alt={hero.name}
                      className={isInParty ? classes.selected : ""}
                      onMouseEnter={() => handleHoveredHero(hero)}
                      onClick={() => handleChangeParty(hero)}
                    />
                  );
                }
              })}
            </ul>
            <img
              src={`${hoveredElement.image}.png`}
              alt={hoveredElement.name}
            />
            <div className={classes.party}>
              <p>Selected Party Members</p>
              <ul>
                {/* PARTY MEMBER 1 */}
                {(party[0] && (
                  <Icon
                    className={classes.chosen}
                    style={{
                      backgroundImage: `url(${party[0].icon}.png)`,
                    }}
                    onMouseEnter={() => handleHoveredHero(party[0])}
                    onClick={() => handleChangeParty(party[0])}
                  ></Icon>
                )) || <Icon className={classes.empty}></Icon>}
                {/* PARTY MEMBER 2 */}
                {(party[1] && (
                  <Icon
                    className={classes.chosen}
                    style={{
                      backgroundImage: `url(${party[1].icon}.png)`,
                    }}
                    onMouseEnter={() => handleHoveredHero(party[1])}
                    onClick={() => handleChangeParty(party[1])}
                  ></Icon>
                )) || <Icon className={classes.empty}></Icon>}
                {/* PARTY MEMBER 3 */}
                {(party[2] && (
                  <Icon
                    className={classes.chosen}
                    style={{
                      backgroundImage: `url(${party[2].icon}.png)`,
                    }}
                    onMouseEnter={() => handleHoveredHero(party[2])}
                    onClick={() => handleChangeParty(party[2])}
                  ></Icon>
                )) || <Icon className={classes.empty}></Icon>}
              </ul>
            </div>
          </div>
          <div className={classes.right}>
            <HeroStats hero={hoveredElement} />
          </div>
        </div>
      ) : (
        <p className={classes["no-heroes"]}>No heroes available.</p>
      )}
    </div>
  );
}
