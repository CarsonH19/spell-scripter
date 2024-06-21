import classes from "./TomesModal.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import { tomeActions } from "../../../store/tome-slice";

import TomeQuestion from "./TomeQuestion";
import TomeText from "./TomeText";
import CodeEditor from "../../CodeEditor/CodeEditor";

export default function TomesModal({ tome }) {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const tomes = useSelector((state) => state.tome);

  const handleNextPage = () => {
    if (index < tome.lesson.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevPage = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  // const handleSelectAnswer = (answer) => {
  //   if (answer === tome.lesson[index].answer[0]) {
  //   }
  // };

  const handleComplete = () => {
    // Finding the tome's index in the state slice array
    for (let i = 0; i < tomes.length; i++) {
      if (tomes[i].name === tome.name) {
        dispatch(tomeActions.complete(i));
      }
    }

    dispatch(uiActions.toggle({ modal: "modalIsVisible" })); // set to false
  };

  let pageContent;

  switch (tome.lesson[index].type) {
    case "INFO":
      pageContent = (
        <div className={classes.content}>
          <h2>{tome.lesson[index].title}</h2>
          <TomeText text={tome.lesson[index].text} />
          <CodeEditor code={tome.lesson[index].code} />
        </div>
      );
      break;

    case "QUESTION":
      pageContent = (
        <div className={classes.content}>
          <h3>{tome.lesson[index].question}</h3>
          <TomeQuestion answers={tome.lesson[index].answers} />
        </div>
      );
      break;

    case "SUMMARY":
      pageContent = (
        <>
          <div className={classes.content}>
            <h2>Summary</h2>
            <ul>
              {tome.lesson[index].listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <button onClick={handleComplete}>Complete</button>
        </>
      );
      break;
  }

  return (
    <div className={classes.tomesModal}>
      <h1>{tome.name}</h1>
      {pageContent}
      <div className={classes["page-footer"]}>
        <FontAwesomeIcon
          icon={faAnglesLeft}
          onClick={handlePrevPage}
          className={classes.arrow}
        />
        <p className={classes["page-counter"]}>
          {tome.lesson[index].page} / {tome.lesson.length}
        </p>
        <FontAwesomeIcon
          icon={faAnglesRight}
          onClick={handleNextPage}
          className={classes.arrow}
        />
      </div>
    </div>
  );
}
