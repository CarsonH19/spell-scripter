const CONDITIONS = {
  BURNING: {
    name: "Burning",
    display: true,
    image: "",
    type: "DEBUFF",
    description: "The target takes damage at that start of each of its turns.",
    effect: [""],
    durationType: "ROUND",
    duration: 3,
    reset: 3,
    stats: {},
    function: "BURNING",
  },
  POISONED: {
    name: "Poisoned",
    display: true,
    image: "",
    type: "DEBUFF",
    // description: "Weakened from poison.",
    effect: ["Strength -1", "Agility -1"],
    durationType: "ROUND",
    duration: 3,
    reset: 3,
    stats: {
      strength: {
        strengthChange: -1,
      },
      agility: {
        agilityChange: -1,
      },
    },
  },
  GUARD: {
    name: "Guarding",
    display: true,
    image: "",
    type: "BUFF",
    description: "Guarding from incoming attacks.",
    effect: ["Defense +50%"],
    durationType: "ROUND",
    duration: 1,
    reset: 1,
    stats: {},
  },
};

export default CONDITIONS;
