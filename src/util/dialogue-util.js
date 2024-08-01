import { dialogueActions } from "../store/dialogue-slice";
import { uiActions } from "../store/ui-slice";

import { GRAVESTONE_DIALOGUE } from "../data/dialogue";
import store from "../store/index";
import { GRAVESTONE } from "../data/events";
import {
  UNLOCKING_LIHETH_DIALOGUE,
  UNLOCKING_SIGGURD_DIALOGUE,
  DUNGEON_ENTRANCE_DIALOGUE,
  AMBUSH_DIALOGUE,
  COFFIN_DIALOGUE,
} from "../data/dialogues/catacomb-event-dialogue";

let dialogueResolver;

export default async function checkForDialogue(dispatch, type, choice = null) {
  const dungeon = store.getState().dungeon;
  await delay(2000);

  // if a dialogue is available it
  await getDialogue(dispatch, type, choice);

  const dialogue = store.getState().dialogue;

  // Check if dialogue has been set in dialogue-slice
  if (dialogue[type] && dialogue[type].length > 0) {
    dispatch(dialogueActions.startDialogue(type));
    await awaitDialogue();
    await dispatch(dialogueActions.clearDialogue(type));
  }

  // Render event options after dialogue
  if (
    type === "before" &&
    dungeon.contents.event &&
    dungeon.contents.event.options
  ) {
    dispatch(
      uiActions.changeUi({ element: "eventOptionsAreVisible", visible: true })
    );
  }
}

// =============================================================
//       Awaiting dialogue before starting combat or event
// =============================================================

// // Used to await the end of a dialogue
export async function awaitDialogue() {
  return new Promise((resolve) => {
    dialogueResolver = resolve;
  });
}

// // Function to end the dialogue
export function endDialogue(dispatch) {
  if (dialogueResolver) {
    dispatch(dialogueActions.finishDialogue());
    dialogueResolver("CONTINUE");
    dialogueResolver = null;
  }
}

// =============================================================
//                           Setting Dialogues
// =============================================================

// export function setDialogues(dispatch, event, choice = null) {
//   // Auto Events - The player does not make a choice during the event
//   if (event.type === "AUTO") {
//     dispatch(
//       dialogueActions.updateDialogue({
//         change: "before",
//         dialogue: event.dialogue.before,
//       })
//     );
//     dispatch(
//       dialogueActions.updateDialogue({
//         change: "after",
//         dialogue: event.dialogue.after,
//       })
//     );
//   }

//   // Choice Events - The player chooses between two or more options during the event.
//   // Logic checks for pre-set dialogues to call. If no dialogue is pre-set getDialogue will search for one
//   if (event.type === "CHOICE" || event.type === "TRADE") {
//     if (event.dialogue && event.dialogue !== "GET") {
//       dispatch(
//         dialogueActions.updateDialogue({
//           change: "before",
//           dialogue: event.dialogue,
//         })
//       );
//     }

//     // // Adds BEFORE dialogue for: Coffin
//     // if (event.dialogue && event.dialogue === "GET") {
//     //   getDialogue(dispatch, "BEFORE");
//     // }

//     if (choice) {
//       for (let i = 0; i < event.options.length; i++) {
//         if (event.options[i].text[0] === choice && event.options[i].dialogue) {
//           const dialogue = event.options[i].dialogue;

//           // If the option chosen has a response dialogue it will be added
//           if (dialogue.response) {
//             dispatch(
//               dialogueActions.updateDialogue({
//                 change: "response",
//                 dialogue: dialogue.response,
//               })
//             );
//           }
//           // If the option chosen has an after dialogue it will be added
//           if (dialogue.after) {
//             dispatch(
//               dialogueActions.updateDialogue({
//                 change: "after",
//                 dialogue: dialogue.after,
//               })
//             );
//           }
//         }
//       }
//     }
//   }
// }

// ===============================================================
//                    GET DIALOGUE
// ===============================================================

