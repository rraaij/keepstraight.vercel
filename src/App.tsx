import React from "react";
import { Link, Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <h1>Keepstraight</h1>
      <nav>
        <Link to="/setup">Setup</Link> | <Link to="/game">Game</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default App;
