const CONSUMABLES = {
  // ====================================================================
  //                          COMMON CONSUMABLES
  // ====================================================================
  CRYPTBREAD: {
    name: "Cryptbread",
    description: "A chunk of stale bread as hard as stone.",
    image: "/assets/images/items/consumables/cryptbread.jpg",
    type: "CONSUMABLE",
    rarity: "Common",
    useInCombat: false,
    effect: ["Restores 15HP."],
    audio: [false, "item", "chewCrackersMouth"],
  },
  MARROWSTONE_CHEESE: {
    name: "Marrowstone Cheese",
    description: "A wedge of ancient moldy cheese.",
    image: "/assets/images/items/consumables/marrowstone-cheese.jpg",
    type: "CONSUMABLE",
    rarity: "Common",
    useInCombat: false,
    effect: ["Restores 15HP."],
    audio: [false, "item", "chewCrackersMouth"],
  },
  ROTBANE_FERN: {
    name: "Rotbane Fern",
    description:
      "A hardy fern known for its ability to stave off decay. Often used in preservation and purification rituals.",
    image: "/assets/images/items/consumables/rotbane-fern.jpg",
    type: "CONSUMABLE",
    rarity: "Common",
    useInCombat: false,
    effect: ["Lose 3HP", "Chance to remove the Diseased condition."],
    audio: [false, "item", "chewCrackersMouth"],
  },
  GRAVEBLOOM: {
    name: "Gravebloom",
    description:
      "A delicate flower that blooms in graveyards. Its petals are a key ingredient in necromantic potions.",
    image: "/assets/images/items/consumables/gravebloom.jpg",
    type: "CONSUMABLE",
    rarity: "Common",
    useInCombat: false,
    effect: ["Lose 3HP"],
    audio: [false, "item", "chewCrackersMouth"],
  },
  SUNSHADE_BLOSSOM: {
    name: "Sunshade Blossom",
    description:
      "A pale, ghostly flower resembling a sunflower, illuminates the dark corridors of the catacombs with its radiant glow.",
    image: "/assets/images/items/consumables/sunshade-blossom.jpg",
    type: "CONSUMABLE",
    rarity: "Common",
    useInCombat: false,
    effect: ["Gain 1HP"],
    audio: [false, "item", "chewCrackersMouth"],
  },
  GHOSTLIGHT_LILY: {
    name: "Ghostlight Lily",
    description:
      "A pale lily that glows faintly in the dark. It is prized for its use in creating ethereal elixirs.",
    image: "/assets/images/items/consumables/ghostlight-lily.jpg",
    type: "CONSUMABLE",
    rarity: "Common",
    useInCombat: false,
    effect: ["Chance to cause the Haunted condition."],
    audio: [false, "item", "chewCrackersMouth"],
  },
  WITCHFIRE_ORCHID: {
    name: "Witchfire Orchid",
    description:
      "An exotic orchid with fiery blooms. It is sought after for its magical properties in spellcraft.",
    image: "/assets/images/items/consumables/witchfire-orchid.jpg",
    type: "CONSUMABLE",
    rarity: "Common",
    useInCombat: false,
    effect: ["Lose 3HP"],
    audio: [false, "item", "chewCrackersMouth"],
  },
  // ====================================================================
  //                           RARE CONSUMABLES
  // ====================================================================
  HEALTH_POTION: {
    name: "Health Potion",
    description: "A small bottle of glowing red liquid.",
    image: "/assets/images/items/consumables/health-potion.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: true,
    effect: ["Restores 30% of the target's max HP.", "Can be used in combat."],
    audio: [false, "item", "gulpingWater24"],
  },
  MANA_POTION: {
    name: "Mana Potion",
    description: "A small bottle of glowing blue liquid.",
    image: "/assets/images/items/consumables/mana-potion.jpg",
    type: "CONSUMABLE",
    target: "PLAYER",
    rarity: "Rare",
    useInCombat: true,
    effect: ["Restores 30% of the target's max MP.", "Can be used in combat."],
    audio: [false, "item", "gulpingWater24"],
  },
  LICHROOT: {
    name: "Lichroot",
    description:
      "A rare root with necrotic properties. It is often used in powerful dark magic and resurrection spells.",
    image: "/assets/images/items/consumables/lichroot.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: false,
    effect: ["Lose 5 HP"],
    audio: [false, "item", "chewCrackersMouth"],
  },
  TOMBSTONE_TRUFFLE: {
    name: "Tombstone Truffle",
    description:
      "A rare fungus that grows near ancient tombs. It is highly valued for its ability to enhance potions.",
    image: "/assets/images/items/consumables/tombstone-truffle.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: false,
    effect: ["Restores 3HP"],
    audio: [false, "item", "chewCrackersMouth"],
  },
  SPIDER_EGG_YOLK: {
    name: "Spider Egg Yolk",
    description:
      "A rare and potent ingredient extracted from spider eggs. Its venomous properties are highly sought after.",
    image: "/assets/images/items/consumables/spider-egg-yolk.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: false,
    effect: ["Causes the Poisoned condition"],
    audio: [false, "item", "chewCrackersMouth"],
  },
  BLACKHEART_BREW: {
    name: "Blackheart Brew",
    description: "Chosen drink of the underworld.",
    image: "/assets/images/items/consumables/blackheart-brew.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: true,
    effect: ["Duration: 5 Rooms", "+5 Attack", "-5 Spell Power"],
    audio: [false, "item", "gulpingWater24"],
  },
  // ====================================================================
  //                           EPIC CONSUMABLES
  // ====================================================================
  HEXBANE_BREW: {
    name: "Hexbane Brew",
    description: "Potion",
    image: "/assets/images/items/consumables/hexbane-brew.jpg",
    type: "CONSUMABLE",
    rarity: "Epic",
    useInCombat: true,
    effect: [
      "Removes and grants immunity to the Poisoned, Diseased, Haunted, and Cursed conditions.",
      "Effects persist for 10 rooms.",
    ],
    audio: [false, "item", "gulpingWater24"],
  },
  NECROTIC_NECTAR: {
    name: "Necrotic Nectar",
    description: "Potion",
    image: "/assets/images/items/consumables/necrotic-nectar.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: true,
    effect: [
      "Restore all missing HP. However, the target's Arcana is reduced to 0.",
      "Effects persist for 10 rooms.",
    ],
    audio: [false, "item", "gulpingWater24"],
  },
  // ====================================================================
  //                             CANDLES
  // ====================================================================
  WARDING_CANDLE: {
    name: "Warding Candle",
    description: "White Candle",
    image: "/assets/images/items/consumables/warding-candle.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: false,
    effect: ["While lit undead enemies may flee from you."],
    audio: [false, "item", "flameLicks2"],
  },
  SOOTHING_CANDLE: {
    name: "Soothing Candle",
    description: "Green Candle",
    image: "/assets/images/items/consumables/soothing-candle.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: false,
    effect: ["While lit all allies gain +6 HP Regeneration."],
    audio: [false, "item", "flameLicks2"],
  },
  CALMING_CANDLE: {
    name: "Calming Candle",
    description: "Blue Candle",
    image: "/assets/images/items/consumables/calming-candle.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: false,
    effect: ["While lit all allies gain +6 MP Regeneration."],
    audio: [false, "item", "flameLicks2"],
  },
  FLICKERING_CANDLE: {
    name: "Flickering Candle",
    description: "Yellow Candle",
    image: "/assets/images/items/consumables/flickering-candle.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: false,
    effect: ["While lit all allies gain +1 Agility"],

    audio: [false, "item", "flameLicks2"],
  },
  BLAZING_CANDLE: {
    name: "Blazing Candle",
    description: "Red Candle",
    image: "/assets/images/items/consumables/blazing-candle.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: false,
    effect: ["While lit all allies gain +6 Attack"],
    audio: [false, "item", "flameLicks2"],
  },
  INVOKING_CANDLE: {
    name: "Invoking Candle",
    description: "Purple Candle",
    image: "/assets/images/items/consumables/invoking-candle.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: false,
    effect: ["While lit all allies gain +6 Spell Power"],
    audio: [false, "item", "flameLicks2"],
  },
  // ====================================================================
  //                              MISC.
  // ====================================================================
  SKELETON_KEY: {
    name: "Skeleton Key",
    description: "",
    image: "/assets/images/items/consumables/skeleton-key.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: false,
    effect: ["Unlocks certain doors within The Great Catacomb"],
    audio: [false, "item", "skeletonKeyIn2"],
  },
  MAGIC_ROPE: {
    name: "Magic Rope",
    description:
      "A magical rope that can extend and attach itself to surfaces, making it easy to climb walls or reach high places.",
    image: "/assets/images/items/consumables/skeleton-key.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: false,
    effect: [""],
    audio: [false, "item", "gulpingWater24"],
  },
  TRAP_DISARMING_KIT: {
    name: "Trap Disarming Kit",
    description: "A specialized set of tools for safely disarming traps.",
    image: "/assets/images/items/consumables/skeleton-key.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: false,
    effect: ["Can be used to disarm traps."],
    audio: [false, "item", "gulpingWater24"],
  },
  SMOKE_BOMB: {
    name: "Smoke Bomb",
    description:
      "A small bomb that creates a thick smoke cloud obscuring enemies vision.",
    image: "/assets/images/items/consumables/skeleton-key.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: true,
    effect: ["-2 Hit Chance for all enemies."],
    audio: [false, "item", "gulpingWater24"],
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
