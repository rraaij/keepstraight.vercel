"use client";

import { Button } from "primereact/button";

const UpdateScore = () => {
  // const gameInfo = useAppSelector(selectGameInfo);

  // todo: make this component appear in an animation (slide up)
  return (
    <div className="flex justify-center bg-blue-200 py-4">
      <div className="p-4 pt-8 w-96 flex flex-col self-center bg-white rounded-2xl">
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
        <div className="flex flex-row pt-4">
          <div className="flex-grow px-3">
            <Button type="button" onClick={() => {}}>
              cancel
            </Button>
          </div>
          <div className="flex-grow px-3">
            <Button
              type="button"
              color="red"
              onClick={() => console.log("submitScore")}
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
