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
      narration: "You decide to open the coffin.",
    },
    {
      text: ["Leave"],
      function: "COFFIN",
      narration: "You decide to leave the coffin.",
    },
  ],
};

export const TRAPS = [
  {
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
  {
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
  {
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
  {
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
  {
    name: "Rotating Blade",
    type: "TRAP",
    description: [
      "A hidden blade starts spinning, threatening to cut anything in its path.",
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
  {
    name: "Poisonous Mist",
    type: "TRAP",
    description: ["The room fills with a noxious, magical mist."],
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
  {
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
];

export const PATHS = [
  {
    name: "Wailing Warrens",
    type: "CHOICE",
    description: [
      "You discover a crumbling archway shrouded in mist, with spectral faces flickering in the shadows and a haunting wail echoing from deep within.",
      "Do you wish to enter?",
    ],
    options: [
      {
        text: ["Enter"],
        function: "PATH",
        narration: "You decide to enter.",
      },
      {
        text: ["Leave"],
        function: "PATH",
        narration: "You decide to leave.",
      },
    ],
  },
];


export const BONEVAULT = [
  {
    name: "Bonevault",
    type: "CHOICE",
    description: [
      "You discover a locked door.",
      "Do you wish to unlock it?",
    ],
    options: [
      {
        text: ["Unlock"],
        function: "BONEVAULT",
        narration: "You decide to unlock it.",
      },
      {
        text: ["Leave"],
        function: "PATH",
        narration: "You decide to leave.",
      },
    ],
  },
];
