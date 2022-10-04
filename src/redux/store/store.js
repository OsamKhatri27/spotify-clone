import { createStore, combineReducers, applyMiddleware } from 'redux'
import { playlistReduces } from '../reduces/playlistLikeDislike'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const rootReducer = combineReducers({
    likePlaylist:playlistReduces
})

const initialState={
    likePlaylist:[]
}

const store=createStore(rootReducer,initialState,composedEnhancer)

export default store;