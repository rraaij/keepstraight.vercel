"use client";

import { Button } from "primereact/button";
import { useGameStore } from "@/lib/game.store";
import { InputNumber } from "primereact/inputnumber";
import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { PlayerEnum } from "@/lib/game.model";
import { Card } from "primereact/card";

const UpdateScore = () => {
  // todo: make this component appear in an animation (slide up)

  const [ballsOnTable, setBallsOnTable] = useState<number>(2);
  const [endedInFoul, setEndedInFoul] = useState<boolean>(false);
  const { showUpdateScore, possibleRun, updateScore } = useGameStore(
    (state) => ({
      showUpdateScore: state.showUpdateScore,
      possibleRun: state.possibleRun,
      updateScore: state.updateScore,
    })
  );

  return (
    <div className="flex justify-center bg-blue-200">
      <div className="p-2 w-full flex flex-col justify-content-center">
        <Card className="px-3">
          <div className="flex justify-content-between">
            <p className="self-center">Balls left on table</p>
            <div className="p-inputgroup w-8rem">
              <Button
                icon="pi pi-plus"
                className="p-button-info"
                onClick={() => setBallsOnTable(ballsOnTable + 1)}
              />
              <InputNumber
                id={"balls-on-table"}
                className={"text-center"}
                value={ballsOnTable}
                min={2}
                max={possibleRun < 15 ? possibleRun : 15}
              />
              <Button
                icon="pi pi-minus"
                className="p-button-info"
                onClick={() => setBallsOnTable(ballsOnTable - 1)}
              />
            </div>
          </div>
          <div className="pt-3 flex justify-content-between">
            <p className="self-center">Did it end in a foul?</p>
            <div className="flex flex-wrap gap-3">
              <div className="flex align-items-center">
                <RadioButton
                  inputId="endInFoulYes"
                  name={"endInFoul"}
                  value={true}
                  onChange={(e) => setEndedInFoul(e.value)}
                  checked={endedInFoul}
                />
                <label htmlFor="endInFoulYes" className="ml-2">
                  Yes
                </label>
              </div>
              <div className="flex align-items-center">
                <RadioButton
                  inputId="endInFoulNo"
                  name={"endInFoul"}
                  value={false}
                  onChange={(e) => setEndedInFoul(e.value)}
                  checked={!endedInFoul}
                />
                <label htmlFor="endInFoulNo" className="ml-2">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-row pt-4">
            <div className="flex-grow px-3">
              <Button
                className={"w-full"}
                label={"cancel"}
                icon={"pi pi-times"}
                size={"large"}
                outlined
                severity={"secondary"}
                onClick={() => showUpdateScore(false)}
              />
            </div>
            <div className="flex-grow px-3">
              <Button
                className={"w-full"}
                label={"OKAY"}
                icon={"pi pi-check"}
                size={"large"}
                onClick={() => {
                  updateScore({ ballsOnTable, endedInFoul });
                  showUpdateScore(false);
                }}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default UpdateScore;
