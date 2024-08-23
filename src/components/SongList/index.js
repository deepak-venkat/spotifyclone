import {
  SongsBox,
  SelectText,
  Text,
  ListCont,
  SpinnerCont,
  EmptyViewCont,
  EmptyView,
} from "./styledComponents";
import Spinner from "react-bootstrap/Spinner";
import SearchBar from "../SearchBar";
import SongItem from "../SongItem";
import SongContext from "../../context/SongContext";
import { useContext, useState, useEffect } from "react";

const tabList = {
  tab1: "For You",
  tab2: "Top Tracks",
};

const SongList = ({ setActiveSong }) => {
  const Context = useContext(SongContext);
  const { songsList, activeSong, isLoading } = Context;

  const [activeTab, setActiveTab] = useState(tabList.tab1);
  const [displayList, setDisplayList] = useState(songsList);
  const [filteredDisplayList, setFilteredDisplayList] = useState(songsList);

  const onChangeActive = (id) => {
    const activeSong = songsList.find((song) => song.id === id);
    setActiveSong(activeSong);
  };

  const onChangeSearch = (val) => {
    const searchValue = val.toLowerCase();
    if (searchValue === "") setFilteredDisplayList(displayList);
    else {
      const filteredList = displayList.filter(
        (song) =>
          song.name.toLowerCase().includes(searchValue) ||
          song.artist.toLowerCase().includes(searchValue)
      );
      setFilteredDisplayList(filteredList);
    }
  };

  const renderSpinner = () => (
    <SpinnerCont>
      <Spinner
        animation="border"
        role="status"
        style={{
          width: "50px",
          height: "50px",
          borderWidth: "6px",
          color: "#ffffff",
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </SpinnerCont>
  );

  const renderData = () => {
    if (!isLoading && filteredDisplayList.length === 0) {
      return (
        <EmptyViewCont>
          <EmptyView>No songs found</EmptyView>
        </EmptyViewCont>
      );
    }

    return (
      <ListCont>
        {filteredDisplayList.map((each) => (
          <SongItem
            key={each.id}
            data={each}
            isActive={each === activeSong}
            onChangeActive={onChangeActive}
          />
        ))}
      </ListCont>
    );
  };

  useEffect(() => {
    if (activeTab === tabList.tab1) {
      setDisplayList(songsList);
      setFilteredDisplayList(songsList);
    } else if (activeTab === tabList.tab2) {
      const topTracks = songsList.filter((song) => song.top_track);
      setDisplayList(topTracks);
      setFilteredDisplayList(topTracks);
    }
  }, [activeTab, songsList]);

  const onClickTab1 = () => setActiveTab(tabList.tab1);

  const onClickTab2 = () => setActiveTab(tabList.tab2);

  return (
    <SongsBox>
      <SelectText>
        <Text active={activeTab === tabList.tab1} onClick={onClickTab1}>
          For You
        </Text>{" "}
        <Text active={activeTab === tabList.tab2} onClick={onClickTab2}>
          Top Tracks
        </Text>{" "}
      </SelectText>
      <SearchBar onChangeSearch={onChangeSearch} />
      {isLoading ? renderSpinner() : renderData()}
    </SongsBox>
  );
};

export default SongList;
