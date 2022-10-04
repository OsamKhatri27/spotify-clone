import React from 'react';
import { useState } from 'react';
import TrackListTemplate from '../TrackListTemplate';
import './PlaylistMenu.css'
function PlaylistMenu(props) {
    let {SearchList,OnAdd,Flag,Trackstyle}=props
    let [searchedData,setSearchedData]=useState([])
    let Search=(e)=>{
        let value=e.target.value;
        let newList=[]
        if(value!==""){
        newList= SearchList.filter((searchlist) => searchlist.song.startsWith(value))
        console.log("null");
        }
        setSearchedData(newList)
    }
    
    return (
        <div className='PlaylistMenu-Container'>
            <div className='Search'  style={Trackstyle}> 

            <input  onInput={e=>{Search(e)}} type="text" className="Search-text" placeholder="Search By Name" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
        
           {searchedData.length>0? <TrackListTemplate  Tracks={searchedData} Flag={Flag}  OnAdd={OnAdd} />:"No data"}
        </div>
    );
}

export default PlaylistMenu;

