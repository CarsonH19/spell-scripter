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

    case "RESPONSE":
      if (dialogue.before.length > 0) {
        // await delay(2000);
        dispatch(dialogueActions.startDialogue("response"));
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
    if (event.dialogue)
      dispatch(
        dialogueActions.updateDialogue({
          change: "BEFORE",
          dialogue: event.dialogue,
        })
      );

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

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
