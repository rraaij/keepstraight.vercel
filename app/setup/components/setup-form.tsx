"use client";

import React from "react";
import { PlayerEnum, SetupInfo } from "@/models/game.model";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";

const SetupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SetupInfo>({
    defaultValues: {
      playerOne: "Speler 1",
      playerTwo: "Speler 2",
      targetScore: 50,
      startingPlayer: PlayerEnum.PLAYER_TWO,
    },
  });

  const start = (setupInfo: SetupInfo) => {
    console.log(">>> Submitting:", setupInfo);
    // dispatch(startGame(setupInfo));
    // navigate("/game", { replace: true });
  };

  return (
    <>
      <form onSubmit={handleSubmit(start)}>
        <div className="pb-3">
          <InputText
            placeholder="Player One"
            {...register("playerOne", {
              required: true,
              minLength: 3,
              maxLength: 10,
            })}
          />
          {/*{errors.playerOne &&*/}
          {/*  (errors.playerOne.type === "required" ||*/}
          {/*    errors.playerOne.type === "minLength" ||*/}
          {/*    errors.playerOne.type === "maxLength") && (*/}
          {/*    <Typography variant="small" color="red">*/}
          {/*      Player One needs a name (between 3 and 10 chars)*/}
          {/*    </Typography>*/}
          {/*  )}*/}
        </div>
        <div className="pb-3">
          <InputText
            placeholder="Player Two"
            {...register("playerTwo", {
              required: true,
              minLength: 3,
              maxLength: 10,
            })}
          />
          {/*{errors.playerTwo &&*/}
          {/*  (errors.playerTwo.type === "required" ||*/}
          {/*    errors.playerTwo.type === "minLength" ||*/}
          {/*    errors.playerTwo.type === "maxLength") && (*/}
          {/*    <Typography variant="small" color="red">*/}
          {/*      Player Two needs a name (between 3 and 10 chars)*/}
          {/*    </Typography>*/}
          {/*  )}*/}
        </div>
        <div className="pb-3">
          <InputText
            {...register("targetScore", {
              required: true,
              min: 30,
              max: 1000,
            })}
          />
          {/*{errors.targetScore &&*/}
          {/*  (errors.targetScore.type === "required" ||*/}
          {/*    errors.targetScore.type === "min" ||*/}
          {/*    errors.targetScore.type === "max") && (*/}
          {/*    <Typography variant="small" color="red">*/}
          {/*      Must have a target score (between 30 and 1000)*/}
          {/*    </Typography>*/}
          {/*  )}*/}
          <p>Input Target Score</p>
        </div>
        <div className="flex justify-content-between">
          <p className="self-center">Who Starts?</p>

          <div className="flex flex-wrap gap-3">
            <div className="flex align-items-center">
              <RadioButton
                inputId="player1"
                {...register("startingPlayer")}
                name={PlayerEnum.PLAYER_ONE}
                value={PlayerEnum.PLAYER_ONE}
                // checked={startingPlayer === PlayerEnum.PLAYER_ONE}
              />
              <label htmlFor="player1" className="ml-2">
                {PlayerEnum.PLAYER_ONE}
              </label>
            </div>
            <div className="flex align-items-center">
              <RadioButton
                inputId="player2"
                {...register("startingPlayer")}
                name={PlayerEnum.PLAYER_TWO}
                value={PlayerEnum.PLAYER_TWO}
                // checked={startingPlayer === PlayerEnum.PLAYER_TWO}
              />
              <label htmlFor="player2" className="ml-2">
                {PlayerEnum.PLAYER_TWO}
              </label>
            </div>
          </div>
        </div>
      </form>
      <div className="pt-4">
        <Button onClick={handleSubmit(start)}>
          <div className="flex flex-row justify-content-between">
            <span className="text-sm">Start Game</span>
          </div>
        </Button>
      </div>
    </>
  );
};

export default SetupForm;
