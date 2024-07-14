const EQUIPMENT = {
  // ====================================================================
  //                          COMMON ITEMS
  // ====================================================================
  EVERTORCH: {
    name: "Evertorch",
    description:
      "This torch emits an ethereal luminescent glow in the presence of danger.",
    display: false,
    image: "src/assets/images/items/equipment/evertorch.jpg",
    type: "EQUIPMENT",
    rarity: "Common",
    useInCombat: false,
    effect: [
      "You have a greater chance of successfully avoiding traps.",
      "+1 Speed",
    ],
    stats: {},
  },
  SUNSTONE: {
    name: "Sunstone",
    description: "",
    display: true,
    image: "src/assets/images/items/equipment/sunstone.jpg",
    type: "EQUIPMENT",
    rarity: "Common",
    useInCombat: false,
    effect: [
      "Undead in your presence take 2 damage at the start of each round of combat.",
    ],
    stats: {},
  },
  RITUAL_BLADE: {
    name: "Ritual Blade",
    description: "",
    display: false,
    image: "src/assets/images/items/equipment/ritual-blade.jpg",
    type: "EQUIPMENT",
    rarity: "Common",
    useInCombat: false,
    effect: ["+3 Attack when attacking humanoid and beast type enemies."],
    stats: {},
  },
  SPIRIT_VEIL_CLOAK: {
    name: "Spirit Veil Cloak",
    description: "",
    display: true,
    image: "src/assets/images/items/equipment/spirit-veil-cloak.jpg",
    type: "EQUIPMENT",
    rarity: "Common",
    useInCombat: false,
    effect: ["All attacks have a 5% chance of missing."],
    stats: {},
  },
  // ====================================================================
  //                          RARE ITEMS
  // ====================================================================
  BLOODSTONE: {
    name: "Bloodstone",
    description: "",
    display: false,
    image: "src/assets/images/items/equipment/bloodstone.jpg",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["You recover a small amount of health after defeating an enemy."],
    stats: {},
  },
  WRAITHBANE: {
    name: "Wraithbane",
    description: "",
    display: false,
    image: "src/assets/images/items/equipment/wraithbane.jpg",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["Your attacks ignore the Incorporeal condition."],
    stats: {},
  },
  CURSED_MIRROR: {
    name: "Cursed Mirror",
    description: "",
    display: false,
    image: "src/assets/images/items/equipment/cursed-mirror.jpg",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: [
      "A portion of damage taken from attacks is reflected back to the attacker.",
    ],
    stats: {},
  },
  REVENANTS_RAGE: {
    name: "Revenants Rage",
    description: "",
    display: false,
    image: "src/assets/images/items/equipment/revenants-rage.jpg",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["+5 Attack while below 30HP."],
    stats: {},
  },
  PLAUGEWARD_PENDANT: {
    name: "Plagueward Pendant",
    description: "",
    display: false,
    image: "src/assets/images/items/equipment/plagueward-pendant.jpg",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["You are immune to the Poisoned condition."],
    stats: {},
  },
  GHOSTSHROUD_TALISMAN: {
    name: "Ghostshroud Talisman",
    description: "",
    display: false,
    image: "src/assets/images/items/equipment/ghostshroud-talisman.jpg",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["You are immune to the Haunted condition."],
    stats: {},
  },
  CHILLBREAKER_BAND: {
    name: "Chillbreaker Band",
    description: "",
    display: false,
    image: "src/assets/images/items/equipment/chillbreaker-band.jpg",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["You are immune to the Chilled condition."],
    stats: {},
  },
  SOULREAVER: {
    name: "Soulreaver",
    description: "",
    display: false,
    image: "src/assets/images/items/equipment/soulreaver.jpg",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: [
      "ou gain +1 Attack for each consecutive attack up to a max of +5.",
    ],
    stats: {},
  },
  // ====================================================================
  //                          EPIC ITEMS
  // ====================================================================
 // ====================================================================
  //                          LEGENDARY ITEMS
  // ====================================================================
  // ====================================================================
  //                          COMMON SETS
  // ====================================================================

  // Plagueborn Set - Rats
  // Bonus: Immune to the Diseased & Plagued Condition

  PLAGUEBORN_SHAWL: {
    name: "Plagueborn Shawl",
    description: "",
    display: false,
    image: "src/assets/images/items/equipment/plagueborn-shawl.jpg",
    type: "EQUIPMENT",
    rarity: "Common",
    useInCombat: false,
    effect: ["+10 Max HP"],
    stats: { strength: { maxHealth: +10 } },
  },
  PLAGUEBORN_HANDWRAPS: {
    name: "Plagueborn Handwraps",
    description: "",
    display: false,
    image: "src/assets/images/items/equipment/plagueborn-hand-wraps.jpg",
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
    image: "src/assets/images/items/equipment/plagueborn-legwraps.jpg",
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
    image: "src/assets/images/items/equipment/shadowbound-cowl.jpg",
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
    image: "src/assets/images/items/equipment/shadowbound-boots.jpg",
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
    image: "src/assets/images/items/equipment/shadowbound-bracers.jpg",
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
    image: "src/assets/images/items/equipment/rattlebone-chestplate.jpg",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["+2 Attack", "+10 Max MP"],
    stats: { strength: { attack: +2 }, arcana: { maxMana: +10 } },
  },
  RATTLEBONE_HELMET: {
    name: "Rattlebone Helmet",
    description: "",
    display: false,
    image: "src/assets/images/items/equipment/rattlebone-helmet.jpg",
    type: "EQUIPMENT",
    rarity: "Rare",
    useInCombat: false,
    effect: ["+10 Max HP", "+2 Spell Power"],
    stats: { strength: { maxHealth: +10 }, arcana: { spellPower: +2 } },
  },
  RATTLEBONE_GAUNTLETS: {
    name: "Rattlebone Guantlets",
    description: "",
    display: false,
    image: "src/assets/images/items/equipment/rattlebone-gauntlets.jpg",
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
