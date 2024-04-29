import store from "../store";
import { getTarget, rollToHit, calcDamage } from "../store/combat-actions";
import { changeHealth } from "../store/health-actions";

export default async function castSpell(dispatch, spell) {
  const order = store.getState().combat.order;

  const playerIndex = order.findIndex((char) => char.id === "Player");
  const player = order[playerIndex];

  let target;

  // check for spell target type & select a target if applicable
  switch (spell.spellTarget) {
    case "ENEMY": // single enemy targeted
      {
        if (spell.spellType === "HIT") {
          target = await getTarget("ENEMIES");
          console.log(target);
          const hit = rollToHit(player, target);

          if (hit) {
            const damage = calcDamage(spell, "SPELL"); // use state player obj?!?
            console.log(damage);
            changeHealth(dispatch, target, "DAMAGE", damage, null);
          }
        }
        // spell.spellType === "SAVE"
      }
      break;
    case "ALLY": // single ally targeted
      {
        if (spell.spellType === "HEAL") {
          target = await getTarget("ALLIES");
          console.log(target);
          const healValue = spell.healValue;
          changeHealth(dispatch, target, "HEAL", healValue, null);
        }
      }
      break;
    case "ENEMIES": // all enemies targeted
      break;
    case "ALLIES": // all allies including the player targeted
      break;
    case "SELF": // only the player is targeted
      break;
    case "ALL": // all characters in initiative are targeted
      break;
  }
}

// choose a target
// check hit or save
// // roll20
// if spell hits call spell function / pass target as an argument
// dispatch changeHealth/changeStatus
