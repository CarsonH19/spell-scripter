import store from "../store/index";

// Enemies
import { UNDEAD, THIEVES } from "./enemies";

export const DUNGEON_ENTRANCE = {
  name: "Dungeon Entrance",
  type: "ENTRANCE",
  description: [""],
  options: [
    {
      text: ["Enter"],
      function: "DUNGEON_ENTRANCE_ENTER",
      narration: "",
    },
  ],
};

export const COFFIN = {
  name: "Coffin",
  type: "CHOICE",
  description: [
    "An ornately decorated coffin is found",
    "Do you wish to open it?",
  ],
  options: [
    {
      text: ["Open"],
      function: "COFFIN",
      // narration: "You decide to open the coffin.",
      outcome:
        "Disregarding the sanctity of a burial site, you opened the coffin to see what was inside.",
    },
    {
      text: ["Leave"],
      function: "COFFIN",
      // narration: "You decide to leave the coffin.",
      outcome:
        "You decided to leave the coffin, and not disturb the dead resting within.",
    },
  ],
};

export const GRAVESTONE = {
  name: "Gravestone",
  type: "CHOICE",
  description: ["A worn and damaged gravestone is found"],
  options: [
    {
      text: ["Leave"],
      function: "GRAVESTONE",
      // narration: "You leave the gravestone.",
      outcome: "You left the gravestone just at you discovered it.",
    },
  ],
};

export const TRAPS = {
  SPIKE_WALLS: {
    name: "Spike Walls",
    type: "TRAP",
    description: ["The walls start to close in, revealing deadly spikes."],
    options: [
      {
        text: ["Hold Back", "(Strength)"],
        function: "TRAP",
        narration: "You attempt to use your strength to hold the walls back.",
      },
      {
        text: ["Squeeze Through", "(Agility)"],
        function: "TRAP",
        narration:
          "You attempt to maneuver through the narrowing gap and avoid the spikes.",
      },
    ],
  },
  COLLAPSING_CEILING: {
    name: "Collapsing Ceiling",
    type: "TRAP",
    description: [
      "The ceiling begins to collapse, threatening to crush everything below.",
    ],
    options: [
      {
        text: ["Hold Up", "(Strength)"],
        function: "TRAP",
        narration:
          "You attempt to use your strength to hold up the ceiling long enough to escape.",
      },
      {
        text: ["Sprint", "(Agility)"],
        function: "TRAP",
        narration:
          "You attempt to sprint through the collapsing area to avoid being crushed.",
      },
    ],
  },
  ROTATING_BLADES: {
    name: "Rotating Blades",
    type: "TRAP",
    description: [
      "Hidden blades start spinning, threatening to cut anything in its path.",
    ],
    options: [
      {
        text: ["Parry", "(Strength)"],
        function: "TRAP",
        narration:
          "You attempt to use your weapon to parry the blade and create an opening to escape.",
      },
      {
        text: ["Duck", "(Agility)"],
        function: "TRAP",
        narration:
          "You attempt to duck under the blade and avoid its deadly arc.",
      },
    ],
  },
  MAGIC_RUNE: {
    name: "Magic Rune",
    type: "TRAP",
    description: ["Stepping on a rune triggers a magical explosion."],
    options: [
      {
        text: ["Crush Rune", "(Strength)"],
        function: "TRAP",
        narration:
          "You attempt to use force to crush the rune and stop its magical effect.",
      },
      {
        text: ["Dive Away", "(Agility)"],
        function: "TRAP",
        narration: "You attempt to dive away from the rune's explosion.",
      },
    ],
  },
};

export const BONEVAULT = {
  name: "Bonevault",
  type: "CHOICE",
  description: ["You discover a locked vault door.", "Do you wish to unlock it?"],
  options: [
    {
      text: ["Unlock"],
      function: "BONEVAULT",
      narration: "You unlock the vault.",
      outcome: "You used a Skeleton Key to open the vault.",
    },
    {
      text: ["Leave"],
      function: "BONEVAULT",
      narration: "You decide to leave and the vault remains sealed.",
      outcome: "The vault remains sealed.",
    },
  ],
};

export const CANDLELIGHT_SHRINE = {
  name: "Candlelight Shrine",
  type: "CHOICE",
  description: ["You discover a Candlelight Shrine."],
  options: [
    {
      text: ["Rest"],
      function: "CANDLELIGHT_SHRINE",
      narration: "You decide to rest.",
      outcome:
        "You discovered a Candlelight Shrine and rested for a short time in the flickering light. When it was time to leave you felt energized and ready to move onward.",
    },
  ],
};

export const UNLOCK_HERO = {
  SIGGURD: {
    name: "Unlocking Siggurd",
    type: "AUTO",
    characters: [
      { identifier: "HERO", name: "Siggurd" },
      UNDEAD.DECREPIT_SKELETON,
      UNDEAD.DECREPIT_SKELETON,
      UNDEAD.DECREPIT_SKELETON,
      UNDEAD.DECREPIT_SKELETON,
    ],
    description: [""],
    function: "UNLOCK_HERO_SIGGURD",
    outcome:
      "You found Siggurd, the paladin, while exploring The Great Catacomb and aided him in defeating a hoard of undead. You decide to fight together as you continue on.",
  },
  LIHETH: {
    name: "Unlocking Liheth",
    type: "CHOICE",
    characters: [{ identifier: "HERO", name: "Liheth" }],
    description: [""],
    function: "UNLOCK_HERO_LIHETH",
    options: [
      {
        text: ["Rest"],
        function: "UNLOCK_HERO_LIHETH",
        narration: "You rest until Liheth is ready.",
        outcome:
          "You found Liheth, the Candlelight Priestess, while exploring The Great Catacomb. She spoke to you of her duties to restore the hidden Candlelight Shrines throughout the catacomb. You decided to guide her through the catacomb in search of these shrines.",
      },
    ],
  },
};

