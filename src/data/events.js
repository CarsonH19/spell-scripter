const EVENTS = {
  DUNGEON_ENTRANCE: {
    name: "Dungeon Entrance",
    eventType: "ENTRANCE",
    description: "",
    options: [
      {
        text: "Enter",
        function: "DUNGEON_ENTRANCE_ENTER",
        narration: "",
      },
    ],
  },
  SPIKE_WALLS: {
    name: "Spike Walls",
    eventType: "TRAP",
    complete: false,
    description: "",
    options: [
      {
        text: "Strength",
        function: "SPIKE_WALLS",
        narration: "",
      },
      {
        text: "Agility",
        function: "SPIKE_WALLS",
        narration: "",
      },
    ],
  },
};

export default EVENTS;
