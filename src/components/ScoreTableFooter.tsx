import { Button } from "@material-tailwind/react";
import React, { FC } from "react";
import { selectSetupInfo } from "../store/setup-slice";
import { useAppSelector } from "../store/store";

const ScoreTableFooter: FC<{
  currentScores: number[];
  updateScoreHandler: () => void;
}> = (props) => {
  const setupInfo = useAppSelector(selectSetupInfo);

  return (
    <div className="text-center bg-blue-200 py-4">
      <div className="flex flex-row">
        <div className="flex-grow text-right pr-3 font-bold text-2xl">
          <p>{props.currentScores[0]}</p>
          <p></p>
        </div>
        <div className="flex-grow text-right pr-3 font-bold text-2xl">
          <p>{props.currentScores[1]}</p>
        </div>
      </div>
      <p>
        Possible Run:
        <span className="font-bold text-2xl pl-2">
          {setupInfo?.targetScore}
        </span>
      </p>
      <div className="flex flex-row pt-4">
        <div className="flex-grow px-3">
          <Button type="button" variant="filled" size="lg" fullWidth>
            rerack
          </Button>
        </div>
        <div className="flex-grow px-3">
          <Button
            type="button"
            variant="filled"
            size="lg"
            fullWidth
            color="red"
            onClick={props.updateScoreHandler}
          >
            update score
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ScoreTableFooter;
