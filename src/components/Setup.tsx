import { FC } from "react";
import { useForm } from "react-hook-form";
import { GameSetup } from "../models/game";
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

const Setup: FC = () => {
  const { register } = useForm<GameSetup>();
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
            <Input size="md" label="Player One" />
            <Input size="md" label="Player Two" />
            <Input size="md" label="Target score" />
            <div className="flex gap-10">
              <p>Who Starts?</p>
              <Radio
                id="playerOne"
                name="startingPlayer"
                label="Player One"
                defaultChecked
              />
              <Radio id="playerTwo" name="startingPlayer" label="Player Two" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
              Start Game
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
export default Setup;
