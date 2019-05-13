import React from 'react';
import styled from 'styled-components';
import MenuItem from './menuItem';

const StyledSideBar = styled.div`
  width: 20%;
  background: linear-gradient(180deg, #dfd5fa 0%, #d6d0f4 100%);
`;
const ProfileDiv = styled.div`
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const StyledImg = styled.img`
  width: 48px;
  height: 48px;
  text-align: center;
  object-fit: cover;
  margin-top: 20%;
`;
const StyledTypography = styled.div``;
const NameAndIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 4%;
`;
const StyledI = styled.i`
  margin-left: 20px;
  opacity: 0.7;
`;
const SideBar = () => (
  <StyledSideBar>
    <ProfileDiv>
      <StyledImg src="/images/male.png" />
      <NameAndIconWrapper>
        <StyledTypography>Naredner Saini </StyledTypography>
        <StyledI className="fas fa-chevron-down" />
      </NameAndIconWrapper>
    </ProfileDiv>
    <MenuItem />
  </StyledSideBar>
);
export default SideBar;
