import classes from "./QuestsModal.module.css";

export default function HeroQuests({ quests }) {
  return (
    <div className={classes["quest-list"]}>
      {quests.map((quest, index) => {
        if (quest.unlocked) {
          const questStyle = quest.finished
            ? classes["finished-quest"]
            : classes["active-quest"];

          return (
            <div key={index} className={`${classes.quest} ${questStyle}`}>
              <h3>{quest.name}</h3>
              <p>{quest.description}</p>
              <p>
                {quest.progress} / {quest.completion}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}
