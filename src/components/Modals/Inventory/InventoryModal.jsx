import classes from "./InventoryModal.module.css";

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Item from "./Item";
import Attributes from "../Attribute/Attributes";
import Tooltip from "../../UI/Tooltip";
import Icon from "../../UI/Icon";
import updateStatTotals from "../../../store/stats-actions";
import AttunedItem from "./attunedItem";

export default function InventoryModal() {
  const [active, setActive] = useState(1);
  const dispatch = useDispatch();
  const order = useSelector((state) => state.combat.order);
  const inDungeon = useSelector((state) => state.ui.gameWindowIsVisible);

  let player;
  if (inDungeon) {
    player = order.find((char) => char.id === "Player");
  } else {
    player = useSelector((state) => state.player);
  }

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
      itemGroup = player.inventory.miscItems;
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

  // Counting Set Pieces
  let setCounts = {};
  // Iterate over the attuned items and count the occurrences of each set
  player.inventory.attunedItems.forEach((item) => {
    if (item.set) {
      if (setCounts[item.set]) {
        setCounts[item.set]++;
      } else {
        setCounts[item.set] = 1;
      }
    }
  });

  return (
    <div className={classes.inventory}>
      <h1>Inventory</h1>
      <div className={classes.container}>
        <div className={classes.left}>
          <Attributes />
        </div>
        <div className={classes.right}>
          <div className={classes.top}>
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
                Misc. Items
              </button>
            </div>
            <ul className={classes.items}>
              {counters.map((item) => {
                // Calculate set pieces for tooltip
                let setPieces = 0;
                if (item.set && setCounts[item.set]) {
                  setPieces = setCounts[item.set];
                }

                return (
                  <Tooltip
                    key={item.id}
                    position="right-middle"
                    title={item.name}
                    text={item.rarity}
                    detailOne={item.description}
                    detailTwo={item.effect.map((line, index) => (
                      <span key={index} className={classes["item-effect"]}>
                        {line}
                      </span>
                    ))}
                    detailThree={item.set ? `${item.set} ${setPieces}/3` : null}
                    detailFour={
                      item.setBonus
                        ? item.setBonus.map((line, index) => (
                            <span
                              key={index}
                              className={classes["item-effect"]}
                            >
                              {line}
                            </span>
                          ))
                        : null
                    }
                  >
                    <Item key={item.id} item={item} count={item.counter} />
                  </Tooltip>
                );
              })}
            </ul>
          </div>

          <div className={classes.attuned}>
            <h3>Attuned</h3>
            <ul>
              {/* ITEM 1 */}
              {(attunedItems[0] && (
                <AttunedItem item={attunedItems[0]} setCounts={setCounts} />
              )) || <Icon className={classes.empty}></Icon>}
              {/* ITEM 2 */}
              {(attunedItems[1] && (
                <AttunedItem item={attunedItems[1]} setCounts={setCounts} />
              )) || <Icon className={classes.empty}></Icon>}
              {/* ITEM 3 */}
              {(attunedItems[2] && (
                <AttunedItem item={attunedItems[2]} setCounts={setCounts} />
              )) || <Icon className={classes.empty}></Icon>}
              {/* ITEM 4 */}
              {(attunedItems[3] && (
                <AttunedItem item={attunedItems[3]} setCounts={setCounts} />
              )) || <Icon className={classes.empty}></Icon>}
              {/* ITEM 5 */}
              {(attunedItems[4] && (
                <AttunedItem item={attunedItems[4]} setCounts={setCounts} />
              )) || <Icon className={classes.empty}></Icon>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
