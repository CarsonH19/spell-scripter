const EQUIPMENT = {
  BERSERKER_PAULDRON: {
    name: "Berserker Pauldron",
    description: "An intimidating shoulder pauldron belonging to a long passed warrior.",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Rare",
    effect: ["Strength: +2", "Agility: -1"],
    stats: {
      strength: {
        strengthChange: 2,
      },
      agility: {
        agilityChange: -1,
      },
    },
  },
  BRACELET_OF_THE_SERPENT: {
    name: "Bracelet of the Serpent",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Rare",
    effect: ["Strength: -1", "Agility: +2"],
    stats: {
      strength: {
        strengthChange: -1,
      },
      agility: {
        agilityChange: 2,
      },
    },
  },
};

export default EQUIPMENT;
