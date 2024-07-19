import store from "../store/index";
import quests from "../data/quests";

import { HERO_LEVELING_MAP } from "./hero-leveling";
import { levelUpHero } from "./hero-leveling";

// When called this function filters through the quests object, checks to see which quests are active (which heroes are currently in the player's party), and if a quest's progress should be increased.

// The different questTypes will narrow down the search for the specific active quest to update
export default function progressActiveQuests(dispatch, questType) {
  const order = store.getState().combat.order;

  switch (questType) {
    // checkForDeath to check which enemies were defeated
    case "SLAY": {
      // Siggurd
      const siggurd = order.find((character) => character.id === "Siggurd");

      if (siggurd) {
        // Find the current active quest
        const activeQuest = quests.siggurd.find(
          (quest) => quest.unlocked && !quest.finished
        );
        console.log("ACTIVE QUEST", activeQuest);
        siggurdQuests(dispatch, siggurd, activeQuest);
      }
    }
  }
}

// Call these separate functions for specific heroes so you can use another nested switch statement to check the logic for each quest individually in order.

function siggurdQuests(dispatch, siggurdObject, activeQuest) {
  const order = store.getState().combat.order;

  switch (activeQuest.questNumber) {
    // Lvl 1 -> Lvl 2 : Defeat 30 undead enemies
    case 0:
      {
        const undead = order.find(
          (enemy) => enemy.type === "UNDEAD" && enemy.currentHealth <= 0
        );

        console.log(undead);
        if (undead) {
          activeQuest.progress++;
        }
      }
      break;

    // Lvl 2 -> Lvl 3 : Defeat the banshee
    case 1:
      {
        const banshee = order.find(
          (enemy) => enemy.name === "Banshee" && enemy.currentHealth <= 0
        );
        if (banshee) {
          activeQuest.progress++;
        }
      }
      break;

    default:
      return;
  }

  checkQuestCompletion(dispatch, "siggurd", siggurdObject, activeQuest);
}

function checkQuestCompletion(dispatch, giver, heroObject, activeQuest) {
  const questGiver = quests[giver];

  if (activeQuest.progress >= activeQuest.completion) {
    activeQuest.finished = true;

    // Level up hero if not at max level
    // NOTE: must change if max level is raised
    if (heroObject.level < 9) {
      const heroToLevel = HERO_LEVELING_MAP[giver];
      const levelUp = heroToLevel[heroObject.level + 1];
      console.log("LEVEL", levelUp);
      levelUpHero(dispatch, heroObject.name, levelUp);
    }

    // Unlock next quest in the series
    if (activeQuest.questNumber !== questGiver.length - 1) {
      const questGiver = quests[giver];
      questGiver[activeQuest.questNumber + 1].unlocked = true;
    }
  }
}

export function checkForActiveQuest(heroName, questName) {
  const order = store.getState().combat.order;
  const isHeroActive = order.find((hero) => hero.name === heroName);

  if (isHeroActive) {
    const questGiver = heroName.toLowerCase();
    const questsList = quests[questGiver];
    const isQuestActive = questsList.some(
      (quest) => quest.name === questName && quest.unlocked && !quest.finished
    );
    return isQuestActive;
  }
}