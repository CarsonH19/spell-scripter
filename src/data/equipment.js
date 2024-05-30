const EQUIPMENT = {
  BERSERKER_PAULDRON: {
    name: "Berserker Pauldron",
    description:
      "An intimidating shoulder pauldron belonging to a long passed warrior.",
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
  // ====================================================================
  //                          COMMON SETS
  // ====================================================================

  // Plagueborn Set - Rats
  // Bonus: Immune to the Diseased & Plagued Condition

  PLAGUEBORN_SHAWL: {
    name: "Plagueborn Shawl",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Common",
    useInCombat: false,
    effect: ["+10 Max HP"],
    stats: { strength: { maxHealth: +10 } },
  },
  PLAGUEBORN_CLAWS: {
    name: "Plagueborn Claws",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Common",
    useInCombat: false,
    effect: ["+2 Attack"],
    stats: { strength: { attack: +2 } },
  },
  PLAGUEBORN_LEGWRAPS: {
    name: "Plagueborn Legwraps",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Common",
    useInCombat: false,
    effect: ["+1 Hit"],
    stats: { agility: { hitChance: +1 } },
  },

  // Shadowbound - Thieves
  // Bonus: Speed +3

  SHADOWBOUND_COWL: {
    name: "Shadowbound Cowl",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Common",
    useInCombat: false,
    effect: ["+1 Defense"],
    stats: { agility: { defense: +1 } },
  },
  SHADOWBOUND_BOOTS: {
    name: "Shadowbound Boots",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Common",
    useInCombat: false,
    effect: ["+10 Max MP"],
    stats: { arcana: { maxMana: +10 } },
  },
  SHADOWBOUND_BRACERS: {
    name: "Shadowbound Bracers",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Common",
    useInCombat: false,
    effect: ["+1 Hit"],
    stats: { agility: { hitChance: +1 } },
  },

  // Ghoulbone Set - Undead
  // Bonus: +20 Max HP

  GHOULBONE_GREAVES: {
    name: "Ghoulbone Greaves",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Common",
    useInCombat: false,
    effect: ["+2 Attack"],
    stats: { strength: { attack: +2 } },
  },
  GHOULBONE_ARMGUARDS: {
    name: "Ghoulbone Armguards",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Common",
    useInCombat: false,
    effect: ["+2 HP Regen."],
    stats: { strength: { healthRegen: +2 } },
  },
  GHOULBONE_HELMET: {
    name: "Ghoulbone Helmet",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Common",
    useInCombat: false,
    effect: ["+10 Max Health"],
    stats: { strength: { maxHealth: +10 } },
  },
  // ====================================================================
  //                          RARE SETS
  // ====================================================================

  // Arcanist Set - Curator
  // Set Bonus: +6 MP Regen

  ARCANIST_CROWN: {
    name: "Arcanist Crown",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["+10 Max MP", "+2 MP Regen."],
    stats: { arcana: { maxMana: +10, manaRegen: +2 } },
  },
  ARCANIST_MANTLE: {
    name: "Arcanist Mantle",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["+10 Max MP", "+2 Spell Power"],
    stats: { arcana: { maxMana: +10, spellPower: +2 } },
  },
  ARCANIST_ROBES: {
    name: "Arcanist Robes",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["+20 Max MP"],
    stats: { arcana: { maxMana: +20 } },
  },

  // Darkmoon Set - Curator
  // Set Bonus: +6 spell power

  DARKMOON_NECKLACE: {
    name: "Darkmoon Necklace",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["+4 MP Regen."],
    stats: { arcana: { manaRegen: +4 } },
  },
  DARKMOON_TRINKET: {
    name: "Darkmoon Trinket",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["+2 MP Regen.", "+2 HP Regen."],
    stats: { arcana: { manaRegen: +2 }, strength: { healthRegen: +2 } },
  },
  DARKMOON_CIRCLET: {
    name: "Darkmoon Circlet",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["+2 MP Regen.", "+10 Max MP"],
    stats: { arcana: { manaRegen: +2, maxMana: +10 } },
  },

  // Fangweave Set - Spiders
  // Set Bonus: +1 Defense, +1 Hit, Immune to the Webbed Condition

  FANGWEAVE_ARMOR: {
    name: "Fangweave Armor",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["+1 Defense", "+1 Speed"],
    stats: { agility: { defense: +1, speed: +1 } },
  },
  FANGWEAVE_STRIDERS: {
    name: "Fangweave Striders",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["+2 Speed"],
    stats: { agility: { speed: +2 } },
  },
  FANGWEAVE_GLOVES: {
    name: "Fangweave Gloves",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["+1 Hit", "+1 Speed"],
    stats: { agility: { hitChance: +1, speed: +1 } },
  },

  // Fiendsworn Set - Cultists
  // Set Bonus: Resistant to Fire Damage

  FIENDSWORN_REAVER: {
    name: "Fiendsworn Reaver",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["+2 Spell Power", "+2 Attack"],
    stats: { arcana: { spellPower: +2 }, strength: { attack: +2 } },
  },
  FIENDSWORN_GAUNTLETS: {
    name: "Fiendsworn Gauntlets",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["+10 Max MP", "+2 Attack"],
    stats: { arcana: { maxMana: +10 }, strength: { attack: +2 } },
  },
  FIENDSWORN_MASK: {
    name: "Fiendsworn Mask",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["+2 MP Regen.", "+2 Attack"],
    stats: { arcana: { manaRegen: +2 }, strength: { attack: +2 } },
  },

  // Rattlebone Set - Undead
  // Set Bonus: Immune to the Feared condition

  RATTLEBONE_CHESTPLATE: {
    name: "Rattlebone Chestplate",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["+2 Attack", "+10 Max MP"],
    stats: { strength: { attack: +2 }, arcana: { maxMana: +10 } },
  },
  RATTLEBONE_PAULDRONS: {
    name: "Rattlebone Pauldrons",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["+10 Max HP", "+2 Spell Power"],
    stats: { strength: { maxHealth: +10 }, arcana: { spellPower: +2 } },
  },
  RATTLEBONE_WRISTGUARDS: {
    name: "Rattlebone Wristguards",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["+2 HP Regen.", "+2 MP Regen."],
    stats: { strength: { healthRegen: +2 }, arcana: { manaRegen: +2 } },
  },
  // ====================================================================
  //                          EPIC SETS
  // ====================================================================

  // Dreadmourne Set - Death Knights
  // Set Bonus: +6 Attack, +1 Defense

  DREADMOURNE_HELM: {
    name: "Dreadmourne Helm",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Epic",
    useInCombat: false,
    effect: ["+4 HP Regen.", "+1 Hit"],
    stats: { strength: { healthRegen: +4 }, agility: { hitChance: +1 } },
  },
  DREADMOURNE_PLATEMAIL: {
    name: "Dreadmourne Platemail",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Epic",
    useInCombat: false,
    effect: ["+30 Max HP"],
    stats: { strength: { maxHealth: +30 } },
  },
  DREADMOURNE_SHIELD: {
    name: "Dreadmourne Shield",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Epic",
    useInCombat: false,
    effect: ["+20 Max HP", "+1 Defense"],
    stats: { strength: { maxHealth: +20 }, agility: { defense: +1 } },
  },

  // Soulshroud Set - Revenants
  // Set Bonus:

  SOULSHROUD_HOOD: {
    name: "Soulshroud Hood",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Epic",
    useInCombat: false,
    effect: ["+4 MP Regen.", "+1 Speed"],
    stats: { agility: { speed: +1 }, arcana: { manaRegen: +4 } },
  },
  SOULSHROUD_ROBE: {
    name: "Soulshroud Robe",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Epic",
    useInCombat: false,
    effect: ["+20 Max MP", "+1 Defense"],
    stats: { agility: { defense: +1 }, arcana: { maxMana: +20 } },
  },
  SOULSHROUD_STAFF: {
    name: "Soulshroud Staff",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Epic",
    useInCombat: false,
    effect: ["+4 Spell Power", "+1 Hit"],
    stats: { agility: { hitChance: +1 }, arcana: { spellPower: +4 } },
  },

  // ====================================================================
  //                         LEGENDARY SETS
  // ====================================================================

  // Blackheart Set - Liches
  // Set Bonus: Resistance to Necrotic damage, immune to Feared

  BLACKHEART_CROWN: {
    name: "Blackheart Crown",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Legendary",
    useInCombat: false,
    effect: ["+10 MP Regen.", "-4 HP Regen."],
    stats: { strength: { healthRegen: -4 }, arcana: { manaRegen: +10 } },
  },
  BLACKHEART_REGALIA: {
    name: "Blackheart Regalia",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Legendary",
    useInCombat: false,
    effect: ["+50 Max MP", "-20 Max HP"],
    stats: { strength: { maxHealth: -20 }, arcana: { maxMana: +50 } },
  },
  BLACKHEART_SCEPTER: {
    name: "Blackheart Scepter",
    description: "",
    display: false,
    image: "",
    type: "EQUIPMENT",
    rarity: "Legendary",
    useInCombat: false,
    effect: ["+10 Spell Power", "-4 Attack"],
    stats: { strength: { attack: -4 }, arcana: { spellPower: +10 } },
  },
  // : {
  //   name: "",
  //   description: "",
  //   display: false,
  //   image: "",
  //   type: "EQUIPMENT",
  //   rarity: "Common",
  //   useInCombat: false,
  //   effect: [""],
  //   stats: {},
  // },
  // : {
  //   name: "",
  //   description: "",
  //   display: false,
  //   image: "",
  //   type: "EQUIPMENT",
  //   rarity: "Common",
  //   useInCombat: false,
  //   effect: [""],
  //   stats: {},
  // },
  // : {
  //   name: "",
  //   description: "",
  //   display: false,
  //   image: "",
  //   type: "EQUIPMENT",
  //   rarity: "Common",
  //   useInCombat: false,
  //   effect: [""],
  //   stats: {},
  // },
  // : {
  //   name: "",
  //   description: "",
  //   display: false,
  //   image: "",
  //   type: "EQUIPMENT",
  //   rarity: "Common",
  //   useInCombat: false,
  //   effect: [""],
  //   stats: {},
  // },
  // : {
  //   name: "",
  //   description: "",
  //   display: false,
  //   image: "",
  //   type: "EQUIPMENT",
  //   rarity: "Common",
  //   useInCombat: false,
  //   effect: [""],
  //   stats: {},
  // },
  // : {
  //   name: "",
  //   description: "",
  //   display: false,
  //   image: "",
  //   type: "EQUIPMENT",
  //   rarity: "Common",
  //   useInCombat: false,
  //   effect: [""],
  //   stats: {},
  // },
  // : {
  //   name: "",
  //   description: "",
  //   display: false,
  //   image: "",
  //   type: "EQUIPMENT",
  //   rarity: "Common",
  //   useInCombat: false,
  //   effect: [""],
  //   stats: {},
  // },
  // : {
  //   name: "",
  //   description: "",
  //   display: false,
  //   image: "",
  //   type: "EQUIPMENT",
  //   rarity: "Common",
  //   useInCombat: false,
  //   effect: [""],
  //   stats: {},
  // },
  // : {
  //   name: "",
  //   description: "",
  //   display: false,
  //   image: "",
  //   type: "EQUIPMENT",
  //   rarity: "Common",
  //   useInCombat: false,
  //   effect: [""],
  //   stats: {},
  // },
};

export default EQUIPMENT;
