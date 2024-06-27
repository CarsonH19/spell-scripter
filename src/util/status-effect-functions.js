import store from "../store/index";
import { changeHealth } from "../store/health-actions";
import { checkSkillPoints } from "./spellbook-util";

const statusEffectFunctions = {
  BURNING: (dispatch, target) => {
    let damage = 3;
    // SKILL - Consuming Flames - Increases Burning damage
    const skillPoints = checkSkillPoints("Consuming Flames");
    for (let i = 0; i < skillPoints; i++) {
      damage += 2;
    }
    changeHealth(dispatch, target, "DAMAGE", damage);
  },
  STORM_SPHERE: (dispatch, target) => {
    const spellPower = store.getState().player.stats.arcana.spellPower;
    const damage = Math.round(spellPower / 2);
    changeHealth(dispatch, target, "DAMAGE", damage);
  },
};

export default statusEffectFunctions;
