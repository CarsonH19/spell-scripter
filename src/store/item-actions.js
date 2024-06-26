import store from "./index";

import { playerActions } from "./player-slice";

import changeStatusEffect from "./status-effect-actions";

import { itemFunctions } from "../util/item-functions";

export default async function activateItem(dispatch, item) {
  const dashboard = store.getState().ui.dashboardIsVisible;

  let inventory = store.getState().player.inventory;

  switch (item.type) {
    case "EQUIPMENT":
      {
        // Select combat-slice or player-slice player object
        let player;
        const dashboard = store.getState().ui.dashboardIsVisible;
        if (!dashboard) {
          const order = store.getState().combat.order;
          player = order.find((char) => char.id === "Player");
        } else if (dashboard) {
          player = store.getState().player;
        }

        if (inventory.attunedItems.includes(item)) {
          // remove item from attunedItems
          dispatch(playerActions.changeAttunement({ item, change: "REMOVE" }));

          changeStatusEffect(dispatch, player, "REMOVE", item);
        } else {
          // equip item to attunedItems
          dispatch(playerActions.changeAttunement({ item, change: "ADD" }));

          // using combat-slice for equipping during combat.
          // must update player state at the end of the dungeon gameplay
          changeStatusEffect(dispatch, player, "ADD", item);
        }
      }
      break;

    case "CONSUMABLE":
      {
        // Can't use consumables on the dashboard
        if (dashboard) return;

        const player = store.getState().player;

        const snakeCaseItem = toSnakeCase(item.name);

        const itemFunction = itemFunctions[snakeCaseItem];
        if (itemFunction) {
          itemFunction(dispatch, player);
        }
        dispatch(playerActions.changeInventory({ item, change: "REMOVE" }));
      }
      break;
  }
}

function toSnakeCase(str) {
  return str.toUpperCase().replace(/\s+/g, "_");
}