export const AMBUSH = {
  name: "Ambush",
  type: "CHOICE",
  characters: [THIEVES.THIEF, THIEVES.THIEF, THIEVES.THIEF],
  description: [
    "You are ambushed by thieves.",
    "They demand you surrender your items or suffer the consequence.",
  ],
  options: [
    {
      text: ["Surrender"],
      function: "AMBUSH",
      narration: "You surrender your inventory to the thieves.",
      outcome:
        "The thieves took what they wanted from your inventory, but left you unharmed.",
    },
    {
      text: ["Refuse"],
      function: "AMBUSH",
      narration: "You refuse to surrender and fight back against the thieves.",
      outcome:
        "You refused to surrender your items to the thieves and faced them in combat.",
    },
  ],
};

// =================================================================
//                         PATHS
// =================================================================

export const PATH_ENTRANCE = {
  WAILING_WARRENS_ENTRANCE: {
    name: "Wailing Warrens",
    type: "CHOICE",
    description: [
      "You discover a hole in the wall leading into the abyss, spectral faces flicker in the darkness and a haunting wail echoes from deep within.",
      "Do you wish to enter?",
    ],
    options: [
      {
        text: ["Enter"],
        function: "PATH_ENTRANCE",
        narration: "You decided to enter Wailing Warrens.",
      },
      {
        text: ["Leave"],
        function: "PATH_ENTRANCE",
        narration: "You decide to leave.",
        outcome: "You chose not to enter Wailing Warrens.",
      },
    ],
  },
  THIEVES_RUIN_ENTRANCE: {
    name: "Thieves' Ruin",
    type: "CHOICE",
    description: [
      "You discover the entrance to Thieves' Ruin",
      "Do you wish to enter?",
    ],
    options: [
      {
        text: ["Enter"],
        function: "PATH_ENTRANCE",
        narration: "You decided to enter Thieves' Ruin.",
      },
      {
        text: ["Leave"],
        function: "PATH_ENTRANCE",
        narration: "You decide to leave.",
        outcome: "You chose not to enter Thieves' Ruin.",
      },
    ],
  },
};

export const PATH_EXIT = {
  WAILING_WARRENS_EXIT: {
    name: "Wailing Warrens Exit",
    type: "CHOICE",
    description: [
      "You discover a hole in the wall leading out of the Wailing Warrens.",
    ],
    options: [
      {
        text: ["Leave"],
        function: "PATH_EXIT",
        // narration: "You decide to leave.",
        outcome: "You left the Wailing Warrens.",
      },
    ],
  },
  THIEVES_RUIN_EXIT: {
    name: "Thieves' Ruin Exit",
    type: "CHOICE",
    description: ["You discover an exit out of Thieves' Ruin."],
    options: [
      {
        text: ["Leave"],
        function: "PATH_EXIT",
        // narration: "You decide to leave.",
        outcome: "You left Thieves' Ruin.",
      },
    ],
  },
};

export const THIEVES_RUIN = {
  POISON_DARTS: {
    name: "Poison Darts",
    type: "TRAP",
    description: [
      "A hidden mechanism triggers a volley of poison darts from the walls.",
    ],
    options: [
      {
        text: ["Shield", "(Strength)"],
        function: "TRAP",
        narration: "You attempt to shield yourself using nearby debris.",
      },
      {
        text: ["Dodge", "(Agility)"],
        function: "TRAP",
        narration: "You attempt to dodge the incoming darts.",
      },
    ],
  },
  POISONOUS_MIST: {
    name: "Poisonous Mist",
    type: "TRAP",
    description: ["The room fills with a noxious green mist."],
    options: [
      {
        text: ["Hold Breath", "(Strength)"],
        function: "TRAP",
        narration: "You attempt to hold your breath and quickly find an exit.",
      },
      {
        text: ["Find Vent", "(Agility)"],
        function: "TRAP",
        narration:
          "You attempt to locate and open an opening to disperse the poisonous mist.",
      },
    ],
  },
  FLOOR_SPIKES: {
    name: "Floor Spikes",
    type: "TRAP",
    description: ["Pressure plates on the floor trigger spikes to shoot up."],
    options: [
      {
        text: ["Leap Over", "(Strength)"],
        function: "TRAP",
        narration:
          "You attempt to leap over the pressure plates to avoid the spikes.",
      },
      {
        text: ["Disarm", "(Agility)"],
        function: "TRAP",
        narration:
          "You attempt to disarm the pressure plates to render the trap harmless.",
      },
    ],
  },
  LAUGHING_COFFIN: {
    name: "Laughing Coffin",
    type: "TRADE",
    description: ["You entered the Laughing Coffin Tavern"],
    options: [
      {
        text: ["Trade"],
        function: "LAUGHING_COFFIN",
        narration: "",
        outcome:
        "You discovered the Laughing Coffin Tavern hidden within Thieves' Ruin.",
      },
      {
        text: ["Leave"],
        function: "LAUGHING_COFFIN",
        // narration: "You leave the Laughing Coffin Tavern.",
        outcome:
          "You discovered the Laughing Coffin Tavern hidden within Thieves' Ruin.",
      },
    ],
  },
};
