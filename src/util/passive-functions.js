import store from "../store/index";
import changeStatusEffect from "../store/status-effect-actions";

const passiveFunctions = {
  RADIANT_AURA: (dispatch) => {
    const order = store.getState().combat.order;
    const radiantAura = {
      name: "Radiant Aura",
      display: true,
      image: "",
      description: "The undead is weakened in the presence of Siggurd.",
      effect: ["Defense -1"],
      // durationType: "INDEFINITE",
      // duration: 3,
      stats: { agility: { maxHealth: -1 } },
      function: false,
    };

    for (let i = 0; i < order.length; i++) {
      if (order[i].identifier === "ENEMY" && order[i].type === "UNDEAD") {
        // Add Radiant Aura to all Undead Enemies
        changeStatusEffect(dispatch, order[i], "ADD", radiantAura);
      }
    }
  },
};

export default passiveFunctions;

export function checkForPassiveAbility(dispatch, character, type) {
  if (!("passive" in character)) return;

  const passiveFunction = passiveFunctions[character.passive.function];

  switch (type) {
    case "OUTSIDE_COMBAT":
      if (
        "passive" in character &&
        "type" in character.passive &&
        character.passive.type === "BEFORE_COMBAT"
      ) {
        passiveFunction(dispatch, character);
      }
      break;

    case "BEFORE_COMBAT":
      if (
        "passive" in character &&
        "type" in character.passive &&
        character.passive.type === "BEFORE_COMBAT"
      ) {
        passiveFunction(dispatch, character);
      }
      break;

    case "DURING_COMBAT":
      if (
        "passive" in character &&
        "type" in character.passive &&
        character.passive.type === "DURING_COMBAT"
      ) {
        passiveFunction(dispatch, character);
      }
      break;

    case "AFTER_COMBAT":
      if (
        "passive" in character &&
        "type" in character.passive &&
        character.passive.type === "AFTER_COMBAT"
      ) {
        passiveFunction(dispatch, character);
      }
      break;
  }
}
