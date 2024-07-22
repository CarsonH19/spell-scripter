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
  liheth: [
    {
      questNumber: 0,
      unlocked: true,
      name: "Hidden Shrines",
      text: `"I must fulfill my duties as one of the last Candlelight Priestesses, and restore the other Candlelight Shrines throughout the catacomb. Please, help me navigate through the darkness of the catacomb so I can find them."`,
      description: "Discover 3 Candlelight Shrines.",
      progress: 0,
      completion: 3,
      finished: false,
      reward: "Liheth Level 2",
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],
  riven: [],
};

export default quests;
