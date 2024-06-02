import { uiActions } from "./ui-slice";

export function openQuickTimeEvent(dispatch) {
  dispatch(uiActions.toggle({ modal: "modalIsVisible" })); // set to true
  dispatch(
    uiActions.toggleModal({ modal: "quickTimeEventModal", open: "OPEN" })
  );
}
