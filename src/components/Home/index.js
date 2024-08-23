import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "../SideBar";
import SongList from "../SongList";
import PlayBox from "../PlayBox";
import SongContext from "../../context/SongContext";
import { BgContainer } from "./styledComponents";

const Home = () => {
  const [songsList, setSongsList] = useState([]);
  const [activeSong, setActiveSong] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSongs = async () => {
      const response = await fetch("https://cms.samespace.com/items/songs");
      const dataObj = await response.json();
      setSongsList(dataObj.data);
      setActiveSong(dataObj.data[0]);
      setIsLoading(false);
    };
    getSongs();
  }, []);

  return (
    <SongContext.Provider value={{ songsList, activeSong, isLoading }}>
      <BgContainer bgCol={activeSong ? `${activeSong.accent}` : "black"}>
        <SideBar />
        <SongList setActiveSong={setActiveSong} />
        <PlayBox />
      </BgContainer>
    </SongContext.Provider>
  );
};

export default Home;
