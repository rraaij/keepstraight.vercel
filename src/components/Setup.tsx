import { FC } from "react";
import { useForm } from "react-hook-form";
import { SetupInfo, PlayerEnum } from "../models/game";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Radio,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import store from "../store/store";

const Setup: FC = () => {
  const navigate = useNavigate();
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

  const startGame = (setupInfo: SetupInfo) => {
    console.log(">>> Submitting:", setupInfo);
    store.startGame(setupInfo as SetupInfo);
    navigate("/game", { replace: true });
  };

  return (
    <>
      <div className="pt-8 w-full flex flex-row justify-center">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-12 place-items-center"
          >
            <Typography variant="h5" color="white">
              Game Setup
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <form onSubmit={handleSubmit(startGame)}>
              <div className="pb-3">
                <Input
                  type="text"
                  label="Player One"
                  {...register("playerOne", {
                    required: true,
                    minLength: 3,
                    maxLength: 10,
                  })}
                />
                {errors.playerOne &&
                  (errors.playerOne.type === "required" ||
                    errors.playerOne.type === "minLength" ||
                    errors.playerOne.type === "maxLength") && (
                    <Typography variant="small" color="red">
                      Player One needs a name (between 3 and 10 chars)
                    </Typography>
                  )}
              </div>
              <div className="pb-3">
                <Input
                  type="text"
                  label="Player Two"
                  {...register("playerTwo", {
                    required: true,
                    minLength: 3,
                    maxLength: 10,
                  })}
                />
                {errors.playerTwo &&
                  (errors.playerTwo.type === "required" ||
                    errors.playerTwo.type === "minLength" ||
                    errors.playerTwo.type === "maxLength") && (
                    <Typography variant="small" color="red">
                      Player Two needs a name (between 3 and 10 chars)
                    </Typography>
                  )}
              </div>
              <div className="pb-3">
                <Input
                  type="number"
                  label="Target score"
                  {...register("targetScore", {
                    required: true,
                    min: 30,
                    max: 1000,
                  })}
                />
                {errors.targetScore &&
                  (errors.targetScore.type === "required" ||
                    errors.targetScore.type === "min" ||
                    errors.targetScore.type === "max") && (
                    <Typography variant="small" color="red">
                      Must have a target score (between 30 and 1000)
                    </Typography>
                  )}
              </div>
              <div className="flex gap-10">
                <p>Who Starts?</p>
                <Radio
                  id="playerOne"
                  label="Player One"
                  {...register("startingPlayer")}
                  value={PlayerEnum.PLAYER_ONE}
                  defaultChecked
                />
                <Radio
                  id="playerTwo"
                  label="Player Two"
                  {...register("startingPlayer")}
                  value={PlayerEnum.PLAYER_TWO}
                />
              </div>
            </form>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              type="button"
              variant="gradient"
              fullWidth
              onClick={handleSubmit(startGame)}
            >
              Start Game
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
export default observer(Setup);
