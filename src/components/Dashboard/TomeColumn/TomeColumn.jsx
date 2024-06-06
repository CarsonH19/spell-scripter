import classes from "./TomeColumn.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../../../store/ui-slice";

export default function TomeColumn() {
  const dispatch = useDispatch();
  const tomeSlice = useSelector((state) => state.tome);
  // console.log(tomeSlice[0]);

  const handleOpenTome = (tome) => {
    // updateTome
    dispatch(uiActions.updateTome(tome));
    // Open tome modal
    dispatch(uiActions.toggle({ modal: "modalIsVisible" })); // set to true
    dispatch(uiActions.toggleModal({ modal: "tomesModal", open: "OPEN" }));
  };

  return (
    <div className={classes.column}>
      <h1>Tomes</h1>
      <p>Mastery Points: 0</p>
      <div className={classes.filter}>
        {/* Add a filter button logic */}
        <button>All</button>
        <button>Complete</button>
        <button>Incomplete</button>
      </div>
      <div className={classes.tomes}>
        {/* Map each tome into a div element  */}
        {tomeSlice.map((tome) => {
          if (tome.unlocked) {
            const percentage = calculatePercentage(tome.questions);
            let status;

            if (tome.complete) {
              status = (
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className={classes.complete}
                />
              );
            } else {
              status = (
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className={classes.incomplete}
                />
              );
            }
            return (
              <div
                key={tome.name}
                className={classes.tome}
                onClick={() => handleOpenTome(tome)}
              >
                <h3>{tome.name}</h3>
                {percentage === 100 && <p>Mastered</p>}
                <div>
                  <progress value={percentage} max="100"></progress>
                  <p>{percentage}%</p>
                </div>
                {status}
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
