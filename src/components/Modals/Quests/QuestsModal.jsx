import heroes from "../../../data/heroes";
import quests from "../../../data/quests";

import classes from "./QuestsModal.module.css";

import Icon from "../../UI/Icon";
import HeroQuests from "./HeroQuests";

import { useState } from "react";

export default function QuestsModal() {
  const hasHero = heroes.some((hero) => hero.unlocked);
  const [hoveredElement, setHoveredElement] = useState(
    hasHero ? heroes[0] : ""
  );

  const lowercaseName = hoveredElement.name.toLowerCase();
  const activeQuests = quests[lowercaseName];
  console.log(activeQuests)

  const handleHoveredHero = (hero) => {
    setHoveredElement(hero);
  };

  return (
    <div className={classes["quest-modal"]}>
      <h1>Quests</h1>
      <ul className={classes.heroes}>
        {heroes.map((hero) => {
          if (hero.unlocked) {
            return (
              <Icon
                key={hero.name}
                style={{
                  backgroundImage: `url(${hero.icon}.png)`,
                }}
                alt={hero.name}
                onMouseEnter={() => handleHoveredHero(hero)}
              />
            );
          } else {
            return <Icon className={classes.empty}></Icon>;
          }
        })}
      </ul>
      <div className={classes.content}>
        <div className={classes.hero}>
          <h2>{hoveredElement.name}</h2>
          <img src={`${hoveredElement.image}.png`} alt={hoveredElement.name} />
        </div>
        {hoveredElement ? (
          <HeroQuests quests={activeQuests} />
        ) : (
          <p>No quests available.</p>
        )}
      </div>
    </div>
  );
}
