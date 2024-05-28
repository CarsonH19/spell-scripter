const CONDITIONS = {
  BURNING: {
    name: "Condition: Burning",
    display: true,
    image: "",
    description: "You take damage on the start of each of your turns",
    duration: 3,
    stats: {},
    function: true,
  },
  POISONED: {
    name: "Poisoned",
    display: true,
    image: "",
    description: "You take damage on the start of each of your turns",
    duration: 3,
    stats: {
      strength: {
        strengthChange: -1,
      },
      agility: {
        agilityChange: -2,
      },
    },
  },
  GUARD: {
    name: "Action: Guarding",
    display: true,
    image: "",
    description: "Defense +50%",
    duration: 1, // Is immediately decremented so it must be set to 2
    stats: {},
  },
};

export default CONDITIONS;
