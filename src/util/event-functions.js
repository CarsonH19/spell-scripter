import { createNewRoom } from "./dungeon-util";

const eventFunctions = {
  DUNGEON_ENTRANCE_ENTER: (dispatch) => {
    console.log("eventFunctions called");
    createNewRoom(dispatch);
  },
};

export default eventFunctions;
