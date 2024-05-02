import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "../../../store/player-slice";

import store from "../../../store/index";

import { itemFunctions } from "../../../util/item-functions";
import { changeStatusEffect } from "../../../data/status-effects";

export default function Item({ item }) {
  const dispatch = useDispatch();
  let inventory = useSelector((state) => state.player.inventory);

  const handleItemClick = (type) => {
    const dashboard = store.getState().ui.dashboardIsVisible;

    switch (type) {
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
            console.log("PLAYER", player);
          }

          if (inventory.attunedItems.includes(item)) {
            // remove item from attunedItems
            dispatch(
              playerActions.changeAttunement({ item, change: "REMOVE" })
            );

            changeStatusEffect(dispatch, player, "REMOVE", item);
          } else {
            // equip item to attunedItems
            dispatch(playerActions.changeAttunement({ item, change: "ADD" }));

            // using combat-slice for equiping during combat.
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

          const itemID = "CRYPTBREAD"; // TEMPORARY
          const itemFunction = itemFunctions[itemID];
          if (itemFunction) {
            itemFunction(dispatch, player);
          }
          dispatch(playerActions.changeInventory({ item, change: "REMOVE" }));
          console.log(player.inventory.consumables);
        }
        break;
    }
  };

  return <li onClick={() => handleItemClick(item.type)}></li>;
}
