import store from "../store/index";

export default function startEvent() {
  const event = store.getState().dungeon.contents.event;

  if (event) {
    //
  }
}
