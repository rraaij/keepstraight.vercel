"use client";

import React, { useState } from "react";
import { PlayerEnum } from "@/models/game.model";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { useRouter } from "next/navigation";
import { Card } from "primereact/card";
import { InputNumber } from "primereact/inputnumber";
import { useGameStore } from "@/store/game.store";

const SetupForm = () => {
  const router = useRouter();

  /**
   * TODO https://dev.to/franklin030601/using-zustand-with-react-js-9di#3
   * see if I should use Zustand's 'shallow' functionality
   */
  const [playerOne, setPlayerOne] = useState<string>(
    useGameStore((state) => state.setup.playerOne)
  );
  const [playerTwo, setPlayerTwo] = useState<string>(
    useGameStore((state) => state.setup.playerTwo)
  );
  const [targetScore, setTargetScore] = useState<number>(
    useGameStore((state) => state.setup.targetScore)
  );
  const [startingPlayer, setStartingPlayer] = useState<PlayerEnum>(
    useGameStore((state) => state.setup.startingPlayer)
  );
  const startGame = useGameStore((state) => state.startGame);

  return (
    <div className="p-4 pt-8 w-96">
      <Card title={"Keepstraight - Game Setup"} className={"p-3"}>
        <div className="flex flex-column align-self-center">
          <div className="card">
            <div className="field">
              <label htmlFor="player-one">Player One</label>
              <InputText
                id={"player-one"}
                value={playerOne}
                className="text-base text-color surface-overlay surface-border border-round appearance-none outline-none w-full"
                onChange={(e) => setPlayerOne(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="player-two">Player Two</label>
              <InputText
                id={"player-two"}
                value={playerTwo}
                className="text-base text-color surface-overlay surface-border border-round appearance-none outline-none w-full"
                onChange={(e) => setPlayerTwo(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="target-score">Target Score</label>
              <div className="p-inputgroup">
                <Button
                  icon="pi pi-plus"
                  className="p-button-info"
                  onClick={() => setTargetScore(targetScore + 5)}
                />
                <InputNumber
                  id={"target-score"}
                  className={"text-center"}
                  value={targetScore}
                />
                <Button
                  icon="pi pi-minus"
                  className="p-button-info"
                  onClick={() => setTargetScore(targetScore - 5)}
                />
              </div>
            </div>
            <div className="flex justify-content-between">
              <p className="self-center">Who Starts?</p>
              <div className="flex flex-wrap gap-3">
                <div className="flex align-items-center">
                  <RadioButton
                    inputId="player1"
                    name={"selectStartingPlayer"}
                    value={PlayerEnum.PLAYER_ONE}
                    onChange={(e) => setStartingPlayer(e.value)}
                    checked={startingPlayer === PlayerEnum.PLAYER_ONE}
                  />
                  <label htmlFor="player1" className="ml-2">
                    {PlayerEnum.PLAYER_ONE}
                  </label>
                </div>
                <div className="flex align-items-center">
                  <RadioButton
                    inputId="player2"
                    name={"selectStartingPlayer"}
                    value={PlayerEnum.PLAYER_TWO}
                    onChange={(e) => setStartingPlayer(e.value)}
                    checked={startingPlayer === PlayerEnum.PLAYER_TWO}
                  />
                  <label htmlFor="player2" className="ml-2">
                    {PlayerEnum.PLAYER_TWO}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <Button
            className={"w-full"}
            label={"Start Game"}
            icon={"pi pi-check"}
            raised
            size={"large"}
            onClick={() => {
              startGame({
                playerOne,
                playerTwo,
                targetScore,
                startingPlayer,
              });
              router.push("/game");
            }}
          />
        </div>
      </Card>
    </div>
  );
};

export default SetupForm;
