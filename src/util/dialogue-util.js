import { dialogueActions } from "../store/dialogue-slice";
import { SIGGURD_DIALOGUE, LIHETH_DIALOGUE } from "../data/dialogue";
import store from "../store/index";
import heroes from "../data/heroes";

let dialogueResolver;

export default async function checkForDialogue(dispatch, beforeOrAfter) {
  const dialogue = store.getState().dialogue;
  switch (beforeOrAfter) {
    case "BEFORE":
      if (dialogue.before.length > 0) {
        await delay(2000);
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
//           Add dialogue when a new room is created
// =============================================================

export function getRoomDialogue(dispatch, dungeon) {
  // Use general dungeon dialogue
  switch (dungeon.name) {
    case "The Great Catacomb":
      //
      break;
  }

  // Check for path specific dialogue
  if (dungeon.path) {
    switch (dungeon.path) {
      case "Wailing Warrens":
        //
        break;

      default:
        break;
    }
  }

  // Check for event specific dialogue
  if (dungeon.contents.event) {
    switch (dungeon.contents.event.name) {
      case "Bonevault":
        //
        break;

      case "Aiding Siggurd":
        dispatch(dialogueActions.updateDialogue(SIGGURD_DIALOGUE.UNLOCK_EVENT));
        break;

      case "Candlelight Shrine":
        if (!heroes[1].unlocked) {
          dispatch(
            dialogueActions.updateDialogue(LIHETH_DIALOGUE.UNLOCK_EVENT)
          );
        }

      default:
        break;
    }
  }
  // Misc.
  // Check for misc. dialogue
}

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
