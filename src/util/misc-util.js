import { constructStats } from "./dungeon-util";
import { v4 as uuidv4 } from "uuid";
import { combatActions } from "../store/combat-slice";
import updateStatTotals from "../store/stats-actions";

// Used to randomly select an image for a character when it is added to the combat order
export function getCharacterImage(url, numberOfImages) {
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
  for (let i = 0; i < numberOfCharacters; i++) {
    let character;
    const baseStats = constructStats(characterObj.stats);

    if (characterObj.identifier === "HERO") {
      character = {
        ...characterObj,
        stats: baseStats,
        damageDisplay: "",
      };
    } else if (characterObj.identifier === "ENEMY") {
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
}
