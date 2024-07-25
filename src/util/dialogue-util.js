import { dialogueActions } from "../store/dialogue-slice";
import {
  SIGGURD_DIALOGUE,
  LIHETH_DIALOGUE,
  AMBUSH_EVENT_DIALOGUE,
} from "../data/dialogue";
import store from "../store/index";
import heroes from "../data/heroes";

let dialogueResolver;

export default async function checkForDialogue(dispatch, beforeOrAfter) {
  const dialogue = store.getState().dialogue;
  switch (beforeOrAfter) {
    case "BEFORE":
      if (dialogue.before.length > 0) {
        // await delay(2000);
        dispatch(dialogueActions.startDialogue("before"));
        await awaitDialogue();
      }
      break;

    case "AFTER":
      if (dialogue.after.length > 0) {
        await delay(2000);
        dispatch(dialogueActions.startDialogue("after"));
        await awaitDialogue();
      }
      break;
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

export function setDialogues(dispatch, event) {
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
    dispatch(
      dialogueActions.updateDialogue({
        change: "BEFORE",
        dialogue: event.dialogue,
      })
    );

    // There choice determines the outcome & after dialogue
    // The after dialogue is updated in the event function 
  }
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
