import React from 'react';
import { useState } from 'react';
import TrackListTemplate from '../TrackListTemplate';
import TrackTitleTemplate from '../TrackTitleTemplate';
import PlaylistMenu from './PlaylistMenu';
import searchlist from '../../SearchListData/SearchData'
function CreatePlaylist(props) {
  let {CurrentList,OnAdd,Playlist}=props
  if(CurrentList!==undefined)
  console.log(Playlist);

let Currentlist=[]
if(Playlist!==undefined&&CurrentList!==undefined){
  Playlist.map((item)=>{
      if(item.name===CurrentList)
      {
        Currentlist.push(item.value)
      }
  })
}
console.log(Currentlist.length>0?Currentlist[0].value:"");

const Trackstyle = {
  backgroundColor:'#003366'
}    
  return (
    <div>
        <TrackTitleTemplate Title={CurrentList===undefined?"My Playlist#1":CurrentList} length={CurrentList===undefined?"0":CurrentList[0].value} Flag="createplaylist"  ClassName="fa fa-music"/> 
        {CurrentList===undefined?"":(Currentlist.length>0?<TrackListTemplate Tracks={Currentlist[0]}></TrackListTemplate>:"")}   
        <PlaylistMenu SearchList={searchlist} OnAdd={OnAdd} />
    </div>
  );
}

export default CreatePlaylist;
