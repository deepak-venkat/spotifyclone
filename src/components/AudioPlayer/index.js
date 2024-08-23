import { Player } from "./styledComponents";
import "react-h5-audio-player/lib/styles.css";
import "./index.css";

const AudioPlayer = ({ audioSrc }) => (
  <Player src={audioSrc} autoPlay controls />
);

export default AudioPlayer;
