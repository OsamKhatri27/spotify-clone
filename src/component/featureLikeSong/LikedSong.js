import React, { useState } from 'react';
import TrackListTemplate from '../TrackListTemplate';
import TrackTitleTemplate from '../TrackTitleTemplate';

function LikedSongs(props) {
  console.log("inside liked song");
      let [Tracks,setData]=useState( [
        {
          id:'1',
          singer: "Amanraj Gill",
          videoname: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
          song:'Pajeb',
          date:'27-11-2021',
          duration:'2:30',
          image:'/assets/song1.jfif'
        },
        {
          id:'2',
          singer: "Amanrag Gill",
          videoname: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
          song:'7 gede',
          date:'2-08-2021',
          duration:'3:07',
          image:'/assets/song2.jfif'
        },
        {
          id:'3',
          singer: "Amanraj Gill",
          videoname: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
          song:'26 ka parcha',
          date:'07-1-2021',
          duration:'2:08',
          image:'/assets/song3.jfif'
        },
        {
          id:'4',
          singer: "ND Kundu",
          videoname: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
          song:'7janam',
          date:'12-06-2021',
          duration:'2:30',
          image:'/assets/song1.jfif'
        },
        {
          id:'5',
          singer: "Harry Dhanoa",
          videoname: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
          song:'suit',
          date:'22-5-2021',
          duration:'3:07',
          image:'/assets/song2.jfif'
        },
        {
          id:'6',
          singer: "Satbir Aujla",
          videoname: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
          song:'Khuda',
          date:'19-08-2021',
          duration:'2:08',
          image:'/assets/song3.jfif'
        },
      ])

    let DeleteSong=(e)=>{     
     setData( Tracks=Tracks.filter(track=>track.id!==e))
    }
    return (
        <div>
       
           
            <TrackTitleTemplate length={Tracks.length} Title="Liked Song" ClassName="fa fa-heart" Color='linear-gradient(to bottom right, #003366 29%, #ff99ff 100%)' Flag="likesongs"/>
            <TrackListTemplate Tracks={Tracks} onDelete={DeleteSong} Flag="likesongs"/>
{          /*  <PlayLikedSong  url={"https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"}/>*/
}
        </div>
    );
}

export default LikedSongs;
