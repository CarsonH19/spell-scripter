import { changeHealth } from "../store/health-actions";

const conditionFunctions = {
  BURNING: (dispatch, target) => {
    changeHealth(dispatch, target, "DAMAGE", 5);
    console.log("BURN!!!")
  },
};

export default conditionFunctions;