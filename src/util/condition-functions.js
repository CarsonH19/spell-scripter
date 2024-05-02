import { changeHealth } from "../store/health-actions";

const conditionFunctions = {
  BURNING: (dispatch, target) => {
    changeHealth(dispatch, target, "DAMAGE", 5);
  },
};

export default conditionFunctions;