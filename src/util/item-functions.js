import { changeHealth } from "../store/health-actions";

export const itemFunctions = {
  CRYPTBREAD: (dispatch, target) => {
    changeHealth(dispatch, target, "HEAL", 15);
  },
};
