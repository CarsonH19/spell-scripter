const CONDITIONS = {
  BURNING: {
    name: "Condition: Burning",
    display: true,
    image: "",
    description: "You take damage on the start of each of your turns",
    durationType: "ROUND",
    duration: 3,
    reset: 3,
    stats: {},
    function: true,
  },
  POISONED: {
    name: "Poisoned",
    display: true,
    image: "",
    description: "Weakened from poison.",
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
    name: "Action: Guarding",
    display: true,
    image: "",
    description: "Guarding from incoming attacks.",
    effect: ["Defense +50%"],
    durationType: "ROUND",
    duration: 1,
    reset: 1,
    stats: {},
  },
};

export default CONDITIONS;
