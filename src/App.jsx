import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";

import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
      <Player />

      <Routes>
        <Route path="/search" element={<Search />} />
        {/* other routes */}
      </Routes>
    </div>
  );
};

export default App;
