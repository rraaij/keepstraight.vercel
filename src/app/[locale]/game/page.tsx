import Link from "next/link";
import { PlayerEnum } from "@/lib/game.model";
import ScoreTableHeader from "@/app/[locale]/game/components/ScoreTableHeader";
import ScoreTable from "@/app/[locale]/game/components/ScoreTable";
import ScoreTableFooter from "@/app/[locale]/game/components/ScoreTableFooter";
import Header from "@/app/[locale]/game/components/Header";

// export const revalidate = 0; // SSR, so no caching
//
// export async function generateMetaData() {}

const Game = () => {
  return (
    <div
      className={"flex flex-column h-screen bg-blue-200"}
      style={{ maxHeight: "-webkit-fill-available" }}
    >
      <Header />
      {/*TABLE HEADERS*/}
      <div className="flex flex-row flex-wrap justify-content-between align-items-stretch">
        <div
          style={{ width: "50%" }}
          className="p-2 bg-white border-x-1 border-blue-200 flex flex-column justify-content-end"
        >
          <ScoreTableHeader player={PlayerEnum.PLAYER_ONE} />
        </div>
        <div
          style={{ width: "50%" }}
          className="p-2 bg-white border-x-1 border-blue-200 flex flex-column justify-content-end"
        >
          <ScoreTableHeader player={PlayerEnum.PLAYER_TWO} />
        </div>
      </div>

      {/*TABLE CONTENTS*/}
      <div className="flex flex-row flex-grow-1 bg-white">
        <div style={{ width: "50%" }} className={"border-x-1 border-blue-200"}>
          <ScoreTable player={PlayerEnum.PLAYER_ONE} />
        </div>
        <div style={{ width: "50%" }} className={"border-x-1 border-blue-200"}>
          <ScoreTable player={PlayerEnum.PLAYER_TWO} />
        </div>
      </div>

      <div className={"mt-auto"}>
        <ScoreTableFooter />
      </div>
    </div>
  );
};

export default Game;
