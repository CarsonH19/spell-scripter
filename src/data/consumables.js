const CONSUMABLES = {
  LESSER_HEALTH_POTION: {
    name: "Lesser Health Potion",
    description: "A small vial of glowing red liquid.",
    image: "",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: true,
    effect: "Restores 30HP. Can be used during combat.",
    // soundEffect: gulpingWater24,
    // function: (dispatch, target) => {
    //   dispatch(changeHealthThunk({ target, change: "HEAL", value: 30 }));
    // },
  },
  CRYPTBREAD: {
    name: "Cryptbread",
    description: "A chunk of stale bread as hard as stone.",
    image: "",
    type: "CONSUMABLE",
    rarity: "Common",
    useInCombat: false,
    effect: "Restores 15HP.",
    // soundEffect: chewCrackersMouth,
    // function: (dispatch, target) => {
    //   dispatch(changeHealthThunk({ target, change: "HEAL", value: 30 }));
    // },
  },

  BONE_MARROW_SOUP: {
    name: "Bone Marrow Soup",
    description: "",
    image: "",
    type: "CONSUMABLE",
    rarity: "Common",
    useInCombat: false,
    effect: "Restores 15HP.",
    // soundEffect: gulpingWater24,
    // function: () => {
    //   healPlayer(15);
    // },
  },

  MARROWSTONE_CHEESE: {
    name: "Marrowstone Cheese",
    description: "",
    image: "",
    type: "CONSUMABLE",
    rarity: "Rare",
    effect: "Restores 25HP when eaten.",
    // soundEffect: chewCrackersMouth,
    // function: () => {
    //   healPlayer(25);
    // },
  },

  TOMBSTONE_TRUFFLE: {
    name: "Tombstone Truffle",
    description: "",
    image: "",
    type: "CONSUMABLE",
    rarity: "Rare",
    effect: "Restores 25HP when eaten.",
    // soundEffect: chewCrackersMouth,
    // function: () => {
    //   healPlayer(25);
    // },
  },
};

export default CONSUMABLES;
