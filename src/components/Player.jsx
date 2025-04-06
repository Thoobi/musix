import React, { useContext } from "react";

import { FaCirclePlay } from "react-icons/fa6";
import { RxTrackNext } from "react-icons/rx";
import { RxTrackPrevious } from "react-icons/rx";
import { SlLoop } from "react-icons/sl";
import { PiShuffleLight } from "react-icons/pi";
import { LuSquarePlay } from "react-icons/lu";
import { MdOutlinePause } from "react-icons/md";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { LuMonitorSpeaker } from "react-icons/lu";
import { TbVolume } from "react-icons/tb";
import { CgMiniPlayer } from "react-icons/cg";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);
  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <PiShuffleLight className="w-4 cursor-pointer" size={25} />

          <RxTrackPrevious
            onClick={previous}
            className="w-4 cursor-pointer"
            size={25}
          />

          {playStatus ? (
            <MdOutlinePause
              onClick={pause}
              className="cursor-pointer hover:text-gray-400"
              size={30}
            />
          ) : (
            <FaCirclePlay
              onClick={play}
              className="cursor-pointer hover:text-gray-400"
              size={30}
            />
          )}

          <RxTrackNext
            onClick={next}
            className="w-4 cursor-pointer"
            size={25}
          />
          <SlLoop className="w-4 cursor-pointer" size={25} />
        </div>
        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-80 bg-green-700 rounded-full"
            ></hr>
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <LuSquarePlay size={25} />
        <TbMicrophone2 size={25} />
        <HiOutlineQueueList size={25} />
        <LuMonitorSpeaker size={25} />
        <TbVolume size={25} />
        <div className="w-20 bg-slate-50 h-1 rounded" />
        <CgMiniPlayer size={25} />
        <MdOutlineZoomOutMap size={25} />
      </div>
    </div>
  );
};

export default Player;
