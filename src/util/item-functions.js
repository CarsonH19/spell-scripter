import { changeHealth } from "../store/health-actions";

export const itemFunctions = {
  CRYPTBREAD: (dispatch, target) => {
    changeHealth(dispatch, target, "HEAL", 15);
  },
  LESSER_HEALTH_POTION: (dispatch, target) => {
    changeHealth(dispatch, target, "HEAL", 30);
  },
};
