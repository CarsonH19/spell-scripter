import store from "../store";
import { getTarget, rollToHit, calcDamage } from "../store/combat-actions";
import { changeHealth } from "../store/health-actions";

export default async function castSpell(dispatch, spell) {
  const player = store.getState().player;
  let target;

  // check for spell target type & select a target if applicable
  switch (spell.spellTarget) {
    case "ENEMY":
      {
        target = await getTarget(); // MAKE DYNAMIC (can choose different target types ex. getTarget("ENEMY") getTarget("ALLY"))
        const hit = rollToHit(player, target);

        if (hit) {
          const damage = calcDamage(spell, "SPELL"); // use state player obj?!?
          console.log(damage)
          changeHealth(dispatch, target, "DAMAGE", damage, null);
        }
      }
      break;
    case "ALLY":
      break;
    case "ENEMIES":
      break;
    case "ALLIES":
      break;
    case "SELF":
      break;
    case "ALL":
      break;
  }
}

// choose a target
// check hit or save
// // roll20
// if spell hits call spell function / pass target as an argument
// dispatch changeHealth/changeStatus
