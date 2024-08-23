import styled from "styled-components";

export const BgContainer = styled.div`
  background-image: ${(props) =>
    `linear-gradient(to right, ${props.bgCol}, black)`};
  background-color: black;
  font-family: Sans-Serif;
  min-height: 100vh;
  display: flex;
  padding: 32px 32px 0px 32px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
