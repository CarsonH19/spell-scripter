import classes from "./PlayerColumn.module.css";

import { uiActions } from "../../../store/ui-slice";
import Tooltip from "../../UI/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandFist,
  faPersonRunning,
  faHatWizard,
  faCaretLeft,
  faCaretRight,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

import { playerActions } from "../../../store/player-slice";
import updateStatTotals from "../../../store/stats-actions";

import { useDispatch, useSelector } from "react-redux";

export default function Attributes() {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.player);

  const handleChangeAttribute = (change, attribute) => {
    dispatch(playerActions.changeAttributes({ change, attribute }));
    updateStatTotals(dispatch, "Player");
  };
  return (
        <div className={classes["attributes-container"]}>
          <Tooltip
            title={"What are Attributes?"}
            container={"attributes-info-container"}
            position={"attributes-info"}
            detailOne={
              "Attributes determine your stats within the dungeon. Using points you can decide which stats you'd like to upgrade. Acquire more attribute points by reaching higher levels."
            }
          >
            <FontAwesomeIcon
              icon={faCircleInfo}
              className={classes["attributes-info-icon"]}
            />
          </Tooltip>
          <h4>Attribute Points: {player.attributePoints}</h4>

          <div className={classes.stats}>
            <div className={classes.attribute}>
              <FontAwesomeIcon
                icon={faCaretLeft}
                className={classes["arrow-icon"]}
                onClick={() => handleChangeAttribute("DECREASE", "STRENGTH")}
              />

              <Tooltip
                title={"Strength Attribute:"}
                detailOne={
                  "Strength determines your Max HP, HP Regeneration, and Attack."
                }
              >
                <FontAwesomeIcon
                  icon={faHandFist}
                  className={classes["attribute-icon"]}
                />
              </Tooltip>
              <FontAwesomeIcon
                icon={faCaretRight}
                className={classes["arrow-icon"]}
                onClick={() => handleChangeAttribute("INCREASE", "STRENGTH")}
              />
            </div>
            <p>{player.stats.baseStrength}</p>
            <p>Max HP: {player.stats.strength.maxHealth}</p>
            <p>
              Attack: {Math.floor(player.stats.strength.attack / 2)} -{" "}
              {player.stats.strength.attack}
            </p>
            <p>HP Regeneration: {player.stats.strength.healthRegen}</p>
          </div>

          <div className={classes.stats}>
            <div className={classes.attribute}>
              <FontAwesomeIcon
                icon={faCaretLeft}
                className={classes["arrow-icon"]}
                onClick={() => handleChangeAttribute("DECREASE", "AGILITY")}
              />
              <Tooltip
                title={"Agility Attribute:"}
                detailOne={
                  "Agility determines your Defense, Hit Chance, and Speed."
                }
              >
                <FontAwesomeIcon
                  icon={faPersonRunning}
                  className={classes["attribute-icon"]}
                />
              </Tooltip>
              <FontAwesomeIcon
                icon={faCaretRight}
                className={classes["arrow-icon"]}
                onClick={() => handleChangeAttribute("INCREASE", "AGILITY")}
              />
            </div>
            <p>{player.stats.baseAgility}</p>
            <p>Defense: {player.stats.agility.defense}</p>
            <p>Hit Chance Bonus: +{player.stats.agility.hitChance}</p>
            <p>Speed Bonus: +{player.stats.agility.speed}</p>
          </div>

          <div className={classes.stats}>
            <div className={classes.attribute}>
              <FontAwesomeIcon
                icon={faCaretLeft}
                className={classes["arrow-icon"]}
                onClick={() => handleChangeAttribute("DECREASE", "ARCANA")}
              />
              <Tooltip
                title={"Arcana Attribute:"}
                detailOne={
                  "Arcana determines your Max MP, MP Regeneration, and Spell Power."
                }
              >
                <FontAwesomeIcon
                  icon={faHatWizard}
                  className={classes["attribute-icon"]}
                />
              </Tooltip>
              <FontAwesomeIcon
                icon={faCaretRight}
                className={classes["arrow-icon"]}
                onClick={() => handleChangeAttribute("INCREASE", "ARCANA")}
              />
            </div>
            <p>{player.stats.baseArcana}</p>
            <p>Max MP: {player.stats.arcana.maxMana}</p>
            <p>Spell Power: {player.stats.arcana.spellPower}</p>
            <p>MP Regeneration: {player.stats.arcana.manaRegen}</p>
          </div>
        </div>
  );
}
