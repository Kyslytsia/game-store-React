import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import GameInfo from "./components/GameInfo";
import AllGames from "./components/AllGames";
import { Routes, Route } from "react-router-dom";
import Account from "./components/Account";
import Favorites from "./components/Favorites";

function App() {
  const [gameName, setGameName] = useState("");

  function getGameName(name) {
    setGameName(name);
  }

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main getGameName={getGameName} />} />
        <Route path="/account" element={<Account to="/" />} />
        <Route
          path="/all-games"
          element={<AllGames getGameName={getGameName} />}
        />
        <Route path="/game-info" element={<GameInfo gameName={gameName} />} />
        <Route
          path="/favorites"
          element={<Favorites getGameName={getGameName} />}
        />
      </Routes>
    </>
  );
}

export default App;
