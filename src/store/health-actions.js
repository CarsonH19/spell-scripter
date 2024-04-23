import { heroActions } from "./hero-slice";
import { dungeonActions } from "./dungeon-slice";
import { playerActions } from "./player-slice";

export default function changeHealth(
  dispatch,
  target,
  change = "DAMAGE",
  value = 0,
  damageType = null
) {
  const id = target.id;

  if (change === "DAMAGE") {
    for (let i = 0; i < target.weaknesses.length; i++) {
      if (target.weaknesses[i] === damageType) {
        value = value * 1.5;
        console.log(`Weakness Found!`);
      }
    }

    for (let i = 0; i < target.resistances.length; i++) {
      if (target.resistances[i] === damageType) {
        value = value * 0.5;
        console.log(`Resistance Found!`);
      }
    }
  }

  if (change === "HEAL") {
    //
  }

  switch (target.identifier) {
    case "PLAYER":
      dispatch(playerActions.updateHealth({ change, value }));
      break;

    case "HERO":
      dispatch(heroActions.updateHealth({ id, change, value }));
      break;

    case "ENEMY":
      dispatch(dungeonActions.updateHealth({ id, change, value }));
      break;
  }
}
