//

const quests = {
  siggurd: [
    {
      questNumber: 0,
      unlocked: true,
      name: "Catacomb Cleanser",
      text: `"The undead have defiled these sacred halls for too long. We must purge this place of their evil. Help me cleanse the catacombs."`,
      description: "Defeat 30 undead enemies.",
      progress: 0,
      completion: 30,
      finished: false,
      reward: "Siggurd Level 2",
    },
    {
      questNumber: 1,
      unlocked: false,
      name: "Wails of the Banshee",
      text: `"Within the Wailing Warrens, a hidden area within The Great Catacomb, dwells a Banshee whose cries bring death and despair. We must find a way into those haunted depths and silence her wails."`,
      description: "Defeat the Banshee within the Wailing Warrens.",
      progress: 0,
      completion: 1,
      finished: false,
      reward: "Siggurd Level 3",
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],
  liheth: [],
  riven: [],
};

export default quests;