// getDialogue() is
export async function getDialogue(dispatch, type, eventChoice) {
  const dungeon = store.getState().dungeon;
  const order = store.getState().combat.order;
  const siggurd = order.find((char) => char.id === "Siggurd");
  const liheth = order.find((char) => char.id === "Liheth");
  const riven = order.find((char) => char.id === "Riven");
  let dialogueOptions = [];

  // ===============================================================
  //                      DUNGEON ENTRANCES
  // ===============================================================
  // Check for before dialogues when entering a dungeon

  if (
    type === "before" &&
    dungeon.contents.event &&
    dungeon.contents.event.name === "Dungeon Entrance"
  ) {
    switch (dungeon.name) {
      case "The Great Catacomb": {
        if (siggurd) {
          for (let i = 0; i < DUNGEON_ENTRANCE_DIALOGUE.SIGGURD.length; i++) {
            dialogueOptions.push(DUNGEON_ENTRANCE_DIALOGUE.SIGGURD[i]);
          }
        }
        if (liheth) {
          for (let i = 0; i < DUNGEON_ENTRANCE_DIALOGUE.LIHETH.length; i++) {
            dialogueOptions.push(DUNGEON_ENTRANCE_DIALOGUE.LIHETH[i]);
          }
        }
        for (let i = 0; i < DUNGEON_ENTRANCE_DIALOGUE.PLAYER.length; i++) {
          dialogueOptions.push(DUNGEON_ENTRANCE_DIALOGUE.PLAYER[i]);
        }

        break;
      }

      // NOTE: Add new dungeons here
      default:
        break;
    }
  }

  // ===============================================================
  //                        PATH ENTRANCES
  // ===============================================================
  // Check before dialogues when a path entrance is found

  // ===============================================================
  //                        PATH EXITS
  // ===============================================================
  // Check before dialogues when a path exit is found

  // ===============================================================
  //                        EVENTS
  // ===============================================================
  // Check before, response, and after for all events

  // The Great Catacomb
  if (
    dungeon.contents.event &&
    dungeon.contents.event.name !== "Dungeon Entrance"
  ) {
    switch (dungeon.contents.event.name) {
      case "Candlelight Shrine":
        switch (type) {
          case "before":
            break;
          case "response":
            break;
          case "after":
            break;
        }
        break;

      case "Coffin":
        switch (type) {
          case "before":
            if (siggurd) dialogueOptions.push(COFFIN_DIALOGUE.SIGGURD.before);
            if (liheth) dialogueOptions.push(COFFIN_DIALOGUE.LIHETH.before);
            break;
          case "response":
            if (choice === "open") {
              if (siggurd)
                dialogueOptions.push(COFFIN_DIALOGUE.SIGGURD.responseEnemy);
              if (liheth)
                dialogueOptions.push(COFFIN_DIALOGUE.LIHETH.responseEnemy);
            }
            break;
          case "after":
            if (choice === "open") {
              if (siggurd)
                dialogueOptions.push(COFFIN_DIALOGUE.SIGGURD.afterEnemy);
              if (liheth)
                dialogueOptions.push(COFFIN_DIALOGUE.LIHETH.afterEnemy);
            }
            break;
        }
        break;

      case "Gravestone":
        switch (type) {
          case "before":
            if (siggurd) {
              // dialogueOptions.push(GRAVESTONE_DIALOGUE.SIGGURD.before);
            }
            if (liheth) {
              // dialogueOptions.push(GRAVESTONE_DIALOGUE.LIHETH.before);
            }
            // dialogueOptions.push(GRAVESTONE_DIALOGUE.PLAYER.before);

            break;
          case "response":
            //
            break;
          case "after":
            if (eventChoice === "Place a flower") {
            }

            if (eventChoice === "Leave") {
            }
            break;
        }

        break;

      case "Bonevault":
        switch (type) {
          case "before":
            break;
          case "response":
            break;
          case "after":
            break;
        }
        break;

      case "Ambush":
        switch (type) {
          case "before":
            if (siggurd) dialogueOptions.push(AMBUSH_DIALOGUE.SIGGURD.before);
            if (liheth) dialogueOptions.push(AMBUSH_DIALOGUE.LIHETH.before);
            dialogueOptions.push(AMBUSH_DIALOGUE.PLAYER.before);
            break;
          case "response":
            if (choice === "Refuse") {
              if (siggurd)
                dialogueOptions.push(AMBUSH_DIALOGUE.SIGGURD.responseRefuse);
              if (liheth)
                dialogueOptions.push(AMBUSH_DIALOGUE.LIHETH.responseRefuse);
              dialogueOptions.push(
                AMBUSH_DIALOGUE.PLAYER.PLAYER.responseRefuse
              );
            }
            break;
          case "after":
            if (choice === "Refuse") {
              if (siggurd)
                dialogueOptions.push(AMBUSH_DIALOGUE.SIGGURD.afterRefuse);
              if (liheth)
                dialogueOptions.push(AMBUSH_DIALOGUE.LIHETH.afterRefuse);
              dialogueOptions.push(AMBUSH_DIALOGUE.PLAYER.PLAYER.afterRefuse);
            }
            if (choice === "Surrender") {
              if (siggurd)
                dialogueOptions.push(AMBUSH_DIALOGUE.SIGGURD.afterSurrender);
              if (liheth)
                dialogueOptions.push(AMBUSH_DIALOGUE.LIHETH.afterSurrender);
              dialogueOptions.push(
                AMBUSH_DIALOGUE.PLAYER.PLAYER.afterSurrender
              );
            }
            break;
        }
        break;

      case "Spike Walls":
        switch (type) {
          case "before":
            break;
          case "response":
            break;
          case "after":
            break;
        }
        break;

      case "Collapsing Ceiling":
        switch (type) {
          case "before":
            break;
          case "response":
            break;
          case "after":
            break;
        }
        break;

      case "Rotating Blades":
        switch (type) {
          case "before":
            break;
          case "response":
            break;
          case "after":
            break;
        }
        break;

      case "Magic Rune":
        switch (type) {
          case "before":
            break;
          case "response":
            break;
          case "after":
            break;
        }
        break;

      case "Unlocking Siggurd":
        switch (type) {
          case "before":
            dialogueOptions.push(UNLOCKING_SIGGURD_DIALOGUE.before);
            break;
          case "after":
            dialogueOptions.push(UNLOCKING_SIGGURD_DIALOGUE.after);
            break;
        }
        break;

      case "Unlocking Liheth":
        switch (type) {
          case "before":
            dialogueOptions.push(UNLOCKING_LIHETH_DIALOGUE.before);
            break;
          case "after":
            dialogueOptions.push(UNLOCKING_LIHETH_DIALOGUE.after);
            break;
        }
        break;

      default:
        break;
    }
  }

  // Thieves' Ruin
  // Traps
  // Laughing Coffin

  // ===============================================================
  //                        MISC. COMBAT
  // ===============================================================
  // Calculate chance to have a short dialogue before combat begins

  // ===============================================================
  //                        INVENTORY
  // ===============================================================
  // Called when equipping or using certain items
  // Called when no more attunement slots are open

  // If options exist get a random option and update the dialogue-slice
  if (dialogueOptions.length > 0) {
    const index = Math.floor(Math.random() * dialogueOptions.length);
    dispatch(
      dialogueActions.updateDialogue({
        change: type,
        dialogue: dialogueOptions[index],
      })
    );
  }
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// export default async function handleDialogue(dispatch, type, choice = null) {
//   const event = store.getState().dungeon.contents.event;
//   await getDialogue(dispatch, type, choice);
//   await checkForDialogue(dispatch, type);

//   // Render event options after dialogue
//   if (type === "before" && event.options) {
//     dispatch(
//       uiActions.changeUi({ element: "eventOptionsAreVisible", visible: true })
//     );
//   }
// }
