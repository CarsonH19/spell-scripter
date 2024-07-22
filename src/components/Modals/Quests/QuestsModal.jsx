import heroes from "../../../data/heroes";
import quests from "../../../data/quests";

import classes from "./QuestsModal.module.css";

import Icon from "../../UI/Icon";
import HeroQuests from "./HeroQuests";

import { useEffect, useState } from "react";

export default function QuestsModal() {
  const [index, setIndex] = useState(0);

  const hasHero = heroes.find((hero) => hero.unlocked);
  const [hoveredElement, setHoveredElement] = useState(
    hasHero ? hasHero : null
  );

  let lowercaseName;
  let activeQuests;

  if (hoveredElement) {
    lowercaseName = hoveredElement.name.toLowerCase();
    activeQuests = quests[lowercaseName];
    activeQuests = activeQuests.filter((quest) => quest.unlocked).reverse();
  }

  // useEffect(() => {
  //   console.log()
  //   setIndex(activeQuests.length - 1);
  // }, []);

  const handleHoveredHero = (hero) => {
    setHoveredElement(hero);
  };

  const handleNextPage = () => {
    if (index < activeQuests.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevPage = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className={classes["quest-modal"]}>
      <h1>Quests</h1>
      <ul className={classes.heroes}>
        {heroes.map((hero, index) => {
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
          }

          if (heroes.length === 0) {
            return <Icon key={0} className={classes.empty}></Icon>;
          }
        })}
      </ul>

      {hoveredElement && (
        <div className={classes.content}>
          <div className={classes.hero}>
            <h3>{hoveredElement.name}</h3>
            <img
              src={`${hoveredElement.image}.png`}
              alt={hoveredElement.name}
            />
          </div>
          <HeroQuests
            index={index}
            quests={activeQuests}
            onLeftClick={handlePrevPage}
            onRightClick={handleNextPage}
          />
        </div>
      )}

      {!hoveredElement && (
        <p className={classes["no-quests"]}>No quests available.</p>
      )}
    </div>
  );
}
