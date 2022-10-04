import React from 'react'
import SideBar from './component/SideBar'
import Main from './component/Main'

import './App.css'
import { useState } from 'react/cjs/react.development'
import Navbar from './component/NavBar'

const App = () => {
  let [playlist,setPlaylist]=useState([])
  let [CurrentPlaylist,setCurrentPlaylist]=useState([])

  let AddPlaylist=(list)=>{
    setPlaylist(list)
     console.log(playlist);
  }

  let getName=(playlistname)=>{  
    console.log(playlist); 
    let newlist=playlist.filter(item=>item.name===playlistname)
    setCurrentPlaylist(newlist[0])
  }

  // let DeletePlaylist=(title)=>{
  //      setPlaylist(playlist.filter(item=>item.name!==title))  
  // }
  let AddSong=(url,img,song,id,singer,date)=>{
  // setCurrentPlaylist({name:CurrentPlaylist.name,value:[...CurrentPlaylist.value,{url:url,image:img,song:song,id:id}]})
  let newplaylist= playlist.map((item)=>{
     if(item.name===CurrentPlaylist.name)
     {
       return {...item,value:[...item.value,{url,img,song,id,singer,date}]}
     }
     else
     return item
   })
   setPlaylist(newplaylist)
  }
  return (
    <div className="outerWrap">
    <div className='App'>
    
    <div className={"row"}>
    <div className={"col-2 p-0"}>
        
    <SideBar onAdd={list=>{AddPlaylist(list)}}  FetchName={playlistname=>{getName(playlistname)}}/>
  
      
 </div>
 <div className={"col-10 p-0"}> 
    <Navbar/>
    <Main Playlist={playlist}  CurrentList={CurrentPlaylist.name} OnAdd={(url,img,song,id,singer,date)=>{AddSong(url,img,song,id,singer,date)}}  />
  
    
 </div>
    </div>
    
    </div>
       
    </div>
  )
}
export default App;
/**
 * 
 *[
   {name:play1,value:[{}{}]}
 ]
 * 
 */