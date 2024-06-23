import store from "../store/index";

import { changeHealth } from "../store/health-actions";
import { combatActions } from "../store/combat-slice";
import changeStatusEffect from "../store/status-effect-actions";
import CONDITIONS from "../data/conditions";

const abilityFunctions = {
  HOLY_SMITE: (dispatch, target) => {
    // Double damage & no roll to hit
    const siggurd = findCharacterInOrder("Siggurd");

    let damage = siggurd.stats.strength.attack;
    damage += siggurd.stats.arcana.spellPower * 2;

    changeHealth(dispatch, target, "DAMAGE", damage);
  },
  DIVINE_GUARDIAN: (dispatch, target) => {
    // Siggurd takes all damage from the hero with lowest health for 3 rounds

    const DIVINE_GUARDIAN = {
      name: "Divine Guardian",
      display: true,
      image: "",
      description: "All damage taken will be redirected to Siggurd instead.",
      effect: ["Damage -100%"],
      durationType: "ROUND",
      duration: 3,
      reset: 3,
      stats: {},
    };

    changeStatusEffect(dispatch, target, "ADD", DIVINE_GUARDIAN);
  },
  VENOM_STRIKE: (dispatch, target) => {

    console.log("POISONED")
    // Double damage & no roll to hit
    const riven = findCharacterInOrder("Riven");

    const damage = riven.stats.strength.attack;
    changeHealth(dispatch, target, "DAMAGE", damage);
    changeStatusEffect(dispatch, target, "ADD", CONDITIONS.POISONED);
  },
};

export default abilityFunctions;

// ===========================================
//             HELPER FUNCTIONS
// ===========================================

function findCharacterInOrder(id) {
  const order = store.getState().combat.order;
  return order.find((character) => character.id === id);
}

export function useAbility(dispatch, character) {
  // check character abilityA & abilityB objects
  const { abilityA } = checkAbilityCooldowns(character);

  // Conditionally check which ability the character is using A or B
  let ability = abilityA ? "abilityA" : "abilityB";
  const abilityFunction = abilityFunctions[character[ability].function];

  // NOTE: If multiple characters use this focus can I add an if-statement to check for the correct name?
  switch (character[ability].focus) {
    // case "SELF":
    // break;

    // case "RANDOM_HERO":
    // break;

    // case "RANDOM_ENEMY":
    // break;

    case "HEROES":
      {
        // Siggurd B - Divine Guardian
        if (character.name === "Siggurd") {
          const targetGroup = findTargetGroup("HEROES");
          const player = targetGroup.find((player) => player.id === "Player");
          let lowestHealthHero = player;
          for (let i = 0; i < targetGroup.length; i++) {
            if (
              lowestHealthHero.currentHealth > targetGroup[i].currentHealth &&
              targetGroup[i].name !== "Siggurd"
            ) {
              lowestHealthHero = targetGroup[i];
            }
          }
        }

        abilityFunction(dispatch, lowestHealthHero);
      }
      break;

    // case "ENEMIES":
    // break;

    // case "HIGHEST_STRENGTH":
    // break;

    // case "HIGHEST_AGILITY":
    // break;

    // case "HIGHEST_ARCANA":
    // break;

    // case "HIGHEST_HEALTH":
    // break;

    case "LOWEST_HEALTH":
      {
        // Riven A - Venom Strike
        const targetGroup = findTargetGroup("ENEMIES");
        let target = targetGroup[0];
        for (let i = 0; i < targetGroup.length; i++) {
          if (target.currentHealth > targetGroup[i].currentHealth) {
            target = targetGroup[i];
          }
        }

        abilityFunction(dispatch, target);
      }
      break;

    // case "HIGHEST_DEFENSE":
    // break;

    // case "HIGHEST_ATTACK":
    // break;

    // DAMAGING ABILITIES
    case "HIGHEST_HEALTH":
      {
        // Siggurd A - Holy Smite
        if (character.name === "Siggurd") {
          const targetGroup = findTargetGroup("ENEMIES");
          let target = targetGroup[0];
          for (let i = 0; i < targetGroup.length; i++) {
            if (targetGroup[i].currentHealth > target.currentHealth) {
              target = targetGroup[i];
            }
          }
          abilityFunction(dispatch, target);
        }
      }
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

// Returns an array of the desired group from the current combat order
export function findTargetGroup(group) {
  const order = store.getState().combat.order;
  let targetGroup = [];

  // Determine targetGroup
  if (group === "ENEMIES") {
    for (let i = 0; i < order.length; i++) {
      if (order[i].identifier === "ENEMY") {
        targetGroup.push(order[i]);
      }
    }
  } else if (group === "HEROES") {
    for (let i = 0; i < order.length; i++) {
      if (order[i].identifier === "HERO" || order[i].identifier === "PLAYER") {
        targetGroup.push(order[i]);
      }
    }
  }

  return targetGroup;
}
