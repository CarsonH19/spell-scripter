import { dialogueActions } from "../store/dialogue-slice";
import store from "../store/index";

let dialogueResolver;

export default async function checkForDialogue(dispatch, beforeOrAfter) {
  const dialogue = store.getState().dialogue;
  const dungeon = store.getState().dungeon;

  console.log(dialogue);
  console.log(dialogue.before);
  console.log(dungeon);

  switch (beforeOrAfter) {
    case "BEFORE":
      if (dialogue.before.length > 0) {
        dispatch(dialogueActions.startDialogue("before"));
        await awaitDialogue();
      }
      break;

    case "AFTER":
      if (dialogue.after.length > 0) {
        dispatch(dialogueActions.startDialogue("after"));
        await awaitDialogue();
      }
      break;
  }
}

// // =============================================================
// //       Awaiting dialogue before starting combat or event
// // =============================================================

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
