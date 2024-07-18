import store from "../store/index";
import quests from "../data/quests";

// When called this function filters through the quests object, checks to see which quests are active (which heroes are currently in the player's party), and if a quest's progress should be increased.

// The different questTypes will narrow down the search for the specific active quest to update
export default function progressActiveQuests(questType) {
  const order = store.getState().combat.order;

  switch (questType) {
    // checkForDeath to check which enemies were defeated
    case "SLAY": {
      // Siggurd
      const isSiggurdActive = order.filter(
        (character) => character.id === "Siggurd"
      );

      if (isSiggurdActive) {
        // Find the current active quest
        const activeQuest = quests.siggurd.find(
          (quest) => quest.unlocked && !quest.finished
        );
        siggurdQuests(activeQuest);
      }
    }
  }
}

// Returns true or false to signify a quest is active or not
// export function isQuestActive(questGiver, questNumber) {
//   const giver = quests[questGiver]; // Not imported
//   const quest = giver[`quest${questNumber}`];
//   const isQuestFinished = quest.unlocked && quest.finished;
//   return isQuestFinished;
// }

// NOTE!!!! - Call a separate function specifically for Siggurd so you can use another nested switch statement to check the logic for each quest individually

function siggurdQuests(activeQuest) {
  const dungeon = store.getState().dungeon;

  switch (activeQuest.quest) {
    case 0: 
      {
        const undead = dungeon.contents.enemies.filter(
          (enemy) => enemy.type === "UNDEAD"
        );
        console.log(undead);
        quests.siggurd[0].progress += undead.length;
      }
      return;

    default:
      return;
  }
}
