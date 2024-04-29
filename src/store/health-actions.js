import { heroActions } from "./hero-slice";
import { dungeonActions } from "./dungeon-slice";
import { playerActions } from "./player-slice";

import store from "./index";
import { combatActions } from "./combat-slice";

export function changeHealth(
  dispatch,
  target,
  change,
  value = 0,
  damageType = null
) {
  const id = target.id;

  if (change === "DAMAGE") {
    for (let i = 0; i < target.weaknesses.length; i++) {
      if (target.weaknesses[i] === damageType) {
        value = value * 1.5;
        console.log(`Weakness Found!`);
      }
    }

    for (let i = 0; i < target.resistances.length; i++) {
      if (target.resistances[i] === damageType) {
        value = value * 0.5;
        console.log(`Resistance Found!`);
      }
    }
  }

  // if (change === "HEAL") {
    // currently not needed
  // }

  switch (target.identifier) {
    case "PLAYER":
      dispatch(playerActions.updateHealth({ change, value }));
      // checkForDeath(dispatch, "PLAYER", id); NOT NEEDED!?
      break;

    case "HERO":
      dispatch(heroActions.updateHealth({ id, change, value }));
      checkForDeath(dispatch, "HERO", id);
      break;

    case "ENEMY":
      dispatch(dungeonActions.updateHealth({ id, change, value }));
      checkForDeath(dispatch, "ENEMY", id);
      break;
  }
}

function checkForDeath(dispatch, identifier, id) {
  switch (identifier) {
    case "HERO":
      {
        const heroes = store.getState().hero.party;
        let hero = heroes.find((hero) => hero.id === id);

        if (hero.currentHealth <= 0) {
          const order = store.getState().combat.order;
          hero = order.find((character) => character.id === hero.id);
          dispatch(combatActions.removeCharacter({ character: hero }));
          dispatch(heroActions.changeParty({ hero, change: "REMOVE" })
          );
          console.log(`${hero.name} has died!`);
        }
      }
      break;

    case "ENEMY":
      {
        const enemies = store.getState().dungeon.contents.enemies;
        let enemy = enemies.find((enemy) => enemy.id === id);

        if (enemy.currentHealth <= 0) {
          const order = store.getState().combat.order;
          enemy = order.find((character) => character.id === enemy.id);
          dispatch(combatActions.removeCharacter({ character: enemy }));
          dispatch(
            dungeonActions.changeEnemies({ enemy, change: "REMOVE" })
          );
          console.log(`${enemy.name} has died!`);
        }
      }
      break;
  }
}
