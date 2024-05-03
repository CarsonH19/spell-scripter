import classes from "./InventoryModal.module.css";

import { useState } from "react";

import { useSelector } from "react-redux";

import Item from "./Item";
import Stats from "./Stats";

import Tooltip from "../../UI/Tooltip";

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

  // Counter logic
  let counters = [];
  itemGroup.map((item) => {
    let existingItem = counters.find((obj) => obj.name === item.name);
    if (existingItem) {
      existingItem.counter++;
    } else {
      counters.push({ ...item, counter: 1 });
    }
  });

  return (
    <div className={classes.inventory}>
      <h1>Inventory</h1>
      <div className={classes.container}>
        <div className={classes.left}>
          <Stats />
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
            {counters.map((item) => (
              <Tooltip
                key={item.id}
                title={item.name}
                text={item.rarity}
                detailOne={item.description}
                detailTwo={item.effect.map((line, index) => <div key={index}>{line}</div>)}
              >
                <Item key={item.id} item={item} count={item.counter} />
              </Tooltip>
            ))}
          </ul>

          <div className={classes.attuned}>
            <h3>Attuned</h3>
            <ul>
              {attunedItems.map((item) => (
                <Tooltip
                  key={item.id}
                  title={item.name}
                  text={"Test"}
                  detail={`Test`}
                >
                  <Item key={item.id} item={item} />
                </Tooltip>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
