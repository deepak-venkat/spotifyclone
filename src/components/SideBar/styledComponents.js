import { styled } from "styled-components";
import { FaSpotify } from "react-icons/fa";

export const ProfileBox = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const LogoCont = styled.span`
  width: 133.41px;
  height: 40px;
  padding: 0.47px 0.94px 0.12px 0.94px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  gap: 0px;
`;

export const Logo = styled(FaSpotify)`
  font-size: 35px;
  margin-right: 3px;
  margin-bottom: 3px;
`;

export const Profile = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;
