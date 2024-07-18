//

const quests = {
  siggurd: [
    {
      quest: 0,
      unlocked: true,
      name: "Catacomb Cleanser",
      // text: "",
      description: "Defeat 30 undead enemies within The Great Catacomb.",
      progress: 0,
      completion: 30,
      finished: false,
    },
    {},
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

// export function changeQuestTracker(questGiver, questNumber, change) {
//   const quest = questTracker.questGiver[`quest${questNumber}`];

//   switch (change) {
//     case "FINISH":
//       break;
//     case "UNLOCK":
//       break;
//   }
// }

// Returns true or false to signify a quest is active or not
export function isQuestActive(questGiver, questNumber) {
  const giver = quests[questGiver];
  const quest = giver[`quest${questNumber}`];
  const isQuestFinished = quest.unlocked && quest.finished;
  return isQuestFinished;
}
