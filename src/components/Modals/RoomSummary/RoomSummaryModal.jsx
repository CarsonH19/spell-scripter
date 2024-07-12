import { useDispatch, useSelector } from "react-redux";
import classes from "./RoomSummaryModal.module.css";

import Tooltip from "../../UI/Tooltip";

import { dungeonActions } from "../../../store/dungeon-slice";
import { logActions } from "../../../store/log-slice";
import { playerActions } from "../../../store/player-slice";
import { combatActions } from "../../../store/combat-slice";

import { useEffect } from "react";
import { changeHealth } from "../../../store/health-actions";
import { checkStatusEffect } from "../../../store/status-effect-actions";
import { checkSkillPoints } from "../../../util/spellbook-util";
import statusEffectFunctions from "../../../util/status-effect-functions";

export default function RoomSummaryModal() {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.dungeon.contents.event);
  const enemies = useSelector((state) => state.dungeon.contents.enemies);
  const itemsLooted = useSelector((state) => state.dungeon.contents.items);
  const order = useSelector((state) => state.combat.order);

  useEffect(() => {
    // Clear any lingering narrations
    dispatch(logActions.updateLogs({ change: "UNPAUSE" }));
    dispatch(logActions.updateLogs({ change: "CLEAR" }));

    // Toggle off danger
    dispatch(dungeonActions.dangerToggle({ danger: false }));

    // Add items looted from room/enemies to player's inventory
    for (let i = 0; i < itemsLooted.length; i++) {
      dispatch(
        playerActions.changeInventory({ item: itemsLooted[i], change: "ADD" })
      );
    }

    for (let i = 0; i < order.length; i++) {
      // Regen Health for Player & Heroes
      if (order[i].identifier === "HERO" || order[i].identifier === "PLAYER") {
        changeHealth(
          dispatch,
          order[i],
          "HEAL",
          order[i].stats.strength.healthRegen
        );

        // Regen Mana for Player
        if (order[i].identifier === "PLAYER") {
          dispatch(
            combatActions.updateMana({
              change: "ADD",
              value: order[i].stats.arcana.manaRegen,
            })
          );
        }

        // Decrement Status Effects
        checkStatusEffect(dispatch, order[i].id, "DECREMENT", "ROOM");
        checkStatusEffect(dispatch, order[i].id, "REMOVE");
      }
    }

    // SKILL - Improved Arcane Shield
    const improvedArcaneShield = checkSkillPoints("Improved Arcane Shield");
    if (improvedArcaneShield) {
      const player = order.find((char) => char.id === "Player");
      const arcaneShieldFunction = statusEffectFunctions["ARCANE_SHIELD"];
      arcaneShieldFunction(dispatch, null, player, "RESET", null);
    }
  }, [dispatch, itemsLooted]);

  return (
    <div className={classes.summary}>
      <h1>Room Cleared!</h1>
      <div className={classes.container}>
        {/* <div>TOME PROGRESS BAR</div>
        <div>QTE QUESTIONS</div> */}
        {event && (
          <div className={classes.event}>
            <h2>Event</h2>
            <p>{event.description[0]}</p>
            <h4>Outcome</h4>
            <p>{event.outcome}</p>
          </div>
        )}
        {enemies.length > 0 && (
          <div className={classes.enemies}>
            <h2>Enemies Defeated</h2>
            <ul>
              {enemies.map((enemy) => {
                return (
                  <Tooltip
                    key={enemy.id}
                    position="room-summary-icon"
                    title={enemy.name}
                  >
                    <li
                      style={{
                        backgroundImage: `url(${enemy.icon})`,
                      }}
                    ></li>
                  </Tooltip>
                );
              })}
            </ul>
          </div>
        )}
        {itemsLooted.length > 0 && (
          <div className={classes.items}>
            <h2>Items Looted</h2>
            <ul>
              {itemsLooted.map((item) => {
                return (
                  <Tooltip
                    key={item.id}
                    position="room-summary-icon"
                    title={item.name}
                  >
                    <li
                      // style={{
                      //   backgroundImage: `url(${item.icon})`,
                      // }}
                    ></li>
                  </Tooltip>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
