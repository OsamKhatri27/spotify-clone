

export function createPlaylistReducer(state=[], action){
     let {type}=action

     switch(type){
         case 'CREATE_PLAYLIST': {
              let {newData}=action
              return [...state,newData]
         }


         case 'DELETE_PLAYLIST':{ 
              break;

         }

         default:
               return state;
     }
}