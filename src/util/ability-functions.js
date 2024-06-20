import store from "../store/index";

import { changeHealth } from "../store/health-actions";
import { combatActions } from "../store/combat-slice";
import { findTargetGroup } from "./behaviors";

const abilityFunctions = {
  HOLY_SMITE: (dispatch, target) => {
    // Double damage & no roll to hit
    const siggurd = findCharacterInOrder("Siggurd");

    let damage = siggurd.stats.strength.attack * 2;
    changeHealth(dispatch, target, "DAMAGE", damage);
  },
};

export default abilityFunctions;

function findCharacterInOrder(id) {
  const order = store.getState().combat.order;
  return order.find((character) => character.id === id);
}

export function useAbility(dispatch, character) {
  const targetGroup = findTargetGroup(character);
  let target = targetGroup[0];

  // check character abilityA & abilityB objects
  const { abilityA } = checkAbilityCooldowns(character);

  // Conditionally check which ability the character is using A or B
  let ability = abilityA ? "abilityA" : "abilityB";
  const abilityFunction = abilityFunctions[character[ability].function];

  switch (character[ability].focus) {
    // case "SELF":
    // case "RANDOM_HERO":
    // case "RANDOM_ENEMY":
    // case "HEROES":
    // case "ENEMIES":
    // case "HIGHEST_STRENGTH":
    // case "HIGHEST_AGILITY":
    // case "HIGHEST_ARCANA":
    // case "HIGHEST_HEALTH":
    // case "LOWEST_HEALTH":
    // case "HIGHEST_DEFENSE":
    // case "HIGHEST_ATTACK":

    // DAMAGING ABILITIES
    case "HIGHEST_HEALTH":
      // Siggurd
      // NOTE: If multiple characters use this focus can I add an if-statement to check for the correct name?
      for (let i = 0; i < targetGroup.length; i++) {
        if (targetGroup[i].currentHealth > target.currentHealth) {
          target = targetGroup[i];
        }
      }
      abilityFunction(dispatch, target);

      break;
  }

  dispatch(
    combatActions.updateCooldown({
      id: character.id,
      ability,
      change: "RESET",
    })
  );
}

export function checkAbilityCooldowns(character) {
  let abilityA = false;
  let abilityB = false;

  if ("abilityA" in character && "cooldown" in character.abilityA) {
    if (character.abilityA.cooldown === 0) {
      abilityA = true;
    }
  }

  if ("abilityB" in character && "cooldown" in character.abilityB) {
    if (character.abilityB.cooldown === 0) {
      abilityB = true;
    }
  }

  return { abilityA, abilityB };
}

export function decrementAbilityCooldowns(dispatch, character) {
  if ("abilityA" in character && "cooldown" in character.abilityA) {
    if (character.abilityA.cooldown > 0) {
      dispatch(
        combatActions.updateCooldown({
          id: character.id,
          ability: "abilityA",
          change: "DECREMENT",
        })
      );
    }
  }

  if ("abilityB" in character && "cooldown" in character.abilityB) {
    if (character.abilityB.cooldown > 0) {
      dispatch(
        combatActions.updateCooldown({
          id: character.id,
          ability: "abilityB",
          change: "DECREMENT",
        })
      );
    }
  }
}
