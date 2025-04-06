import React, { useContext } from "react";
import { Sidebar } from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Routes>
          <Route path="/*" element={<Display />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
      <audio ref={audioRef} src={track?.file} preload="auto" />
      <Player />
    </div>
  );
};

export default App;
