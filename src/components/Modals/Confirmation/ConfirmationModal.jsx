import classes from "./ConfirmationModal.module.css";

import { uiActions } from "../../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

import { getRoomEnemies } from "../../../util/dungeon-util";
import { combatActions } from "../../../store/combat-slice";

import updateStatTotals from "../../../store/stats-actions";

import Icon from "../../UI/Icon";
import Tooltip from "../../UI/Tooltip";

export default function ConfirmationModal() {
  const dispatch = useDispatch();
  const dungeon = useSelector((state) => state.dungeon.name);
  const preparedSpells = useSelector((state) => state.player.spellList);
  const partyMembers = useSelector((state) => state.hero.party);
  const attunedItems = useSelector(
    (state) => state.player.inventory.attunedItems
  );

  // Test
  const ui = useSelector((state) => state.ui);

  const enemies = getRoomEnemies();
  const heroes = useSelector((state) => state.hero.party);
  const player = useSelector((state) => state.player);

  const handleConfirmation = () => {
    dispatch(uiActions.toggle({ modal: "dashboardIsVisible" })); // false
    dispatch(uiActions.toggle({ modal: "gameWindowIsVisible" })); // true

    // the following are only used for testing
    dispatch(combatActions.setInitiative({ heroes, enemies, player }));

    // TESTING CODE update all stats
    for (let i = 0; i < heroes.length; i++) {
      updateStatTotals(dispatch, heroes[i].id);
    }

    for (let i = 0; i < enemies.length; i++) {
      updateStatTotals(dispatch, enemies[i].id);
    }

    updateStatTotals(dispatch, player.id);

    dispatch(uiActions.toggle({ modal: "modalIsVisible" }));
  };

  const handleClickChange = (modal) => {
    dispatch(uiActions.toggleModal({ modal, open: "OPEN" }));
    console.log(ui);
  };

  return (
    <div className={classes.confirmation}>
      <h1>{dungeon}</h1>
      <div className={classes.container}>
        <div className={classes.section}>
          <h3>Prepared Spells</h3>
          <div className={classes.block}>
            <ul>
              {preparedSpells.map((spell) => (
                <Tooltip
                  key={spell.name}
                  title={spell.name}
                  text={spell.school}
                  detailOne={spell.description}
                >
                  <Icon key={spell.name}>{spell.name}</Icon>
                </Tooltip>
              ))}
              <p className={classes.tracker}>{preparedSpells.length} / 0</p>
            </ul>
            <button onClick={() => handleClickChange("spellbookModal")}>
              Change
            </button>
          </div>
        </div>
        <div className={classes.section}>
          <h3>Party Members</h3>
          <div className={classes.block}>
            <ul>
              {partyMembers.map((hero) => (
                <Tooltip key={hero.name} title={hero.name} text={hero.level}>
                  <Icon key={hero.name}>{hero.name}</Icon>
                </Tooltip>
              ))}
              <p className={classes.tracker}>{partyMembers.length} / 3</p>
            </ul>
            <button onClick={() => handleClickChange("heroesModal")}>
              Change
            </button>
          </div>
        </div>
        <div className={classes.section}>
          <h3>Attuned Items</h3>
          <div className={classes.block}>
            <ul>
              {attunedItems.map((item) => (
                <Tooltip key={item.name} title={item.name} text={item.description}>
                  <Icon key={item.name}>{item.name}</Icon>
                </Tooltip>
              ))}
              <p className={classes.tracker}>{attunedItems.length} / 5</p>
            </ul>
            <button onClick={() => handleClickChange("inventoryModal")}>
              Change
            </button>
          </div>
        </div>
        <button onClick={handleConfirmation}>Confirm</button>
      </div>
    </div>
  );
}
