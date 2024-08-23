import styled from "styled-components";

export const SongsBox = styled.div`
  width: 30vw;
  min-height: 100vh;
  top: 40px;
  left: 280px;
  gap: 0px;
  opacity: 0px;
  @media screen and (max-width: 767px) {
    width: 100%;
    order: 1;
  }
`;
export const SelectText = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    margin-top: 15px;
  }
`;

export const Text = styled.a`
  text-decoration: none;
  font-size: 24px;
  color: ${(props) => (props.active ? "#ffffff" : "inherit")};
  font-weight: 700;
  margin-bottom: 32px;
  margin-right: 25px;
  cursor: pointer;
`;

export const ListCont = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const SpinnerCont = styled.div`
  height: 80vh;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    height: 50vh;
  }
`;
export const EmptyViewCont = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    height: 50vh;
  }
`;
export const EmptyView = styled.p`
  color: #ffffff;
  font-size: 15px;
  text-align: center;
`;
