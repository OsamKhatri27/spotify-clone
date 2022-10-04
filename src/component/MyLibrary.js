import React from 'react';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { ReactComponent as PlayIcon } from "../assets/svgs/playIcon.svg";

function MyLibrary(props) {
  
    const likePlaylistList= useSelector(state=>state.likePlaylist)

    const renderLibrary=()=>{
                
        const keys = Object.keys(likePlaylistList)
        console.log("Lenght, ",keys.length)
        return (
        keys.map((key, idx) => {
            const  requireData= likePlaylistList[key];
               return(
                <div key={idx} className="card" >
                <Link to={'/songlist/'+requireData.id}>
                  <div>
                     <div className="cardImage">
                     <img src={requireData.img} alt="Pic 1" />
                     </div>
                     <div className="cardContent">
                     <h3>{requireData.name}</h3>
                     <span>{requireData.desc}</span>
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

    return (
        <div className='outerWrapper'>

                <div  className="cardWrapper">
                    <div   className="cardsWrap" >
                        <h2>My Library</h2>
                        <div className="innerCardWrapper">
                                {
                                    renderLibrary() 
                                 }        
                        </div>
                    </div>
                </div>
            
        </div>
    );
}

export default MyLibrary;