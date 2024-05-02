const CONDITIONS = {
  BURNED: {
    name: "Burned",
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
    name: "Guarding",
    display: true,
    image: "",
    description: "Defense +50%",
    duration: 2, // Is immediately decremented so it must be set to 2
    stats: {},
  },
};

export default CONDITIONS;

