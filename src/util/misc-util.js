import store from "../store/index";

import { constructStats } from "./dungeon-util";
import { v4 as uuidv4 } from "uuid";
import { combatActions } from "../store/combat-slice";
import { dungeonActions } from "../store/dungeon-slice";
import updateStatTotals from "../store/stats-actions";

// Used to randomly select an image for a character when it is added to the combat order
export function getImageFromList(url, numberOfImages) {
  // example url -> src/assets/images/enemies/wandering-wisp
  let imageList = [];
  for (let i = 1; i <= numberOfImages; i++) {
    imageList.push(`${url}-${i}`);
  }
  const index = Math.floor(Math.random() * imageList.length);
  return imageList[index];
}

// Adds a character/s to the combat order
export function addCharacterToOrder(
  dispatch,
  characterObj,
  numberOfCharacters = 1
) {
  console.log(characterObj);
  for (let i = 0; i < numberOfCharacters; i++) {
    let character;

    if (characterObj.identifier === "HERO") {
      const hero = getHeroObject(characterObj.name);
      console.log(hero);
      const baseStats = constructStats(hero.stats);
      character = {
        ...hero,
        stats: baseStats,
        damageDisplay: "",
      };
    }

    if (characterObj.identifier === "ENEMY") {
      const baseStats = constructStats(characterObj.stats);
      character = {
        ...characterObj,
        id: uuidv4(),
        stats: baseStats,
        damageDisplay: "",
      };
    }

    dispatch(combatActions.addCharacter({ character }));
    updateStatTotals(dispatch, character.id);
    dispatch(
      combatActions.updateHealth({
        id: character.id,
        change: "HEAL",
        value: 999,
      })
    );
  }

  function getHeroObject(name) {
    const heroes = store.getState().hero.heroes;
    for (let i = 0; i < heroes.length; i++) {
      if (heroes[i].name === name) {
        console.log(heroes[i]);
        return heroes[i];
      }
    }
  }
}
