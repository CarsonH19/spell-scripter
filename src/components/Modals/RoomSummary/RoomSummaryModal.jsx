import { useDispatch, useSelector } from "react-redux";
import classes from "./RoomSummaryModal.module.css";
import { dungeonActions } from "../../../store/dungeon-slice";
import { useEffect } from "react";
import { playerActions } from "../../../store/player-slice";
import { changeHealth } from "../../../store/health-actions";
import { combatActions } from "../../../store/combat-slice";
import { checkStatusEffect } from "../../../store/status-effect-actions";
import { checkSkillPoints } from "../../../util/spellbook-util";
import statusEffectFunctions from "../../../util/status-effect-functions";

export default function RoomSummaryModal() {
  const dispatch = useDispatch();
  const enemies = useSelector((state) => state.dungeon.contents.enemies);
  const itemsLooted = useSelector((state) => state.dungeon.contents.items);
  const order = useSelector((state) => state.combat.order);

  useEffect(() => {
    // Toggle off danger
    dispatch(dungeonActions.dangerToggle({ danger: false }));
    console.log("NO DANGER");

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
        <div>TOME PROGRESS BAR</div>
        <div>QTE QUESTIONS</div>
        <div>EVENTS</div>
        {enemies.length > 0 && (
          <div>
            <h4>Enemies Defeated</h4>
            <ul>
              {enemies.map((enemy) => {
                return <li key={enemy.id}>{enemy.name}</li>;
              })}
            </ul>
          </div>
        )}
        {itemsLooted.length > 0 && (
          <div>
            <h4>Items Looted</h4>
            <ul>
              {itemsLooted.map((item) => {
                return <li key={item.id}>{item.name}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
