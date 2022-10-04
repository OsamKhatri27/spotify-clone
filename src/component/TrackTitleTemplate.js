import React from 'react';
import '../App.css'
function TrackTitleTemplate(props) {
    let {length,Title,ClassName,Flag}=props
    console.log("inside title");
    return (
        <div className='d-flex' style={{backgroundColor:'#003366',fontFamily: 'circular-black'}}>
            <div className='TitleIcon'>
            <i className={ClassName} id="TitleIcon"></i>
            </div>
            <div className='TitleContainer'>
            <div className='TitleHeading'>PlayList</div>
            <div className='Title'>{Title}</div>
            <div className='UserDetails'>osam khatri{Flag==="likesongs"?<span><i className="fa-circle Circle" ></i>{length} Songs</span>:""}</div>
          
            </div>
        </div>
    );
}

export default TrackTitleTemplate;
/** {ClassName==="fa fa-music"?<div style={{fontSize:'3vh'}} onClick={e=>{onDelete(Title)}}><i className="fa fa-trash" style={{color:'White',fontSize:'4vh',margin:'1vh'}}></i>Delete Playlist</div>:""} 
 * 
 * {Flag==="createplaylist"?"":{length}} {Flag==="createplaylist"?"":"Songs"}
*/