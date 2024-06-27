import store from "../store/index";
import { changeHealth } from "../store/health-actions";

const statusEffectFunctions = {
  BURNING: (dispatch, target) => {
    let damage = 3;
    // add Consuming Flames skill check here to find damage
    changeHealth(dispatch, target, "DAMAGE", damage);
  },
  STORM_SPHERE: (dispatch, target) => {
    const spellPower = store.getState().player.stats.arcana.spellPower;
    const damage = Math.round(spellPower / 2);
    changeHealth(dispatch, target, "DAMAGE", damage);
  },
};

export default statusEffectFunctions;
