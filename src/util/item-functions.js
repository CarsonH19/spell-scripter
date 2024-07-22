import store from "../store/index";
import { changeHealth } from "../store/health-actions";
import { combatActions } from "../store/combat-slice";
import changeStatusEffect from "../store/status-effect-actions";
import CONDITIONS from "../data/conditions";

export const itemFunctions = {
  CRYPTBREAD: (dispatch, target) => {
    changeHealth(dispatch, target, "HEAL", 15);
  },
  HEALTH_POTION: (dispatch, target) => {
    const value = Math.round(target.stats.strength.maxHealth * 0.3);
    changeHealth(dispatch, target, "HEAL", value);
  },
  MANA_POTION: (dispatch, target) => {
    const value = Math.round(target.stats.arcana.maxMana * 0.3);
    dispatch(combatActions.updateMana({ change: "ADD", value }));
  },
  MARROWSTONE_CHEESE: (dispatch, target) => {
    changeHealth(dispatch, target, "HEAL", 15);
  },
  ROTBANE_FERN: (dispatch, target) => {
    changeHealth(dispatch, target, "DAMAGE", 3);
    const chance = Math.random() * 100;
    if (chance > 50) {
      changeStatusEffect(dispatch, target, "REMOVE", CONDITIONS.DISEASED);
    }
  },
  GRAVEBLOOM: (dispatch, target) => {
    changeHealth(dispatch, target, "DAMAGE", 3);
  },
  GHOSTLIGHT_LILY: (dispatch, target) => {
    const chance = Math.random() * 100;
    if (chance > 50) {
      changeStatusEffect(dispatch, target, "ADD", CONDITIONS.HAUNTED);
    }
  },
  WITCHFIRE_ORCHID: (dispatch, target) => {
    changeHealth(dispatch, target, "DAMAGE", 3);
  },
  LICHROOT: (dispatch, target) => {
    changeHealth(dispatch, target, "DAMAGE", 5);
  },
  TOMBSTONE_TRUFFLE: (dispatch, target) => {
    changeHealth(dispatch, target, "HEAL", 3);
  },
  SPIDER_EGG_YOLK: (dispatch, target) => {
    changeStatusEffect(dispatch, target, "ADD", CONDITIONS.POISONED);
  },
  BLACKHEART_BREW: (dispatch, target) => {
    const statusEffect = {
      name: "Blackheart Brew",
      display: true,
      image: "",
      description: "",
      effect: ["+5 Attack", "-5 Spell Power"],
      durationType: "ROOM",
      duration: 5,
      stats: {
        strength: { attack: +5 },
        arcana: { spellPower: -5 },
      },
    };

    changeStatusEffect(dispatch, target, "ADD", statusEffect);
  },
  HEXBANE_BREW: (dispatch, target) => {
    const statusEffect = {
      name: "Hexbane Brew",
      display: true,
      image: "",
      description:
        "Immune to the Poisoned, Diseased, Haunted, and Cursed conditions.",
      effect: ["+5 Attack", "-5 Spell Power"],
      durationType: "ROOM",
      duration: 10,
      stats: {},
    };

    changeStatusEffect(dispatch, target, "ADD", statusEffect);
  },
  NECROTIC_NECTAR: (dispatch, target) => {
    const statusEffect = {
      name: "Necrotic Nectar",
      display: true,
      image: "",
      description:
        "Immune to the Poisoned, Diseased, Haunted, and Cursed conditions.",
      effect: ["+5 Attack", "-5 Spell Power"],
      durationType: "ROOM",
      duration: 10,
      stats: {
        arcana: {
          arcanaChange: target.stats.arcana.totalArcana,
        },
      },
    };

    changeHealth(dispatch, target, "HEAL", target.stats.strength.maxHealth);
    changeStatusEffect(dispatch, target, "ADD", statusEffect);
  },
  WARDING_CANDLE: (dispatch, target) => {
    let statusEffect = {
      name: "Warding Candle",
      display: true,
      image: "",
      description: "",
      effect: ["Undead enemies may flee from you."],
      durationType: "ROOM",
      duration: 10,
      stats: {},
    };

    changeStatusEffect(dispatch, target, "ADD", statusEffect);
  },
  SOOTHING_CANDLE: (dispatch, target) => {
    const order = store.getState().combat.order;
    let statusEffect = {
      name: "Soothing Candle",
      display: true,
      image: "src/assets/images/items/consumables/soothing-candle.jpg",
      description: "",
      effect: ["+6 HP Regeneration."],
      durationType: "ROOM",
      duration: 10,
      stats: {
        strength: { healthRegen: +6 },
      },
    };

    changeStatusEffect(dispatch, target, "ADD", statusEffect);
  },
  CALMING_CANDLE: (dispatch, target) => {
    const statusEffect = {
      name: "Calming Candle",
      display: true,
      image: "src/assets/images/items/consumables/calming-candle.jpg",
      description: "",
      effect: ["+6 MP Regeneration."],
      durationType: "ROOM",
      duration: 10,
      stats: {
        arcana: { manaRegen: +6 },
      },
    };

    changeStatusEffect(dispatch, target, "ADD", statusEffect);
  },
  FLICKERING_CANDLE: (dispatch, target) => {
    const statusEffect = {
      name: "Flickering Candle",
      display: true,
      image: "src/assets/images/items/consumables/flickering-candle.jpg",
      description: "",
      effect: ["+1 Agility."],
      durationType: "ROOM",
      duration: 10,
      stats: {
        agility: { agilityChange: +1 },
      },
    };

    changeStatusEffect(dispatch, target, "ADD", statusEffect);
  },
  BLAZING_CANDLE: (dispatch, target) => {
    const statusEffect = {
      name: "Blazing Candle",
      display: true,
      image: "src/assets/images/items/consumables/blazing-candle.jpg",
      description: "",
      effect: ["+6 Attack."],
      durationType: "ROOM",
      duration: 10,
      stats: {
        strength: { attack: +6 },
      },
    };

    changeStatusEffect(dispatch, target, "ADD", statusEffect);
  },
  INVOKING_CHEESE: (dispatch, target) => {
    const statusEffect = {
      name: "Invoking Candle",
      display: true,
      image: "src/assets/images/items/consumables/invoking-candle.jpg",
      description: "",
      effect: ["+6 Spell Power."],
      durationType: "ROOM",
      duration: 10,
      stats: {
        arcana: { spellPower: +6 },
      },
    };

    changeStatusEffect(dispatch, target, "ADD", statusEffect);
  },
};
