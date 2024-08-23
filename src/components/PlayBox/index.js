import { SpinnerCont, PlayerCont, Head, Artist, Img } from "./styledComponents";
import { useContext } from "react";
import { Spinner } from "react-bootstrap";
import SongContext from "../../context/SongContext";
import AudioPlayer from "../AudioPlayer";

const Player = () => {
  const { activeSong, isLoading } = useContext(SongContext);
  const { name, artist, cover, url, top_track } = activeSong;
  return isLoading ? (
    <SpinnerCont>
      <Spinner
        animation="border"
        role="status"
        style={{
          width: "100px",
          height: "100px",
          borderWidth: "10px",
          color: "#ffffff",
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </SpinnerCont>
  ) : (
    <PlayerCont>
      <Head>{name}</Head>
      <Artist>{artist}</Artist>
      <Img src={`https://cms.samespace.com/assets/${cover}`} alt={name} />
      <AudioPlayer audioSrc={url} top_track={top_track} />
    </PlayerCont>
  );
};

export default Player;
