import { dialogueActions } from "../store/dialogue-slice";
import {
  SIGGURD_DIALOGUE,
  LIHETH_DIALOGUE,
  AMBUSH_EVENT_DIALOGUE,
  COFFIN_DIALOGUE,
} from "../data/dialogue";
import store from "../store/index";

let dialogueResolver;

export async function checkForDialogue(dispatch, type) {
  const dialogue = store.getState().dialogue;
  const typeLowerCase = type.toLowerCase();
  await delay(2000);

  if (dialogue[typeLowerCase] && dialogue[typeLowerCase].length > 0) {
    dispatch(dialogueActions.startDialogue(typeLowerCase));
    await awaitDialogue();
  }

  await delay(2000);
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
        change: "BEFORE",
        dialogue: event.dialogue.before,
      })
    );
    dispatch(
      dialogueActions.updateDialogue({
        change: "AFTER",
        dialogue: event.dialogue.after,
      })
    );
  }

  // Choice Events - The player chooses between two or more options during the event.
  if (event.type === "CHOICE") {
    if (event.dialogue && event.dialogue !== "GET") {
      dispatch(
        dialogueActions.updateDialogue({
          change: "BEFORE",
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
                change: "RESPONSE",
                dialogue: dialogue.response,
              })
            );
          }
          // If the option chosen has an after dialogue it will be added
          if (dialogue.after) {
            dispatch(
              dialogueActions.updateDialogue({
                change: "AFTER",
                dialogue: dialogue.after,
              })
            );
          }
        }
      }
    }
  }
}

// Used to get a random dialogue for events with dialogue: "GET"
// getDialogue() is also called within the event-function of events to get different dialogues based off of who is in the players party
export async function getDialogue(dispatch, type) {
  const event = store.getState().dungeon.contents.event;

  if (event) {
    const order = store.getState().combat.order;
    const siggurd = order.find((char) => char.id === "Siggurd");
    const liheth = order.find((char) => char.id === "Liheth");
    const riven = order.find((char) => char.id === "Riven");
    let dialogue;

    // BEFORE
    if (type === "BEFORE") {
      switch (event.name) {
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

    // RESPONSE
    if (type === "RESPONSE") {
      switch (event.name) {
        case "Coffin":
          break;

        default:
          return;
      }
    }

    // AFTER
    if (type === "AFTER") {
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

  // helper function
  // function pushDialogues(array) {
  //   console.log(array);
  //   for (let i = 0; i < array.length; i++) {
  //     console.log(array[i]);
  //     dialogueOptions.push(array[i]);
  //   }
  // }
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function handleDialogue(dispatch, type) {
  await getDialogue(dispatch, type);
  await checkForDialogue(dispatch, type);
}
