import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CreatePlaylist from './featureCreatePlaylist/CreatePlaylist'
import LikedSong from './featureLikeSong/LikedSong'
import SearchBar from "./SearchBar";
import CategoryList from "./CategoryList";
import { albumsData } from "../resource/Data";
import searchlist from '../SearchListData/SearchData'
import '../styles/Main.css'
import PlaylistMenu from './featureCreatePlaylist/PlaylistMenu';
import SongList from './SongList'
import MyLibrary from './MyLibrary'


const Main = (props) => {
  let {Playlist,CurrentList,OnAdd}=props   
  console.log(CurrentList);
  const Trackstyle = {
    backgroundColor:'#131313',
    marginTop: '2vh'
  }   
 
  return (
    <div className="main  mainContent">
        <Switch>
        <Route path={"/home"} render={() => <CategoryList categorys={albumsData} />}/>
        <Route path="/songlist/:id" component={SongList} />
        <Route path={"/search"} render={() =>  <PlaylistMenu SearchList={searchlist} OnAdd={OnAdd} Trackstyle={Trackstyle}  />} />
        <Route path={"/your-library"} component={MyLibrary} />
        <Route path="/create-playlist"><CreatePlaylist Title="My playlist#1"/></Route>
        <Route path="/likedsongs" component={LikedSong}></Route>
        <Route path="/create/:name">
        {CurrentList!==undefined ?<CreatePlaylist Playlist={Playlist} CurrentList={CurrentList} OnAdd={OnAdd} />:""}
        </Route>
        </Switch>
      </div>
  )
}

export default Main
