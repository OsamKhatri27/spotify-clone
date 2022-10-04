import React from 'react';
import { ReactComponent as PlayIcon } from "../assets/svgs/playIcon.svg";
import { playlistsData } from '../resource/Data';

import {Link} from 'react-router-dom'


function PlayList({categoryID}) {

    const renderPlaylist=()=>{
        console.log("inside Playlist");
        let relatedPlaylist= playlistsData.filter(playlist=>playlist.category_id===categoryID);
        console.log(relatedPlaylist)
        return (
          
               relatedPlaylist.map((playlistObj,index)=>{
                   return (

                     <div key={index} className="card" >
                     
                       <Link to={'/songlist/'+playlistObj.id}>
                         <div>
                            <div className="cardImage">
                            <img src={playlistObj.img} alt="Pic 1" />
                            </div>
                            <div className="cardContent">
                            <h3>{playlistObj.name}</h3>
                            <span>{playlistObj.desc}</span>
                            </div>
                            <span className="playIcon1">
                            <PlayIcon />
                            </span>
                       </div>   
                       </Link>
                    </div>                              
                   )
               })
        )
    }
    return (renderPlaylist());
}

export default PlayList;