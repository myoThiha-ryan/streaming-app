import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/frontend-assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Carts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((album, index) => (
            <AlbumItem
              key={index}
              name={album.name}
              id={album.id}
              desc={album.desc}
              image={album.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((song, index) => (
            <SongItem
              key={index}
              name={song.name}
              id={song.id}
              desc={song.desc}
              image={song.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
