import classes from "./InventoryModal.module.css";

import { useState } from "react";

import { useSelector } from "react-redux";

import Item from "./Item";
import Stats from "./Stats";

// import Tooltip from "../../UI/Tooltip";

export default function InventoryModal() {
  const [active, setActive] = useState(1);
  const player = useSelector((state) => state.player);

  const handleButtonClick = (index) => {
    setActive(index);
  };

  let itemGroup;
  let attunedItems = player.inventory.attunedItems;

  switch (active) {
    case 1:
      itemGroup = player.inventory.equipment;
      break;
    case 2:
      itemGroup = player.inventory.consumables;
      break;
    case 3:
      itemGroup = player.inventory.questItems;
      break;
  }

  console.log("INVENTORY");

  return (
    <div className={classes.inventory}>
      <h1>Inventory</h1>
      <div className={classes.container}>
        <div className={classes.left}>
          <Stats />
          {/* <div className={classes.party}>
            <h3>Party</h3>
            <hr />

          </div> */}
        </div>
        {/* <div className={classes.vertical}></div> */}
        <div className={classes.right}>
          <div className={classes.buttons}>
            <button
              className={active === 1 ? classes.active : ""}
              onClick={() => handleButtonClick(1)}
            >
              Equipment
            </button>
            <button
              className={active === 2 ? classes.active : ""}
              onClick={() => handleButtonClick(2)}
            >
              Consumables
            </button>
            <button
              className={active === 3 ? classes.active : ""}
              onClick={() => handleButtonClick(3)}
            >
              Quest Items
            </button>
          </div>
          <ul className={classes.items}>
            {itemGroup.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </ul>
          <div className={classes.attuned}>
            <h3>Attuned</h3>
            <ul>
              {attunedItems.map((item) => (
                <Item key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
