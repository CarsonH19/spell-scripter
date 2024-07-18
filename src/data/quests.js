//

const questTracker = {
  siggurd: {
    quest0: {
      unlocked: false,
      title: "Catacomb Cleanser",
      text: "Defeat 30 undead enemies within The Great Catacomb.",
      tracker: 0,
      finished: false,
    },
    quest1: {},
    quest2: {},
    quest3: {},
    quest4: {},
    quest5: {},
    quest6: {},
    quest7: {},
    quest8: {},
    quest9: {},
  },
  liheth: {
    quest0: {},
    quest1: {},
    quest2: {},
    quest3: {},
    quest4: {},
    quest5: {},
    quest6: {},
    quest7: {},
    quest8: {},
    quest9: {},
  },
  riven: {
    quest0: {},
    quest1: {},
    quest2: {},
    quest3: {},
    quest4: {},
    quest5: {},
    quest6: {},
    quest7: {},
    quest8: {},
    quest9: {},
  },
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
  const giver = questTracker[questGiver];
  const quest = giver[`quest${questNumber}`];
  const isQuestFinished = quest.unlocked && quest.finished;
  return isQuestFinished;
}
