import React from "react";
import {} from "../assets/assets";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Search from "./Search";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <SlArrowLeft
            size={25}
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
          />
          <SlArrowRight
            size={25}
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
            Install App
          </p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            T
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl">All</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
          Podcasts
        </p>
        <Link to="/search" className="text-white hover:text-green-400">
          Search
        </Link>
        <div className="bg-black text-white flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">🎵 My Music Player</h1>
          <Search /> {/* Boom! Add the search bar here */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
