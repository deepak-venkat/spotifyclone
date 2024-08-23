import { ProfileBox, LogoCont, Logo, Profile } from "./styledComponents";

const SideBar = () => {
  return (
    <ProfileBox>
      <LogoCont>
        <Logo />
        Spotify
      </LogoCont>
      <Profile
        src="https://imgtr.ee/images/2024/08/10/d379f49591898f84dde499fb039ee62d.jpeg"
        alt="deepak venkat"
      />
    </ProfileBox>
  );
};

export default SideBar;
