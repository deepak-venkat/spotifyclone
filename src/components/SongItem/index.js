import {
  SongCont,
  Button,
  Image,
  NameCont,
  Name,
  Artist,
  Duration,
} from "./styledComponents";
import { useState, useEffect } from "react";

const SongItem = ({ data, isActive, onChangeActive }) => {
  const { id, name, artist, cover, url } = data;

  const [duration, setDuration] = useState("00:00");

  const getAudioDuration = (url) =>
    new Promise((resolve, reject) => {
      const audio = new Audio(url);
      audio.onloadedmetadata = () => resolve(audio.duration);
      audio.onerror = () => reject(new Error("Failed to load audio"));
    });

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const setAudioDuration = async (url) => {
      try {
        const duration = await getAudioDuration(url);
        setDuration(formatDuration(duration));
      } catch (error) {
        console.error("Error fetching audio duration:", error);
      }
    };

    setAudioDuration(url);
  }, [url]);

  return (
    <SongCont>
      <Button isActive={isActive} onClick={() => onChangeActive(id)}>
        <Image src={`https://cms.samespace.com/assets/${cover}`} alt="name" />
        <NameCont>
          <Name>{name}</Name>
          <Artist>{artist}</Artist>
        </NameCont>
        <Duration>{duration}</Duration>
      </Button>
    </SongCont>
  );
};

export default SongItem;
