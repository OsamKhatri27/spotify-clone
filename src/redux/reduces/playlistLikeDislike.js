
export function playlistReduces(state = [], action) {
  let { type } = action;
  switch (type) {
    case "LIKE_DISLIKE_PLAYLIST":
      let { playlist } = action;
      let data = playlist.id;

      if (data in state) {
        console.log("ifs");
        delete state[playlist.id];
        state = { ...state };
      } else {
        state = { ...state, [data]: playlist };
      }
      return state;
    default:
      return state;
  }
}
