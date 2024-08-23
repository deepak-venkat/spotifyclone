import styled from "styled-components";

export const SongCont = styled.li`
  background-color: transparent;
  margin-top: 15px;
  margin-bottom: 15px;
`;
export const Button = styled.button`
  height: 90px;
  width: 100%;
  background-color: ${(props) =>
    props.isActive ? "rgba(255, 255, 255, 0.1)" : "transparent"};
  border: 0px;
  border-radius: 6px;
  padding: 18px;
  cursor: pointer;
  outline: none;
  text-align: left;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 22px;
`;

export const NameCont = styled.div`
  width: 75%;
  margin-left: 15px;
  margin-bottom: -10px;
`;
export const Name = styled.p`
  color: #ffffff;
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 2px;
`;
export const Artist = styled.p`
  color: #ffffff;
  font-size: 15px;
  font-weight: 300;
  opacity: 0.5;
`;

export const Duration = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  margin: 5px;
  opacity: 0.5;
`;
