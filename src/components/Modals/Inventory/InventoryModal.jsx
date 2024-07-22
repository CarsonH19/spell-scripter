import classes from "./InventoryModal.module.css";

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Item from "./Item";
import Attributes from "../Attribute/Attributes";
import Tooltip from "../../UI/Tooltip";
import Icon from "../../UI/Icon";
import updateStatTotals from "../../../store/stats-actions";

export default function InventoryModal() {
  const [active, setActive] = useState(1);
  const dispatch = useDispatch();
  const order = useSelector((state) => state.combat.order);
  const inDungeon = useSelector((state) => state.ui.gameWindowIsVisible);

  let player;
  if (inDungeon) {
    console.log("inDungeon");
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
                Quest Items
              </button>
            </div>
            <ul className={classes.items}>
              {counters.map((item) => (
                <Tooltip
                  key={item.id}
                  position="item"
                  title={item.name}
                  text={item.rarity}
                  detailOne={item.description}
                  detailTwo={item.effect.map((line, index) => (
                    <span key={index} className={classes["item-effect"]}>
                      {line}
                    </span>
                  ))}
                >
                  <Item key={item.id} item={item} count={item.counter} />
                </Tooltip>
              ))}
            </ul>
          </div>

          <div className={classes.attuned}>
            <h3>Attuned</h3>
            <ul>
              {/* ITEM 1 */}
              {(attunedItems[0] && (
                <Tooltip
                  key={attunedItems[0].id}
                  position="item"
                  title={attunedItems[0].name}
                  text={attunedItems[0].rarity}
                  detailOne={attunedItems[0].description}
                  detailTwo={attunedItems[0].effect.map((line, index) => (
                    <span key={index} className={classes["item-effect"]}>
                      {line}
                    </span>
                  ))}
                >
                  <Item
                    key={attunedItems[0].id}
                    item={attunedItems[0]}
                    count={attunedItems[0].counter}
                  />
                </Tooltip>
              )) || <Icon className={classes.empty}></Icon>}
              {/* ITEM 2 */}
              {(attunedItems[1] && (
                <Tooltip
                  key={attunedItems[1].id}
                  position="item"
                  title={attunedItems[1].name}
                  text={attunedItems[1].rarity}
                  detailOne={attunedItems[1].description}
                  detailTwo={attunedItems[1].effect.map((line, index) => (
                    <span key={index} className={classes["item-effect"]}>
                      {line}
                    </span>
                  ))}
                >
                  <Item
                    key={attunedItems[1].id}
                    item={attunedItems[1]}
                    count={attunedItems[1].counter}
                  />
                </Tooltip>
              )) || <Icon className={classes.empty}></Icon>}

              {/* ITEM 3 */}
              {(attunedItems[2] && (
                <Tooltip
                  key={attunedItems[2].id}
                  position="item"
                  title={attunedItems[2].name}
                  text={attunedItems[2].rarity}
                  detailOne={attunedItems[2].description}
                  detailTwo={attunedItems[2].effect.map((line, index) => (
                    <span key={index} className={classes["item-effect"]}>
                      {line}
                    </span>
                  ))}
                >
                  <Item
                    key={attunedItems[2].id}
                    item={attunedItems[2]}
                    count={attunedItems[2].counter}
                  />
                </Tooltip>
              )) || <Icon className={classes.empty}></Icon>}

              {/* ITEM 4 */}
              {(attunedItems[3] && (
                <Tooltip
                  key={attunedItems[3].id}
                  position="item"
                  title={attunedItems[3].name}
                  text={attunedItems[3].rarity}
                  detailOne={attunedItems[3].description}
                  detailTwo={attunedItems[3].effect.map((line, index) => (
                    <span key={index} className={classes["item-effect"]}>
                      {line}
                    </span>
                  ))}
                >
                  <Item
                    key={attunedItems[3].id}
                    item={attunedItems[3]}
                    count={attunedItems[3].counter}
                  />
                </Tooltip>
              )) || <Icon className={classes.empty}></Icon>}

              {/* ITEM 5 */}
              {(attunedItems[4] && (
                <Tooltip
                  key={attunedItems[4].id}
                  position="item"
                  title={attunedItems[4].name}
                  text={attunedItems[4].rarity}
                  detailOne={attunedItems[4].description}
                  detailTwo={attunedItems[4].effect.map((line, index) => (
                    <span key={index} className={classes["item-effect"]}>
                      {line}
                    </span>
                  ))}
                >
                  <Item
                    key={attunedItems[4].id}
                    item={attunedItems[4]}
                    count={attunedItems[4].counter}
                  />
                </Tooltip>
              )) || <Icon className={classes.empty}></Icon>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
