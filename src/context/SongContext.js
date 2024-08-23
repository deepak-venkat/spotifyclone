import { createContext } from "react";

const SongContext = createContext({
  songsList: [],
  activeSong: {},
  isLoading: true,
});

export default SongContext;
