import styled from "styled-components";
import AudioPlayer from "react-h5-audio-player";

export const Player = styled(AudioPlayer)`
  background-color: transparent;
  width: 34vw;
  margin-top: 15px;
  margin-left: -12px;
  @media screen and (max-width: 767px) {
    width: 98%;
  }
`;
