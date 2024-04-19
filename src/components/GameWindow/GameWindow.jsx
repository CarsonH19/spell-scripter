import BottomContent from "./BottomContent/BottomContent";
import MiddleContent from "./MiddleContent/MiddleContent";
import TopContent from "./TopContent/TopContent";

export default function GameWindow() {
  return (
    <div>
      <TopContent />
      {/* TOP 20% Height */}
      

      <MiddleContent />
      {/* MIDDLE 55% Height */}
      {/* MIDDLE-LEFT CONTENT 35% - Ally Icons */}
      {/* MIDDLE-CENTER CONTENT 20% - Event Options*/}
      {/* MIDDLE-RIGHT CONTENT 35% - Enemy Icons */}

      <BottomContent />
      {/* BOTTOM 25% Height */}
      {/* BOTTOM-LEFT CONTENT 33% - Player Stats & Icon */}
      {/* BOTTOM-CENTER CONTENT 33% - Actions (Cast, Guard, Item, Flee )*/}
      {/* When Cast is selected these are replaced with a spell menu */}
      {/* BOTTOM-RIGHT-CONTENT 33% - Inv, Log, Stats, Tomes, Settings */}
    </div>
  );
}
