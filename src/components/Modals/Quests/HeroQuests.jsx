import classes from "./QuestsModal.module.css";

export default function HeroQuests({ quests }) {
  console.log(quests);
  return (
    <div className={classes["quest-list"]}>
      {quests.map((quest) => {
        if (quest.unlocked) {
          const questStyle = quest.finished
            ? classes["finished-quest"]
            : classes["active-quest"];

          return (
            <div className={`${classes.quest} ${questStyle}`}>
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
