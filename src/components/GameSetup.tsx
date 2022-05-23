import React from "react";
import { PlayerEnum, Setup } from "../models/game";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    HStack,
    Input,
    Radio,
    RadioGroup,
    VStack,
} from "@chakra-ui/react";
import { GrCaretNext } from "react-icons/gr";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { observer } from "mobx-react";
import store from "../store/store";

const GameSetup: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container py={10}>
      <Heading fontSize="3xl">Game Setup</Heading>
      <Formik
        initialValues={{
          playerOne: "",
          playerTwo: "",
          targetScore: 50,
          startingPlayer: PlayerEnum.PLAYER_ONE,
        }}
        validationSchema={Yup.object({
          playerOne: Yup.string().required(
            "A name for player one is required."
          ),
          playerTwo: Yup.string().required(
            "A name for player two is required."
          ),
          targetScore: Yup.number()
            .min(40, "That race is too short.")
            .max(250, "That race is too long.")
            .required("Targetscore is required."),
          startingPlayer: Yup.string().required("Someone has to start."),
        })}
        onSubmit={(setupInfo) => {
          store.startGame(setupInfo as Setup);
          navigate("/game", { replace: true });
        }}
      >
        {({ errors, touched, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl
                isInvalid={!!errors.playerOne && !!touched.playerOne}
              >
                <FormLabel htmlFor="player-one">Player One</FormLabel>
                <Field
                  as={Input}
                  type="text"
                  id="player-one"
                  name="playerOne"
                  variant="filled"
                  placeholder="player one"
                />
                {!!errors.playerOne && !!touched.playerOne ? (
                  <FormErrorMessage>{errors.playerOne}</FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl
                isInvalid={!!errors.playerTwo && !!touched.playerTwo}
              >
                <FormLabel htmlFor="player-two">Player Two</FormLabel>
                <Field
                  as={Input}
                  type="text"
                  id="player-two"
                  name="playerTwo"
                  variant="filled"
                  placeholder="player two"
                />
                {!!errors.playerTwo && !!touched.playerTwo ? (
                  <FormErrorMessage>{errors.playerTwo}</FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl
                isInvalid={!!errors.targetScore && !!touched.targetScore}
              >
                <FormLabel htmlFor="target-score">Target Score</FormLabel>
                <Field
                  as={Input}
                  type="number"
                  id="target-score"
                  name="targetScore"
                  variant="filled"
                  placeholder="target score"
                />
                {!!errors.targetScore && !!touched.targetScore ? (
                  <FormErrorMessage>{errors.targetScore}</FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl as="fieldset">
                <FormLabel>Starting player</FormLabel>
                <RadioGroup defaultValue={PlayerEnum.PLAYER_ONE}>
                  <HStack spacing="24px">
                    <Field
                      as={Radio}
                      id="player-one-starts"
                      name="startingPlayer"
                      value={PlayerEnum.PLAYER_ONE}
                    />
                    <FormLabel htmlFor="player-one-starts">
                      Player One
                    </FormLabel>
                    <Field
                      as={Radio}
                      id="player-two-starts"
                      name="startingPlayer"
                      value={PlayerEnum.PLAYER_TWO}
                    />
                    <FormLabel htmlFor="player-two-starts">
                      Player Two
                    </FormLabel>
                  </HStack>
                </RadioGroup>
              </FormControl>
              <Button
                type="submit"
                variant="solid"
                colorScheme="green"
                rightIcon={React.createElement(GrCaretNext)}
              >
                Start Game
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default observer(GameSetup);
