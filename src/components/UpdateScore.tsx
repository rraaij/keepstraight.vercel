import React, { FC } from "react";
import { Button, Input, Radio, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { ScoreUpdateInfo } from "../models/game.model";
import { useAppSelector } from "../store/store";
import { selectGameInfo } from "../store/game-slice";

const UpdateScore: FC<{
  cancelUpdate: () => void;
  updateScore: (info: ScoreUpdateInfo) => void;
}> = (props) => {
  const gameInfo = useAppSelector(selectGameInfo);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ScoreUpdateInfo>({
    defaultValues: {
      ballsOnTable: gameInfo.possibleRun < 15 ? gameInfo.possibleRun : 15,
      endedInFoul: false,
    },
  });

  // todo: make this component appear in an animation (slide up)
  return (
    <div className="flex justify-center bg-blue-200 py-4">
      <div className="p-4 pt-8 w-96 flex flex-col self-center bg-white rounded-2xl">
        <form onSubmit={handleSubmit(props.updateScore)}>
          <div className="pb-3">
            <Input
              type="number"
              label="Balls left on table"
              {...register("ballsOnTable", {
                required: true,
                min: 2,
                max: gameInfo.possibleRun < 15 ? gameInfo.possibleRun : 15,
              })}
            />
            {errors.ballsOnTable &&
              (errors.ballsOnTable.type === "required" ||
                errors.ballsOnTable.type === "min" ||
                errors.ballsOnTable.type === "max") && (
                <Typography variant="small" color="red">
                  Enter a value between 2 and
                  {gameInfo.possibleRun < 15 ? gameInfo.possibleRun : 15}.
                </Typography>
              )}
          </div>
          <div className="flex justify-between">
            <p className="self-center">Did it end in a foul?</p>
            <Radio
              id="endInFoulYes"
              label="Yes"
              {...register("endedInFoul")}
              value="true"
            />
            <Radio
              id="playerTwo"
              label="No"
              {...register("endedInFoul")}
              value="false"
              defaultChecked
            />
          </div>
        </form>
        <div className="flex flex-row pt-4">
          <div className="flex-grow px-3">
            <Button
              type="button"
              variant="filled"
              size="lg"
              fullWidth
              onClick={props.cancelUpdate}
            >
              cancel
            </Button>
          </div>
          <div className="flex-grow px-3">
            <Button
              type="button"
              variant="filled"
              size="lg"
              fullWidth
              color="red"
              onClick={handleSubmit(props.updateScore)}
            >
              OKAY
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateScore;
