import styled from "styled-components";

export const PlayerCont = styled.div`
  margin-left: 10vw;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    margin-left: 4vw;
    order: 0;
  }
`;

export const Head = styled.h2`
  color: #ffffff;
  font-weight: 700;
  font-size: 35px;
  margin-bottom: 10px;
  @media screen and (max-width: 767px) {
    font-size: 30px;
    margin-bottom: 8px;
  }
`;

export const Artist = styled.p`
  color: #ffffff;
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 30px;
  opacity: 0.5;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const Img = styled.img`
  height: 500px;
  width: 32vw;
  border-radius: 15px;
  @media screen and (max-width: 767px) {
    height: 400px;
    width: 95%;
  }
`;

export const SpinnerCont = styled.div`
  width: 32vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10vw;
  margin-top: 60px;
  @media screen and (max-width: 767px) {
    width: 95%;
    height: 50vh;
  }
`;
