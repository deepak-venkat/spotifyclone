import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

export const SearchCont = styled.div`
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 12px;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
`;

export const Input = styled.input`
  height: 40px;
  width: 85%;
  font-size: 20px;
  color: #ffffff;
  background-color: transparent;
  border: 0px;
  padding: 0;
  cursor: pointer;
  outline: none;
`;

export const SearchIcon = styled(IoSearch)`
  width: 15%;
  font-size: 30px;
  margin-top: 3px;
`;
