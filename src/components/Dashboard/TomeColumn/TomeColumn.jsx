import classes from "./TomeColumn.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import Tooltip from "../../UI/Tooltip";

import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../../../store/ui-slice";

import { TOMES } from "../../../data/tomes";
import { openModal } from "../../../store/ui-actions";

export default function TomeColumn() {
  const dispatch = useDispatch();
  const tomeSlice = useSelector((state) => state.tome);
  const isModalOpen = useSelector((state) => state.ui.modalIsVisible);

  let masteryPoints = 0;
  for (let i = 0; i < tomeSlice.length; i++) {
    if (tomeSlice[i].mastered) {
      masteryPoints++;
    }
  }

  const handleOpenTome = (tome) => {
    // update the current open tome
    dispatch(uiActions.updateActiveTome(tome));
    // Open tome modal
    openModal(dispatch, "tomesModal");
  };

  return (
    <div className={classes.column}>
      <Tooltip
        title={"What Are Tomes?"}
        container={"tomes-info-container"}
        position={"tomes-info"}
        detailOne={
          "Study tomes to learn different JavaScript concepts to aid you in spell casting. By successfully casting spells within a dungeon you can master tomes and acquire mastery points."
        }
      >
        <FontAwesomeIcon
          icon={faCircleInfo}
          className={classes["tomes-info-icon"]}
        />
      </Tooltip>
      <h1>Tomes</h1>
      <div className={classes.tomes}>
        {tomeSlice.map((tome, index) => {
          const tomeInfo = TOMES[index];
          if (tome.unlocked) {
            const percentage = calculatePercentage(tome.questions);

            return (
              <div
                key={tome.name}
                className={classes.tome}
                onClick={() => handleOpenTome(tomeInfo)}
              >
                <h3>{tome.name}</h3>
                <div
                  className={classes.bar}
                  style={{
                    width: `${percentage}%`,
                  }}
                >
                  <div
                    className={classes.progress}
                    style={{
                      width: `${percentage}%`,
                    }}
                  ></div>
                  {/* <progress value={percentage} max="100"></progress> */}
                </div>
                {percentage === 100 ? <p>Mastered</p> : <p>{percentage}%</p>}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

function calculatePercentage(questionsArray) {
  let totalQuestions = 0;
  let answeredQuestions = 0;

  questionsArray.forEach((question) => {
    totalQuestions++;
    if (question.answered) {
      answeredQuestions++;
    }
  });

  return totalQuestions > 0
    ? Math.round((answeredQuestions / totalQuestions) * 100)
    : 0;
}
