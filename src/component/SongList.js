import React from "react";
import { ReactComponent as PlayIcon } from "../assets/svgs/play.svg";
import { ReactComponent as HeartIcon } from "../assets/svgs/heart.svg";
import { ReactComponent as NoteIcon } from "../assets/svgs/note.svg";
import { useSelector, useDispatch } from "react-redux";

import { playlistsData } from "../resource/Data";
import { tracks } from "../resource/Data";

import { useParams } from "react-router-dom";
import { playlistLikeDislike } from "../redux/actions/playlistLikeDislike";
import "../styles/songlist.css";

function SongList(props) {
  let { id } = useParams();
  let playlistId = Number.parseInt(id);
  let playlist = useSelector((state) => state.likePlaylist);
  let isLike = playlistId in playlist;
  let dispatch = useDispatch();

  const handleLikeDislike = (playlist,e) => {
    dispatch(playlistLikeDislike(playlist));
  };
  let color= isLike ? 'red' : 'white'
 

  const renderList = (id) => {
    let requireTracks = tracks.filter((track) => track.playlistId === id);
    return requireTracks.map((track, index) => {
      return (
        <li key={index}>
          <div className="songIcon">
            <NoteIcon className="noteI" />
            <PlayIcon className="playI" />
          </div>
          <div className="songDetails">
            <h3 className="text-white">{track.trackName}</h3>
            <span>description</span>
          </div>
          <div className="songSinger">
            <span className="text-white">{track.singer}</span>
          </div>
          <div className="songTime">
            <span className="text-white">{track.duration}</span>
          </div>
        </li>
      );
    });
  };

  const renderDetails = () => {
    console.log("render songlist");
    id = Number.parseInt(id);
    let requirePlaylistData = playlistsData.filter((item) => item.id === id);
    return requirePlaylistData.map((playlist, index) => {
      return (
        <div className="mainInner" key={index}>
          <div className="playlistPageInfo">
            <div className="playlistPageImage">
              <img src={playlist.img} alt="pic" />
            </div>
            <div className="playlistPageContent">
              <p className="text-white">Playlist</p>
              <h1 className="text-white">{playlist.name}</h1>

              <p className="text-white">{playlist.desc}</p>
              <div className="playlistPageDesc">
                <p className="spotify text-white">Spotify</p>
                <span className="text-white">699,428 likes</span>
                <span className="text-white">4hr 35 min</span>
              </div>
            </div>
          </div>
          <div className="playlistPageSongs">
            <div className="playlistButtons">
              <span className="playIcon">
                <PlayIcon />
              </span>
              <div className="icons">
                <div className="icon iconsHeart">
                  <HeartIcon
                    style={{ fill: `${color}` }}
                    onClick={(e) => handleLikeDislike(playlist,`${isLike}`)}  
                   
                  />
                </div>
                <div className="icon iconsDots"></div>
              </div>
            </div>

            <div className="row">
              <div className="col-8">
                <ul className="songList">
                  <li>
                    <div className="songIcon">
                      <i className="bi bi-hash text-white"></i>
                    </div>
                    <div className="songDetails">
                      <h3 className="text-white">TITLE</h3>
                    </div>
                    <div className="songSinger">
                      <span className="text-white">SINGER</span>
                    </div>
                    <div className="songTime">
                      <span className="text-white">DURATION</span>
                    </div>
                  </li>
                  {renderList(playlist.id)}
                </ul>
              </div>
              <div className="col-4">
                <h1 className="text-white mx-auto">ABOUT </h1>
                <p> This is description of playlist</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div className="playlistPage">{renderDetails()}</div>;
}

export default SongList;
