import { FC } from "react";
import { PlayerEnum } from "@/models/game.model";
import { Button } from "primereact/button";

const ScoreTableFooter: FC<{
  showScoreUpdate: () => void;
  rerack: () => void;
}> = ({ showScoreUpdate, rerack }) => {
  // const gameInfo = useAppSelector(selectGameInfo);

  const getCurrentScore = (player: PlayerEnum): number => {
    return 1;
    // useAppSelector((state) => selectCurrentScoreForPlayer(state, player));
  };

  return (
    <div className="text-center bg-blue-200 py-4">
      <div className="flex flex-row">
        <div className="flex-grow text-right pr-3 font-bold text-2xl">
          <p>{getCurrentScore(PlayerEnum.PLAYER_ONE)}</p>
          <p></p>
        </div>
        <div className="flex-grow text-right pr-3 font-bold text-2xl">
          <p>{getCurrentScore(PlayerEnum.PLAYER_TWO)}</p>
        </div>
      </div>
      <p>
        Possible Run:
        {/*<span className="font-bold text-2xl pl-2">{gameInfo?.possibleRun}</span>*/}
        <span className="font-bold text-2xl pl-2">50</span>
      </p>
      <div className="flex flex-row pt-4">
        <div className="flex-grow px-3">
          <Button type="button" onClick={rerack}>
            rerack
          </Button>
        </div>
        <div className="flex-grow px-3">
          <Button type="button" color="red" onClick={showScoreUpdate}>
            update score
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ScoreTableFooter;
