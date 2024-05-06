const DUNGEON_ENTRANCE = {
  name: "Dungeon Entrance",
  eventType: "ENTRANCE",
  description: "",
  options: [
    {
      text: "Enter",
      function: "DUNGEON_ENTRANCE_ENTER",
      narration: '',
    },
  ],
  // passValue: 7,
  // failDamage: 30,
  // penalty: () => {},
};

export default DUNGEON_ENTRANCE;
