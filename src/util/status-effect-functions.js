import { changeHealth } from "../store/health-actions";

const statusEffectFunctions = {
  BURNING: (dispatch, target) => {
    changeHealth(dispatch, target, "DAMAGE", 5);
  },
};

export default statusEffectFunctions;