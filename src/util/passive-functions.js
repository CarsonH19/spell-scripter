import CONDITIONS from "../data/conditions";
import store from "../store/index";
import changeStatusEffect from "../store/status-effect-actions";

const passiveFunctions = {
  // Siggurd
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
  // Riven
  LOOT_SENSE: () => {
    // 5% increase of finding items
    return;
  },
  //Liheth
  BURNING_DEVOTION: (dispatch, target) => {
    const burnChance = Math.random();

    // 10% Chance to cause the Burning Condition
    if (burnChance > 0.9) {
      changeStatusEffect(dispatch, target, "ADD", CONDITIONS.BURNING);
    }
  },
};

export default passiveFunctions;

export function checkForPassiveAbility(dispatch, character, when, target) {
  // Checks if character is in the combat order
  const order = store.getState().combat.order;
  let isCharacterInParty = order.find((char) => char.id === character.id);
  if (!isCharacterInParty) return;

  // Checks if character has a passive ability
  if (!("passive" in character)) return;

  const passiveFunction = passiveFunctions[character.passive.function];

  switch (when) {
    case "OUTSIDE_COMBAT":
      if (
        "type" in character.passive &&
        character.passive.when === "OUTSIDE_COMBAT"
      ) {
        return passiveFunction();
      }
      break;

    case "BEFORE_COMBAT":
      if (
        "when" in character.passive &&
        character.passive.when === "BEFORE_COMBAT"
      ) {
        passiveFunction(dispatch, character);
      }
      break;

    case "DURING_COMBAT":
      if (
        "when" in character.passive &&
        character.passive.when === "DURING_COMBAT"
      ) {
        passiveFunction(dispatch, target);
      }
      break;

    case "AFTER_COMBAT":
      if (
        "when" in character.passive &&
        character.passive.when === "AFTER_COMBAT"
      ) {
        passiveFunction(dispatch, character);
      }
      break;

    default:
      return;
  }
}
