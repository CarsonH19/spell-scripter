const MISC_ITEMS = {
  // ====================================================================
  //                                MAPS
  // ====================================================================
  THIEVES_RUIN_MAP: {
    name: "Thieves' Ruin Map",
    description: "",
    image: "src/assets/images/items/misc-item/map-1.jpg",
    type: "MISC",
    rarity: "Rare",
    useInCombat: false,
    effect: [
      "A map that leads to Thieve's Ruin.",
      "Can only be used in The Great Catacomb.",
    ],
    destination: 3,
    // soundEffect: chewCrackersMouth,
  },
  LAUGHING_COFFIN_COIN: {
    name: "Laughing Coffin Coin",
    description: "",
    image: "src/assets/images/items/consumables/laughing-coffin-coin.jpg",
    type: "CONSUMABLE",
    rarity: "Rare",
    useInCombat: false,
    effect: [""],
    audio: [false, "item", "coinFlipLand"],
  },
};

export default MISC_ITEMS;
