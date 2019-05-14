import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Users from '../chatList/user';

const Main = styled.div`
  margin-top: 10%;
  margin-left: 7%;
  width: 37%;
`;
const StyledTypography = styled.div`
  ${props => `
margin-left: 20px;
font-size: ${props.fontSize || 17}px;
font-weight: 400;
margin-top: ${props.marginTop || 0}px;
opacity: ${props.opacity || 1};
color:${props.color};
float: ${props.float};
`}
`;

const ProfileDiv = styled.div`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  margin-left: 15px;
`;

const StyledImg = styled.img`
  width: 48px;
  height: 48px;
  text-align: center;
  object-fit: cover;
`;

const ProfileWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const ChatHistory = styled.div`
  margin-top: 20%;
`;

const LeftAlign = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
const BackGround = styled.div`
  background: ${props => props.color};
  border-radius: 50px;
  padding: 5px 11px 5px 3px;
`;

const RightAlign = styled.div`
  float: right;
  margin-right: 20px;
`;

const StyledSearchBar = styled.input`
  height: 34px;
  background: #f7f3fe;
  border: 0px;
  outline: none;
  margin-left: 30px;
  border-radius: 25px;
  width: 100%;
`;
const StyledSearchBarWrapper = styled.div`
  background: #f7f3fe;
  box-shadow: 0px 8px 29px rgba(0, 0, 0, 0.34);
  border-radius: 50px;
  display: flex;
  align-items: center;
  margin-top: 22px;
  bottom: -17%;
  position: absolute;
  width: 32%;
`;
const StyledI = styled.i`
  opacity: 0.7;
  margin-left: 20px;
`;

const StyledSendIcon = styled.i`
  right: 16px;
  position: absolute;
  opacity: 0.7;

`;

const StyledPosition = styled.div`
width: 3px;
position: absolute;
right: 54px;
height: 19px;
background: black;
`;
const ChatScreen = (props) => {
  const { activeUserId } = props;
  return (
    <Main>
      <StyledTypography>{Users[activeUserId]}</StyledTypography>
      <ChatHistory>
        <LeftAlign>
          <ProfileWrapper>
            <ProfileDiv>
              <StyledImg src="/images/male.png" />
            </ProfileDiv>
            <StyledTypography fontSize={15} opacity={0.7}>
            09:34
            </StyledTypography>
          </ProfileWrapper>
          <BackGround color="#c4c4c4">
            <StyledTypography fontSize={15}>Here we go again...</StyledTypography>
          </BackGround>
        </LeftAlign>
        <RightAlign>
          <BackGround color="#327ED8">
            <StyledTypography fontSize={15} color="white">
            I do not know you.
            </StyledTypography>
          </BackGround>
          <StyledTypography float="right" fontSize={15} opacity={0.7}>
          09:34
          </StyledTypography>
        </RightAlign>
        <StyledPosition />

        <LeftAlign>
          <ProfileWrapper>
            <ProfileDiv>
              <StyledImg src="/images/male.png" />
            </ProfileDiv>
            <StyledTypography fontSize={15} opacity={0.7}>
            09:34
            </StyledTypography>
          </ProfileWrapper>
          <BackGround color="#c4c4c4">
            <StyledTypography fontSize={15}>ok</StyledTypography>
          </BackGround>
        </LeftAlign>
        <RightAlign>
          <BackGround color="#327ED8">
            <StyledTypography fontSize={15} color="white">
            I can understand.
            </StyledTypography>
          </BackGround>
          <StyledTypography float="right" fontSize={15} opacity={0.7}>
          09:34
          </StyledTypography>
        </RightAlign>
        <LeftAlign>
          <ProfileWrapper>
            <ProfileDiv>
              <StyledImg src="/images/male.png" />
            </ProfileDiv>
            <StyledTypography fontSize={15} opacity={0.7}>
            09:34
            </StyledTypography>
          </ProfileWrapper>
          <BackGround color="#c4c4c4">
            <StyledTypography fontSize={15}>
              <span role="img" aria-labelledby="">😁😄😄😀</span>
            </StyledTypography>
          </BackGround>
        </LeftAlign>
        <RightAlign>
          <BackGround color="#327ED8">
            <StyledTypography fontSize={15} color="white">
            Ok.
            </StyledTypography>
          </BackGround>
          <StyledTypography float="right" fontSize={15} opacity={0.7}>
          09:34
          </StyledTypography>
        </RightAlign>
      </ChatHistory>
      <StyledSearchBarWrapper>
        <StyledI className="far fa-smile-wink" />
        <StyledSearchBar placeholder="Type a message..." />
        <StyledSendIcon className="far fa-paper-plane" />
      </StyledSearchBarWrapper>
    </Main>
  );
};
ChatScreen.propTypes = {
  activeUserId: PropTypes.number.isRequired,
};
export default ChatScreen;
