import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "../../../store/player-slice";

import store from "../../../store/index";

import Icon from "../../UI/Icon";

import activateItem from "../../../store/item-actions";
import { uiActions } from "../../../store/ui-slice";
import { setSelect } from "../../../store/combat-actions";

export default function Item({ item, count }) {
  const dispatch = useDispatch();
  const isDanger = useSelector((state) => state.dungeon.danger);

  const handleItemClick = (item) => {
    const isItemListOpen = store.getState().ui.itemListIsVisible;
    setSelect(item);

    // Call activateItem here when not in combat
    if (!isDanger) {
      activateItem(dispatch, item);
    }

    if (isItemListOpen) {
      dispatch(
        uiActions.changeUi({ element: "itemListIsVisible", visible: false })
      );
    }
  };

  return (
    <Icon
      onClick={() => handleItemClick(item)}
      style={{
        backgroundImage: `url(${item.image})`,
      }}
    >
      <span>{count > 1 ? `x${count}` : ""}</span>
    </Icon>
  );
}
