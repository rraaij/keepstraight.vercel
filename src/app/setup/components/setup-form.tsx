"use client";

import React from "react";
import { PlayerEnum } from "@/models/game.model";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { useRouter } from "next/navigation";

const SetupForm = () => {
  const router = useRouter();
  return (
    <>
      <div className="pb-3">
        <InputText placeholder="Player One" />
      </div>
      <div className="pb-3">
        <InputText placeholder="Player Two" />
      </div>
      <div className="pb-3">
        <InputText placeholder={"targetscore"} />
        <p>Input Target Score</p>
      </div>
      <div className="flex justify-content-between">
        <p className="self-center">Who Starts?</p>

        <div className="flex flex-wrap gap-3">
          <div className="flex align-items-center">
            <RadioButton
              inputId="player1"
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
      <div className="pt-4">
        <Button onClick={() => router.push("/game")}>
          <div className="flex flex-row justify-content-between">
            <span className="text-sm">Start Game</span>
          </div>
        </Button>
      </div>
    </>
  );
};

export default SetupForm;
