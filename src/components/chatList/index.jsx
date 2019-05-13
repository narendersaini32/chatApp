import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  margin-top: 10%;
  margin-left: 7%;
  flex-direction: column;
`;
const StyledTypography = styled.div`
${props => `
margin-left: 20px;
font-size: ${props.fontSize}px;
font-weight: 400;
margin-top: ${props.marginTop || 0}px;
opacity: ${props.opacity || 1};
`}
`;
const StyledSearchBar = styled.input`
  width: 200px;
  height: 34px;
  background: #ede6fd;
  border: 0px;
  outline: none;
  margin-left: 30px;
`;
const StyledSearchBarWrapper = styled.div`
  background: #ede6fd;
  box-shadow: 1px 1px 13px rgba(0, 0, 0, 0.13);
  display: flex;
  align-items: center;
  margin-top: 22px;
`;
const StyledI = styled.i`
  opacity: 0.7;
  margin-left: 20px;
`;

const ChatItemWrapper = styled.div`
  margin-top: 14px;
`;
const ChatItem = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 376px;
  height: 77px;
  display:flex;
  margin-top:10px;
  margin-bottom:10px;
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
`;

const TextWrapper = styled.div``;
const ChatList = () => (
  <Main>
    <StyledTypography fontSize={21}>Chats</StyledTypography>
    <StyledSearchBarWrapper>
      <StyledI className="fas fa-search" />
      <StyledSearchBar placeholder="Search" />
    </StyledSearchBarWrapper>
    <ChatItemWrapper>
      <ChatItem>
        <ProfileWrapper>
          <ProfileDiv>
            <StyledImg src="/images/male.png" />
          </ProfileDiv>
        </ProfileWrapper>
        <TextWrapper>
          <StyledTypography fontSize={18} marginTop={17}>Johnson</StyledTypography>
          <StyledTypography fontSize={15} opacity={0.7}>Sample text of chatting</StyledTypography>
        </TextWrapper>
      </ChatItem>
      <ChatItem>
        <ProfileWrapper>
          <ProfileDiv>
            <StyledImg src="/images/male.png" />
          </ProfileDiv>
        </ProfileWrapper>
        <TextWrapper>
          <StyledTypography fontSize={18} marginTop={17}>Steave</StyledTypography>
          <StyledTypography fontSize={15} opacity={0.7}>Sample text of chatting</StyledTypography>
        </TextWrapper>
      </ChatItem>
      <ChatItem>
        <ProfileWrapper>
          <ProfileDiv>
            <StyledImg src="/images/male.png" />
          </ProfileDiv>
        </ProfileWrapper>
        <TextWrapper>
          <StyledTypography fontSize={18} marginTop={17}>Alex</StyledTypography>
          <StyledTypography fontSize={15} opacity={0.7}>Sample text of chatting</StyledTypography>
        </TextWrapper>
      </ChatItem>
      <ChatItem>
        <ProfileWrapper>
          <ProfileDiv>
            <StyledImg src="/images/male.png" />
          </ProfileDiv>
        </ProfileWrapper>
        <TextWrapper>
          <StyledTypography fontSize={18} marginTop={17}>Deadpool</StyledTypography>
          <StyledTypography fontSize={15} opacity={0.7}>Sample text of chatting</StyledTypography>
        </TextWrapper>
      </ChatItem>
      <ChatItem>
        <ProfileWrapper>
          <ProfileDiv>
            <StyledImg src="/images/male.png" />
          </ProfileDiv>
        </ProfileWrapper>
        <TextWrapper>
          <StyledTypography fontSize={18} marginTop={17}>Tony Stark</StyledTypography>
          <StyledTypography fontSize={15} opacity={0.7}>Sample text of chatting</StyledTypography>
        </TextWrapper>
      </ChatItem>

    </ChatItemWrapper>
  </Main>
);
export default ChatList;
