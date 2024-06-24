import { changeHealth } from "../store/health-actions";

const statusEffectFunctions = {
  BURNING: (dispatch, target) => {
    console.log("BURN");
    changeHealth(dispatch, target, "DAMAGE", 5);
  },
};

export default statusEffectFunctions;
