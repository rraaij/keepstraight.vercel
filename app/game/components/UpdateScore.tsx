"use client";

import { FC } from "react";
import { ScoreUpdateInfo } from "@/models/game.model";
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";

const UpdateScore: FC<{
  cancelUpdate: () => void;
  updateScore: (info: ScoreUpdateInfo) => void;
}> = (props) => {
  // const gameInfo = useAppSelector(selectGameInfo);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ScoreUpdateInfo>({
    defaultValues: {
      ballsOnTable: 15, // gameInfo.possibleRun < 15 ? gameInfo.possibleRun : 15,
      endedInFoul: false,
    },
  });

  // todo: make this component appear in an animation (slide up)
  return (
    <div className="flex justify-center bg-blue-200 py-4">
      <div className="p-4 pt-8 w-96 flex flex-col self-center bg-white rounded-2xl">
        <form onSubmit={handleSubmit(props.updateScore)}>
          <div className="pb-3">
            {/*<Input*/}
            {/*  type="number"*/}
            {/*  label="Balls left on table"*/}
            {/*  {...register("ballsOnTable", {*/}
            {/*    required: true,*/}
            {/*    min: 2,*/}
            {/*    max: gameInfo.possibleRun < 15 ? gameInfo.possibleRun : 15,*/}
            {/*  })}*/}
            {/*/>*/}
            <p>input: Balls left on table</p>
            {errors.ballsOnTable &&
              (errors.ballsOnTable.type === "required" ||
                errors.ballsOnTable.type === "min" ||
                errors.ballsOnTable.type === "max") && (
                // <Typography variant="small" color="red">
                //   Enter a value between 2 and
                //   {gameInfo.possibleRun < 15 ? gameInfo.possibleRun : 15}.
                // </Typography>
                <p>Enter a value between 2 and 15</p>
              )}
          </div>
          <div className="flex justify-between">
            <p className="self-center">Did it end in a foul?</p>
            {/*<Radio*/}
            {/*  id="endInFoulYes"*/}
            {/*  label="Yes"*/}
            {/*  {...register("endedInFoul")}*/}
            {/*  value="true"*/}
            {/*/>*/}
            {/*<Radio*/}
            {/*  id="playerTwo"*/}
            {/*  label="No"*/}
            {/*  {...register("endedInFoul")}*/}
            {/*  value="false"*/}
            {/*  defaultChecked*/}
            {/*/>*/}
            <p>Radio Buttons: Yes / No</p>
          </div>
        </form>
        <div className="flex flex-row pt-4">
          <div className="flex-grow px-3">
            <Button type="button" onClick={props.cancelUpdate}>
              cancel
            </Button>
          </div>
          <div className="flex-grow px-3">
            <Button
              type="button"
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
