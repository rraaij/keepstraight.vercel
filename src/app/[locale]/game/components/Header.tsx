"use client";

import Link from "next/link";
import LanguageSelector from "@/components/language-selector";
import { PlayerEnum } from "@/lib/game.model";
import { useGameStore } from "@/lib/game.store";
import { shallow } from "zustand/shallow";

const Header = () => {
  const { setupInfo } = useGameStore(
    (state) => ({ setupInfo: state.setup }),
    shallow
  );

  return (
    <div className="flex flex-row justify-content-between py-4 px-3">
      <Link href={"/setup"}>To Setup</Link>
      <LanguageSelector />
      <div className="text-right">
        <p>
          target score: <strong>{setupInfo.targetScore}</strong>
        </p>
        <p>
          starting player:{" "}
          <strong>
            {setupInfo.startingPlayer === PlayerEnum.PLAYER_ONE
              ? setupInfo.playerOne
              : setupInfo.playerTwo}
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Header;
