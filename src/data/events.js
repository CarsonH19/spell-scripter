export const DUNGEON_ENTRANCE = {
  name: "Dungeon Entrance",
  type: "ENTRANCE",
  description: "",
  options: [
    {
      text: "Enter",
      function: "DUNGEON_ENTRANCE_ENTER",
      narration: "",
    },
  ],
};

export const COFFIN = {
  name: "Coffin",
  type: "CHOICE",
  description: "An ornately decorated coffin is found. Do you wish to open it?",
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
    description:
      "A hidden mechanism triggers a volley of poison darts from the walls.",
    options: [
      {
        text: ["Shield", "(Strength)"],
        function: "TRAP",
        narration:
          "You raise your shield just in time to block the poison darts.",
      },
      {
        text: ["Dodge", "(Agility)"],
        function: "TRAP",
        narration: "You swiftly dodge the incoming darts, avoiding the poison.",
      },
    ],
  },
  {
    name: "Spike Walls",
    type: "TRAP",
    description: "The walls start to close in, revealing deadly spikes.",
    options: [
      {
        text: ["Hold Back", "(Strength)"],
        function: "TRAP",
        narration:
          "You use your strength to hold the walls back, preventing them from closing in.",
      },
      {
        text: ["Squeeze Through", "(Agility)"],
        function: "TRAP",
        narration:
          "You nimbly maneuver through the narrowing gap, avoiding the spikes.",
      },
    ],
  },
  {
    name: "Collapsing Ceiling",
    type: "TRAP",
    description:
      "The ceiling begins to collapse, threatening to crush everything below.",
    options: [
      {
        text: ["Hold Up", "(Strength)"],
        function: "TRAP",
        narration:
          "You use your immense strength to hold up the ceiling long enough to escape.",
      },
      {
        text: ["Sprint", "(Agility)"],
        function: "TRAP",
        narration:
          "You sprint through the collapsing area, narrowly avoiding being crushed.",
      },
    ],
  },
  {
    name: "Floor Spikes",
    type: "TRAP",
    description: "Pressure plates on the floor trigger spikes to shoot up.",
    options: [
      {
        text: ["Leap Over", "(Strength)"],
        function: "TRAP",
        narration: "You leap over the pressure plates, avoiding the spikes.",
      },
      {
        text: ["Disarm", "(Agility)"],
        function: "TRAP",
        narration:
          "You carefully disarm the pressure plates, rendering the trap harmless.",
      },
    ],
  },
  {
    name: "Rotating Blade",
    type: "TRAP",
    description:
      "A hidden blade starts spinning, threatening to cut anything in its path.",
    options: [
      {
        text: ["Parry", "(Strength)"],
        function: "TRAP",
        narration:
          "You use your weapon to parry the blade, creating an opening to escape.",
      },
      {
        text: ["Duck", "(Agility)"],
        function: "TRAP",
        narration: "You duck under the blade, avoiding its deadly arc.",
      },
    ],
  },
  {
    name: "Poisonous Mist",
    type: "TRAP",
    description: "The room fills with a noxious, magical mist.",
    options: [
      {
        text: ["Hold Breath", "(Strength)"],
        function: "TRAP",
        narration: "You hold your breath and quickly find an exit.",
      },
      {
        text: ["Find Vent", "(Agility)"],
        function: "TRAP",
        narration: "You locate and open a vent to disperse the mist.",
      },
    ],
  },
  {
    name: "Magic Rune",
    type: "TRAP",
    description: "Stepping on a rune triggers a magical explosion.",
    options: [
      {
        text: ["Crush Rune", "(Strength)"],
        function: "TRAP",
        narration:
          "You use brute force to crush the rune, stopping its magical effect.",
      },
      {
        text: ["Avoid", "(Agility)"],
        function: "TRAP",
        narration: "You carefully step around the rune, avoiding its trigger.",
      },
    ],
  },
];
