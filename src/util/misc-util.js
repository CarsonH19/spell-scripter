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

// Adds enemies to the combat order
export function addEnemyToOrder(dispatch, enemyObj, numberOfEnemies = 1) {
  for (let i = 0; i < numberOfEnemies; i++) {
    const baseStats = constructStats(enemyObj.stats);
    const enemy = {
      ...enemyObj,
      id: uuidv4(),
      stats: baseStats,
      damageDisplay: "",
    };

    console.log(enemy);

    dispatch(combatActions.addCharacter({ character: enemy }));
    updateStatTotals(dispatch, enemy.id);
    dispatch(
      combatActions.updateHealth({
        id: enemy.id,
        change: "HEAL",
        value: 999,
      })
    );
  }
}
