import classes from "./StartGame.module.css";

import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";
import { playerActions } from "../../store/player-slice";

import CONSUMABLES from "../../data/consumables";
import EQUIPMENT from "../../data/equipment";
import MISC_ITEMS from "../../data/misc-items";
import { v4 as uuidv4 } from "uuid";
import { backgroundMusic, playMusic } from "../../data/audio/music";

export default function StartGame() {
  const dispatch = useDispatch();

  // Start Dashboard Music
  // playMusic(backgroundMusic.intangibleAscension);

  const handleStart = () => {
    startTransition(dispatch);

    // // Start Dashboard Music
    // playMusic(backgroundMusic.intangibleAscension);

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
        item: { ...CONSUMABLES.LAUGHING_COFFIN_COIN, id: uuidv4() },
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
        item: { ...CONSUMABLES.SUNSHADE_BLOSSOM, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.ANCIENT_SHORTBOW, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.RING_OF_AMBUSH, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.THIEVES_RUIN_MAP, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...EQUIPMENT.SKULL_SCEPTER, id: uuidv4() },
        change: "ADD",
      })
    );

    dispatch(
      playerActions.changeInventory({
        item: { ...MISC_ITEMS.THIEVES_RUIN_MAP, id: uuidv4() },
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
        item: { ...EQUIPMENT.CURSED_MIRROR, id: uuidv4() },
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

async function startTransition(dispatch) {
  await dispatch(uiActions.updateFade({ change: "CALL" }));
  await delay(2000);
  dispatch(uiActions.changeUi({ element: "startIsVisible", visible: false })); // false
  dispatch(
    uiActions.changeUi({ element: "dashboardIsVisible", visible: true })
  );

  await dispatch(uiActions.updateFade({ change: "CLEAR" }));

  async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
