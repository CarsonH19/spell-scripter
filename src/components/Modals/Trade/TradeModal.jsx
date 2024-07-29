import store from "../../../store/index";
import { useDispatch, useSelector } from "react-redux";
import classes from "./TradeModal.module.css";
import CONSUMABLES from "../../../data/consumables";
import { v4 as uuidv4 } from "uuid";
import { useMemo } from "react";
import Item from "./Item";
import { combatActions } from "../../../store/combat-slice";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Tooltip from "../../UI/Tooltip";

export default function TradeModal() {
  const dispatch = useDispatch();
  const dungeon = useSelector((state) => state.dungeon);
  const eventName = useSelector((state) => state.dungeon.contents.event.name);
  const player = useSelector((state) =>
    state.combat.order.find((char) => char.id === "Player")
  );

  // Must have player & eventName before calling useState
  // const [favor, setFavor] = useState(player.favor[eventName]);
  const [traderItems, setTraderItems] = useState([]);

  let traderName;
  let favorAvailable;
  // const traderItems = getTraderItems(eventName);
  const playerItems = getPlayerItems(eventName, player);

  useEffect(() => {
    setTraderItems(getTraderItems(eventName));
    console.log("RERENDER");
  }, [dungeon.roomCounter]);

  // find which trader
  switch (eventName) {
    case "Laughing Coffin":
      traderName = "Tavern Keeper";
      favorAvailable = player.favor.laughingCoffin;
      break;
  }

  const traderCounters = useMemo(() => {
    const counters = [];
    traderItems.forEach((item) => {
      const existingItem = counters.find((obj) => obj.name === item.name);
      if (existingItem) {
        existingItem.counter++;
      } else {
        counters.push({ ...item, counter: 1 });
      }
    });
    return counters;
  }, [traderItems]);

  const playerCounters = useMemo(() => {
    const counters = [];
    playerItems.forEach((item) => {
      const existingItem = counters.find((obj) => obj.name === item.name);
      if (existingItem) {
        existingItem.counter++;
      } else {
        counters.push({ ...item, counter: 1 });
      }
    });
    return counters;
  }, [playerItems]);

  // selling items
  const handleIncreaseFavor = (item) => {
    // Increase players favor
    dispatch(
      combatActions.changeFavor({
        change: "INCREASE",
        trader: eventName,
        favor: calculateItemFavor(item),
      })
    );
    // Remove item from player
    dispatch(
      combatActions.changePlayerInventory({
        item,
        change: "REMOVE",
      })
    );
  };

  // buying items
  const handleDecreaseFavor = (item) => {
    if (favorAvailable >= calculateItemFavor(item)) {
      // Removing item from trader
      setTraderItems((prevItems) => {
        return prevItems.filter((i) => i.id !== item.id);
      });

      // Add item to player
      dispatch(combatActions.changePlayerInventory({ item, change: "REMOVE" }));

      // Decrease player favor
      dispatch(
        combatActions.changeFavor({
          change: "DECREASE",
          trader: eventName,
          favor: calculateItemFavor(item),
        })
      );
    }
  };

  return (
    <div className={classes["trade-modal"]}>
      <h1>{eventName}</h1>
      <div className={classes.container}>
        <div className={classes.left}>
          <h2>{traderName}</h2>
          <ul className={classes.items}>
            {traderCounters.map((item) => (
              <Tooltip
                className={classes.item}
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
                <Item
                  key={item.id}
                  item={item}
                  count={item.counter}
                  onTrade={handleDecreaseFavor}
                  favorAvailable={favorAvailable}
                />
                <p className={classes["item-cost"]}>
                  Favor: {calculateItemFavor(item)}
                </p>
              </Tooltip>
            ))}
          </ul>
        </div>
        <div className={classes.right}>
          <p className={classes["player-favor"]}>Favor: {favorAvailable}</p>
          <h2>{player.name}</h2>
          <ul className={classes.items}>
            {playerCounters.map((item) => (
              <Tooltip
                className={classes.item}
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
                <Item
                  key={item.id}
                  item={item}
                  count={item.counter}
                  onTrade={handleIncreaseFavor}
                />
              </Tooltip>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function getTraderItems(eventName) {
  let items = [];
  switch (eventName) {
    case "Laughing Coffin":
      items.push(
        { ...CONSUMABLES.BLACKHEART_BREW, id: uuidv4() },
        { ...CONSUMABLES.BLACKHEART_BREW, id: uuidv4() },
        { ...CONSUMABLES.BLACKHEART_BREW, id: uuidv4() }
      );
      break;
  }

  return items;
}

function getPlayerItems(eventName, player) {
  let items = [];
  switch (eventName) {
    case "Laughing Coffin":
      items = player.inventory.consumables.filter(
        (item) => item.name === "Laughing Coffin Coin"
      );
      break;
  }

  return items;
}

// NOTE: update item favor costs
export function calculateItemFavor(item) {
  let cost;

  switch (item.rarity) {
    case "Common":
      cost = 10;
      break;

    case "Rare":
      cost = 25;
      break;

    case "Epic":
      cost = 100;
      break;

    case "Legendary":
      cost = 250;
      break;
  }
  return cost;
}
