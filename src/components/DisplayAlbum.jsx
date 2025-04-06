import React, { useEffect, useState, useContext } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { SlSocialSpotify } from "react-icons/sl";
import { PlayerContext } from "../context/PlayerContext";
import { fetchAlbumById } from "../api/deezerApi";

const DisplayAlbum = () => {
  const { id } = useParams(); // Album ID from URL
  const { playWithId } = useContext(PlayerContext);
  const [albumData, setAlbumData] = useState(null);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const getAlbum = async () => {
      const data = await fetchAlbumById(id);
      if (data) {
        setAlbumData(data);
        setTracks(data.tracks.data); // Deezer returns tracks like this
      }
    };
    getAlbum();
  }, [id]);

  if (!albumData) {
    return <div className="text-white p-4">Loading album...</div>;
  }

  return (
    <div className="text-white p-4">
      <NavBar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img
          className="w-48 rounded"
          src={albumData.cover_medium}
          alt={albumData.title}
        />
        <div className="flex flex-col">
          <p>Album</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.title}
          </h2>
          <h4>{albumData.artist.name}</h4>
          <p className="mt-1 text-sm text-gray-400">
            <SlSocialSpotify className="inline-block w-5" />
            <b> Deezer</b> • {albumData.fans.toLocaleString()} likes •{" "}
            <b>{tracks.length} songs</b>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Artist</p>
        <p className="hidden sm:block">Duration</p>
        <FaRegClock className="m-auto w-4" />
      </div>
      <hr className="border-gray-700 mb-2" />

      {tracks.map((track, index) => (
        <div
          key={track.id}
          onClick={() => playWithId(track.id)} // Only works if you've set it up for Deezer track
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff1a] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img
              className="inline w-10 mr-5"
              src={track.album.cover_small}
              alt={track.title}
            />
            {track.title}
          </p>
          <p className="text-[15px]">{track.artist.name}</p>
          <p className="text-[15px] hidden sm:block">
            {(track.duration / 60).toFixed(2)} mins
          </p>
          <p className="text-[15px] text-center">{track.rank}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayAlbum;
