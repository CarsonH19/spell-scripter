const CONSUMABLES = {
  // ====================================================================
  //                          COMMON CONSUMABLES
  // ====================================================================
  CRYPTBREAD: {
    name: "Cryptbread",
    description: "A chunk of stale bread as hard as stone.",
    image: "src/assets/images/items/consumables/cryptbread.jpg",
    type: "CONSUMABLE",
    rarity: "Common",
    useInCombat: false,
    effect: ["Restores 15HP."],
    // soundEffect: chewCrackersMouth,
  },
  MARROWSTONE_CHEESE: {
    name: "Marrowstone Cheese",
    description: "A wedge of ancient moldy cheese.",
    image: "src/assets/images/items/consumables/marrowstone-cheese.jpg",
    type: "CONSUMABLE",
    rarity: "Common",
    useInCombat: false,
    effect: ["Restores 15HP."],
    // soundEffect: chewCrackersMouth,
  },
  ROTBANE_FERN: {
    name: "Rotbane Fern",
    description: "Ingredient",
    image: "src/assets/images/items/consumables/rotbane-fern.jpg",
    type: "CONSUMABLE",
    rarity: "Common",
    useInCombat: false,
    effect: [""],
    // soundEffect: chewCrackersMouth,
  },
  GRAVEBLOOM: {
    name: "Gravebloom",
    description: "Ingredient",
    image: "src/assets/images/items/consumables/gravebloom.jpg",
    type: "CONSUMABLE",
    rarity: "Common",
    useInCombat: false,
    effect: [""],
    // soundEffect: chewCrackersMouth,
  },
  GHOSTLIGHT_LILY: {
    name: "Gravelight Lily",
    description: "Ingredient",
    image: "src/assets/images/items/consumables/ghostlight-lily.jpg",
    type: "CONSUMABLE",
    rarity: "Common",
    useInCombat: false,
    effect: [""],
    // soundEffect: chewCrackersMouth,
  },
  WITCHFIRE_ORCHID: {
    name: "Witchfire Orchid",
    description: "Ingredient",
    image: "src/assets/images/items/consumables/witchfire-orchid.jpg",
    type: "CONSUMABLE",
    rarity: "Common",
    useInCombat: false,
    effect: [""],
    // soundEffect: chewCrackersMouth,
  },
  // ====================================================================
  //                           RARE CONSUMABLES
  // ====================================================================
  HEALTH_POTION: {
    name: "Health Potion",
    description: "A small bottle of glowing red liquid.",
    image: "src/assets/images/items/consumables/health-potion.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: true,
    effect: ["Restores 30% of your max HP.", "Can be used in combat."],
    // soundEffect: gulpingWater24,
  },
  MANA_POTION: {
    name: "Mana Potion",
    description: "A small bottle of glowing blue liquid.",
    image: "src/assets/images/items/consumables/mana-potion.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: true,
    effect: ["Restores 30% of your max MP.", "Can be used in combat."],
    // soundEffect: gulpingWater24,
  },
  LICHROOT: {
    name: "Lichroot",
    description: "Ingredient",
    image: "src/assets/images/items/consumables/lichroot.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: false,
    effect: [""],
    // soundEffect: chewCrackersMouth,
  },
  TOMBSTONE_TRUFFLE: {
    name: "Tombstone Truffle",
    description: "Ingredient",
    image: "src/assets/images/items/consumables/tombstone-truffle.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: false,
    effect: [""],
    // soundEffect: chewCrackersMouth,
  },
  SPIDER_EGG_YOLK: {
    name: "Spider Egg Yolk",
    description: "Food",
    image: "src/assets/images/items/consumables/spider-egg-yolk.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: false,
    effect: ["Restores 20HP"],
    //   soundEffect: gulpingWater24,
  },
  BLACKHEART_BREW: {
    name: "Blackheart Brew",
    description: "Chosen drink of the underworld.",
    image: "src/assets/images/items/consumables/blackheart-brew.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: true,
    effect: ["+5 Attack", "-5 Spell Power"],
    // soundEffect: gulpingWater24,
  },
  // ====================================================================
  //                           EPIC CONSUMABLES
  // ====================================================================
  HEXBANE_BREW: {
    name: "Hexbane Brew",
    description: "Potion",
    image: "src/assets/images/items/consumables/hexbane-brew.jpg",
    type: "CONSUMABLE",
    rarity: "Epic",
    useInCombat: true,
    effect: [
      "Removes and grants immunity to the Poisoned, Diseased, Haunted, and Cursed conditions.",
      "Effects persist for 10 rooms.",
    ],
    // soundEffect: gulpingWater24,
  },
  NECROTIC_NECTAR: {
    name: "Necrotic Nectar",
    description: "Potion",
    image: "src/assets/images/items/consumables/necrotic-nectar.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: true,
    effect: [
      "Restore all missing HP. However, your Arcana is reduced to 0.",
      "Effects persist for 10 rooms.",
    ],
    // soundEffect: gulpingWater24,
  },
  // ====================================================================
  //                             CANDLES
  // ====================================================================
  WARDING_CANDLE: {
    name: "Warding Candle",
    description: "White Candle",
    image: "src/assets/images/items/consumables/warding-candle.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: true,
    effect: ["While lit undead enemies may flee from you."],
    // soundEffect: flameLicks2,
  },
  SOOTHING_CANDLE: {
    name: "Soothing Candle",
    description: "Green Candle",
    image: "src/assets/images/items/consumables/soothing-candle.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: true,
    effect: ["While lit all allies gain +6 HP Regeneration."],
    // soundEffect: flameLicks2,
  },
  FLICKERING_CANDLE: {
    name: "Flickering Candle",
    description: "Yellow Candle",
    image: "src/assets/images/items/consumables/flickering-candle.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: true,
    effect: ["While lit all allies gain +1 Dexterity"],

    // soundEffect: flameLicks2,
  },
  BLAZING_CANDLE: {
    name: "Blazing Candle",
    description: "Red Candle",
    image: "src/assets/images/items/consumables/blazing-candle.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: true,
    effect: ["While lit all allies gain +1 Strength"],
    // soundEffect: flameLicks2,
  },
  INVOKING_CANDLE: {
    name: "Invoking Candle",
    description: "Purple Candle",
    image: "src/assets/images/items/consumables/invoking-candle.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: true,
    effect: ["While lit all allies gain +1 Arcana"],
    // soundEffect: flameLicks2,
  },
  // ====================================================================
  //                              MISC.
  // ====================================================================
  SKELETON_KEY: {
    name: "Skeleton Key",
    description: "",
    image: "src/assets/images/items/consumables/skeleton-key.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: false,
    effect: [""],
    // soundEffect: gulpingWater24,
  },
  MAGIC_ROPE: {
    name: "Magic Rope",
    description:
      "A magical rope that can extend and attach itself to surfaces, making it easy to climb walls or reach high places.",
    image: "src/assets/images/items/consumables/skeleton-key.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: false,
    effect: [""],
    // soundEffect: gulpingWater24,
  },
  TRAP_DISARMING_KIT: {
    name: "Trap Disarming Kit",
    description: "A specialized set of tools for safely disarming traps.",
    image: "src/assets/images/items/consumables/skeleton-key.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: false,
    effect: ["Can be used to disarm traps."],
    // soundEffect: gulpingWater24,
  },
  SMOKE_BOMB: {
    name: "Smoke Bomb",
    description:
      "A small bomb that creates a thick smoke cloud obscuring your enemies vision.",
    image: "src/assets/images/items/consumables/skeleton-key.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: false,
    effect: ["-2 Hit Chance for all enemies."],
    // soundEffect: gulpingWater24,
  },
  LAUGHING_COFFIN_COIN: {
    name: "Skeleton Key",
    description: "",
    image: "src/assets/images/items/consumables/laughing-coffin-coin.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: false,
    effect: [""],
    // soundEffect: gulpingWater24,
  },
  // ====================================================================
  //                             WISPS
  // ====================================================================
  //   GUIDING_LIGHT: {
  //     name: "Guiding Light",
  //     description: "",
  //     image: "",
  //     type: "CONSUMABLE",
  //     rarity: "Rare",
  //     useInCombat: false,
  //     effect: "This wisp guides you to the nearest Candlelight Shrine.",
  //     // soundEffect: ghostBreathWithReverb,
  //   },
  //   ROWDY_WISP: {
  //     name: "Rowdy Wisp",
  //     description: "",
  //     image: "",
  //     type: "CONSUMABLE",
  //     rarity: "Rare",
  //     useInCombat: false,
  //     effect: "This wisp guides you to the Laughing Coffin Tavern.",
  //     // soundEffect: ghostBreathWithReverb,
  //   },
  //   BLEEDING_WISP: {
  //     name: "Bleeding Wisp",
  //     description: "",
  //     image: "",
  //     type: "CONSUMABLE",
  //     rarity: "Rare",
  //     useInCombat: false,
  //     effect: "This wisp guides you to the Crimson Covenant.",
  //     // soundEffect: ghostBreathWithReverb,
  //   },
  //   WICKED_WISP: {
  //     name: "Wicked Wisp",
  //     description: "",
  //     image: "",
  //     type: "CONSUMABLE",
  //     rarity: "Rare",
  //     useInCombat: false,
  //     effect: "This wisp guides you to Hag's Hollow.",
  //     // soundEffect: ghostBreathWithReverb,
  //   },
  //   CURIOUS_WISP: {
  //     name: "Curious Wisp",
  //     description: "",
  //     image: "",
  //     type: "CONSUMABLE",
  //     rarity: "Rare",
  //     useInCombat: false,
  //     effect: "This wisp guides you to Curator's Curio.",
  //     // soundEffect: ghostBreathWithReverb,
  //   },
  //   RESTLESS_WISP: {
  //     name: "Restless Wisp",
  //     description: "",
  //     image: "",
  //     type: "CONSUMABLE",
  //     rarity: "Rare",
  //     useInCombat: false,
  //     effect: "This wisp guides you to a random destination.",
  //     // soundEffect: ghostBreathWithReverb,
  //   }
};

export default CONSUMABLES;
