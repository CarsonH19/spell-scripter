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
};

export default MISC_ITEMS;
