import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import SideBarOption from './SideBarOption';
import { sidebarOptioins } from '../resource/sidebarOptionList';

const SideBar = (props) => {
  let {onAdd,FetchName}=props
  let [playlist,setPlaylist]=useState([])

  let ShowPlaylist=()=>{   
    return playlist.map((list)=>{
      return (
        <li key={list.name}>
        <Link onClick={e=>{FetchName(list.name)}}  to={`/create/${list.name}`}>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{list.name}
         </Link>
        </li>
      )
    
    })
  }
  let AddToPlaylist=(e)=>{
    let newplaylist=[...playlist, {
      name:"My Playlist#"+(playlist.length+1),
      value:[],
    }]
    setPlaylist(newplaylist)
      console.log(playlist);
   onAdd(newplaylist)
   
  }
 
  return (
   


    <div className="navBar">
   
    
 <div className='SideBar-options'>
 
  
<div className="Logo ">
 <i className="bi-1 bi-spotify mx-3 fs-3 pt-4"></i>
 <span className="fs-2 d-none d-lg-inline pt-4">Spotify</span>
 </div>


      <ul className='features'>
      <Link to="/home">
          <li >
          <i className="bi bi-house mx-2 fs-3 sideBarIcon" ></i>
           Home
          </li>
        </Link>
        <Link to="/search">
          <li >
          <i className="bi bi-search mx-2 fs-3 sideBarIcon" ></i>
           Search
          </li>
        </Link>
        <Link to="/your-library">
          <li >
          <i className="bi bi-music-note-list mx-2 fs-3 sideBarIcon" ></i>
           Your Library
          </li>
        </Link>

      <Link to="/create-playlist">
      <li onClick={e=>{AddToPlaylist(e)}} >
      <i className="bi bi-plus-circle mx-2 fs-3 sideBarIcon" ></i>
      Create PlayList
      </li>
    </Link>
        <Link to="/likedsongs">
          <li >
          <i className="bi bi-heart-fill mx-2 fs-3 sideBarIcon" ></i>
           Liked Songs
          </li>
        </Link>
        
      
        
      </ul>

     </div> 
      <div className='Playlist-Name'>
      <ul>
      {ShowPlaylist()}
      </ul>
      </div>
    
    </div>
    
    
    
   
  )
}

export default SideBar