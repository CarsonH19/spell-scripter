import Tooltip from "../../UI/Tooltip";
import Item from "./Item";
import classes from "./InventoryModal.module.css";

export default function AttunedItem(obj) {
  const item = obj.item;
  const setCounts = obj.setCounts;
  let completeSet;
  let setPieces = 1;
  if (item.set && setCounts[item.set]) {
    setPieces = setCounts[item.set];
  }

  if (setPieces === 3) completeSet = true;

  return (
    <Tooltip
      key={item.id}
      position="item"
      title={item.name}
      text={item.rarity}
      detailOne={item.description}
      detailTwo={item.effect.map((line, index) => (
        <span key={index} className={classes["item-effect"]}>
          {line}
        </span>
      ))}
      detailThree={item.set ? `${item.set} ${setPieces}/3` : null}
      detailFour={
        item.setBonus
          ? item.setBonus.map((line, index) => (
              <span
                key={index}
                className={classes["item-effect"]}
                style={completeSet ? {} : { color: "rgb(97, 97, 97)" }}
              >
                {line}
              </span>
            ))
          : null
      }
    >
      <Item key={item.id} item={item} />
    </Tooltip>
  );
}
