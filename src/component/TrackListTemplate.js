import React, { useState } from 'react';
import PlaySongTemplate from './PlaySongTemplate';
import '../App.css'
function TrackListTemplate(props) {
  let {Tracks,onDelete,Flag,OnAdd}=props  
  console.log(Tracks);  
  let[CurrentTrack,SetTrack]=useState({
    id:'',
    song:'',
    videoname:'',
    url:'',
    image:''
  })
        let Delete=(track,e)=>{
          onDelete(track)
        }

        let PlaySong=(url,img,song,id,e)=>{
         SetTrack(CurrentTrack={id:id,song:song,videoname:url,image:img})
        }
        let AddSong=(url,img,song,id,singer,date)=>{
          console.log(img);
          OnAdd(url,img,song,id,singer,date)
          console.log(img.toString());
        }
  
        let renderPlaylist=()=>{
          return (
            Tracks.map((track)=>{
              console.log(track.image);
              return(
                <tr key={track.id} >
                <td  onClick={e=>PlaySong(track.videoname,track.image,track.song,track.id,e)}>
                    <img src={track.image} className='TrackPhoto' alt="" />&nbsp;&nbsp;{track.song}
                </td>
                <td  >{track.singer}</td>
                <td >{track.date}</td>
                {Flag==="likesongs"? <td ><i className="fa-heart LikeIcon" onClick={e=>Delete(track.id,e)}></i>{track.duration}</td>:""}
                {Flag==="createplaylist"? <td ><button className='btn btn-success w-10 m-3' onClick={e=>AddSong(track.videoname,track.image,track.song,track.id,track.singer,track.date)}>Add</button>{track.duration} min</td>:""}
                </tr>
              )
            } )
          )
        }
    return (
        <div className='TrackList-Container'>
      { Tracks.length>0? <table className='renderlist' >
        <thead>
          <tr>
            <th >Title</th>
            <th  >Album</th>
            <th >Date Added</th>
            {Flag==="createplaylist"?<th ><i className="fa-clock-o ClockIcon" ></i></th>:""}
          </tr>
          {renderPlaylist()}
        </thead>
        <tbody>
         
        </tbody>
      </table>:""}
      <PlaySongTemplate  CurrentSong={CurrentTrack} />

        </div>
    );
}

export default TrackListTemplate;
