import React from "react";
import GameContextProvider from "./store/game-context";
import { Link, Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <GameContextProvider>
      <h1 className="text-3xl font-extrabold underline">Keepstraight</h1>
      <nav className="border-b pb-1">
        <Link to="/setup">Setup</Link> | <Link to="/game">Game</Link>
      </nav>
      <Outlet />
    </GameContextProvider>
  );
};

export default App;
