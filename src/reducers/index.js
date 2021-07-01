import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Maula mere maula",
      duration: "5:05"
    },
    {
      title: "Pyar ka panchnama",
      duration: "2:23"
    },
    {
      title: "Dil hazoori",
      duration: "2:45"
    },
    {
      title: "Peaches",
      duration: "3:34"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
