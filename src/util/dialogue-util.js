import { dialogueActions } from "../store/dialogue-slice";
import { uiActions } from "../store/ui-slice";

import {
  DUNGEON_ENTRANCE_DIALOGUE,
  SIGGURD_DIALOGUE,
  LIHETH_DIALOGUE,
  AMBUSH_EVENT_DIALOGUE,
  COFFIN_DIALOGUE,
} from "../data/dialogue";
import store from "../store/index";

let dialogueResolver;

export async function checkForDialogue(dispatch, type) {
  const dialogue = store.getState().dialogue;
  // const typeLowerCase = type.toLowerCase();
  await delay(2000);

  console.log("DIALOGUE", dialogue);
  console.log("type", type);

  if (dialogue[type] && dialogue[type].length > 0) {
    dispatch(dialogueActions.startDialogue(type));
    await awaitDialogue();
    await dispatch(dialogueActions.clearDialogue(type));
  }

  const newDialogue = store.getState().dialogue;
  console.log("DIALOGUE", newDialogue);

  // await delay(2000);
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

export function setDialogues(dispatch, event, choice = null) {
  // Auto Events - The player does not make a choice during the event
  if (event.type === "AUTO") {
    dispatch(
      dialogueActions.updateDialogue({
        change: "before",
        dialogue: event.dialogue.before,
      })
    );
    dispatch(
      dialogueActions.updateDialogue({
        change: "after",
        dialogue: event.dialogue.after,
      })
    );
  }

  // Choice Events - The player chooses between two or more options during the event.
  // Logic checks for pre-set dialogues to call. If no dialogue is pre-set getDialogue will search for one
  if (event.type === "CHOICE" || event.type === "TRADE") {
    if (event.dialogue && event.dialogue !== "GET") {
      dispatch(
        dialogueActions.updateDialogue({
          change: "before",
          dialogue: event.dialogue,
        })
      );
    }

    // // Adds BEFORE dialogue for: Coffin
    // if (event.dialogue && event.dialogue === "GET") {
    //   getDialogue(dispatch, "BEFORE");
    // }

    if (choice) {
      for (let i = 0; i < event.options.length; i++) {
        if (event.options[i].text[0] === choice && event.options[i].dialogue) {
          const dialogue = event.options[i].dialogue;

          // If the option chosen has a response dialogue it will be added
          if (dialogue.response) {
            dispatch(
              dialogueActions.updateDialogue({
                change: "response",
                dialogue: dialogue.response,
              })
            );
          }
          // If the option chosen has an after dialogue it will be added
          if (dialogue.after) {
            dispatch(
              dialogueActions.updateDialogue({
                change: "after",
                dialogue: dialogue.after,
              })
            );
          }
        }
      }
    }
  }
}

// ===============================================================
//                    GET DIALOGUE
// ===============================================================

// Used to get a random dialogue for events with dialogue: "GET"
// getDialogue() is also called within the event-function of events to get different dialogues based off of who is in the players party
export async function getDialogue(dispatch, type, eventOption) {
  const event = store.getState().dungeon.contents.event;

  if (event) {
    const order = store.getState().combat.order;
    const siggurd = order.find((char) => char.id === "Siggurd");
    const liheth = order.find((char) => char.id === "Liheth");
    const riven = order.find((char) => char.id === "Riven");
    let dialogue;

    // ===============================================================
    //                        BEFORE
    // ===============================================================
    if (type === "before") {
      switch (event.name) {
        case "Dungeon Entrance":
          dialogue = DUNGEON_ENTRANCE_DIALOGUE.PLAYER.before;
          break;

        case "Coffin":
          if (liheth) {
            console.log("LIHETH");
            dialogue = COFFIN_DIALOGUE.LIHETH.before;
          } else {
            console.log("PLAYER");
            dialogue = COFFIN_DIALOGUE.PLAYER.before;
          }
          break;

        default:
          return;
      }
    }

    // ===============================================================
    //                        RESPONSE
    // ===============================================================
    if (type === "response") {
      switch (event.name) {
        case "Gravestone":
          if (eventOption === "Place a flower") {
            // check for liheth
            // check for siggurd
            // dialogue = dialogue
          }
          break;

        default:
          return;
      }
    }

    // ===============================================================
    //                       AFTER
    // ===============================================================
    if (type === "after") {
      switch (event.name) {
        case "Coffin":
          break;

        default:
          return;
      }
    }

    dispatch(
      dialogueActions.updateDialogue({
        change: type,
        dialogue: dialogue,
      })
    );

    const dialogueSlice = store.getState().dialogue;
    console.log(dialogueSlice);
  }
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function handleDialogue(dispatch, type) {
  const event = store.getState().dungeon.contents.event;
  await getDialogue(dispatch, type);
  await checkForDialogue(dispatch, type);

  // Render event options after dialogue
  if (type === "before" && event.options) {
    dispatch(
      uiActions.changeUi({ element: "eventOptionsAreVisible", visible: true })
    );
  }
}
