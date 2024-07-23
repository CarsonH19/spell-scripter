import classes from "./StartGame.module.css";

import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";
import { playerActions } from "../../store/player-slice";

import CONSUMABLES from "../../data/consumables";
import EQUIPMENT from "../../data/equipment";
import { v4 as uuidv4 } from "uuid";

export default function StartGame() {
  const dispatch = useDispatch();

  const handleStart = () => {
    dispatch(uiActions.changeUi({ element: "startIsVisible", visible: false })); // false
    dispatch(
      uiActions.changeUi({ element: "dashboardIsVisible", visible: true })
    ); // true

    // TEST CODE FOR INVENTORY
    let test = 9;
    for (let i = 0; i < test; i++) {
      dispatch(
        playerActions.changeInventory({
          item: { ...CONSUMABLES.HEALTH_POTION, id: uuidv4() },
          change: "ADD",
        })
      );

      dispatch(
        playerActions.changeInventory({
          item: { ...CONSUMABLES.MANA_POTION, id: uuidv4() },
          change: "ADD",
        })
      );

      dispatch(
        playerActions.changeInventory({
          item: { ...CONSUMABLES.SKELETON_KEY, id: uuidv4() },
          change: "ADD",
        })
      );

      dispatch(
        playerActions.changeInventory({
          item: { ...CONSUMABLES.CRYPTBREAD, id: uuidv4() },
          change: "ADD",
        })
      );
    }

    dispatch(
      playerActions.changeInventory({
        item: { ...CONSUMABLES.SOOTHING_CANDLE, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...CONSUMABLES.ROTBANE_FERN, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...CONSUMABLES.GHOSTLIGHT_LILY, id: uuidv4() },
        change: "ADD",
      })
    );


    dispatch(
      playerActions.changeInventory({
        item: { ...CONSUMABLES.WITCHFIRE_ORCHID, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...CONSUMABLES.LICHROOT, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...CONSUMABLES.SOOTHING_CANDLE, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...CONSUMABLES.LAUGHING_COFFIN_COIN, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...CONSUMABLES.TOMBSTONE_TRUFFLE, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...CONSUMABLES.SPIDER_EGG_YOLK, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...CONSUMABLES.SPIDER_EGG_YOLK, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...CONSUMABLES.SPIDER_EGG_YOLK, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...CONSUMABLES.BLACKHEART_BREW, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...CONSUMABLES.CALMING_CANDLE, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...CONSUMABLES.FLICKERING_CANDLE, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...CONSUMABLES.BLAZING_CANDLE, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...CONSUMABLES.INVOKING_CANDLE, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.PLAGUEBORN_HANDWRAPS, id: uuidv4() },
        change: "ADD",
      })
    );
    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.PLAGUEBORN_LEGWRAPS, id: uuidv4() },
        change: "ADD",
      })
    );
    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.PLAGUEBORN_SHAWL, id: uuidv4() },
        change: "ADD",
      })
    );
    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.GHOULBONE_CHESTPIECE, id: uuidv4() },
        change: "ADD",
      })
    );
    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.GHOULBONE_HELMET, id: uuidv4() },
        change: "ADD",
      })
    );
    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.GHOULBONE_PAULDRON, id: uuidv4() },
        change: "ADD",
      })
    );
    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.SHADOWBOUND_BOOTS, id: uuidv4() },
        change: "ADD",
      })
    );
    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.SHADOWBOUND_BRACERS, id: uuidv4() },
        change: "ADD",
      })
    );
    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.SHADOWBOUND_COWL, id: uuidv4() },
        change: "ADD",
      })
    );
    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.SOULREAVER, id: uuidv4() },
        change: "ADD",
      })
    );
    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.REVENANTS_RAGE, id: uuidv4() },
        change: "ADD",
      })
    );
    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.SPINE_OF_THE_NECROMANCER, id: uuidv4() },
        change: "ADD",
      })
    );
    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.PLAUGEWARD_PENDANT, id: uuidv4() },
        change: "ADD",
      })
    );
    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.EVERTORCH, id: uuidv4() },
        change: "ADD",
      })
    );
    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.SUNSTONE, id: uuidv4() },
        change: "ADD",
      })
    );
    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.SPIRIT_VEIL_CLOAK, id: uuidv4() },
        change: "ADD",
      })
    );
  };

  return (
    <div className={classes.start}>
      <h1>Spell Scripter</h1>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}
