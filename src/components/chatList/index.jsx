import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Users from './user';

const Main = styled.div`
  display: flex;
  margin-top: 4%;
  margin-left: 7%;
  flex-direction: column;
  height: 608px;
  width:27%;
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
  width: 100%;
  height: 34px;
  background: #ede6fd;
  border: 0px;
  outline: none;
  border-radius: 25px;
  margin-left: 30px;
`;
const StyledSearchBarWrapper = styled.div`
  background: #ede6fd;
  box-shadow: 1px 1px 13px rgba(0, 0, 0, 0.13);
  display: flex;
  align-items: center;
  margin-top: 34px;
  border-radius: 25px;
  width:300px;
  position: absolute;
`;
const StyledI = styled.i`
  opacity: 0.7;
  margin-left: 20px;
`;

const ChatItemWrapper = styled.div`
  margin-top: 47px;
  overflow: scroll;
  overflow-x: hidden;
  width: 103%;
`;
const ChatItem = styled.div`
  background: #ffffff;
  box-shadow: ${props => `0px  4px 4px ${props.active ? 'rgb(166, 109, 219)' : 'rgba(0, 0, 0, 0.25)'} `};
  border-radius: 10px;
  width: 300px;
  height: 77px;
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  transition: 0.1s ease;
  cursor:pointer;
  margin-left: 4px;
  &:hover {
    transform: scale(1.02);
  }
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
  border-radius:25px
`;

const ProfileWrapper = styled.div`
  align-items: center;
  display: flex;
`;
const TextWrapper = styled.div``;
class ChatList extends PureComponent {
  state={ users: Users };

  handleSearch = (event) => {
    const searcjQery = event.target.value.toLowerCase();
    const users = Users.filter((el) => {
      const searchValue = el.login.toLowerCase();
      return searchValue.indexOf(searcjQery) !== -1;
    });
    this.setState({
      users,
    });
  }

  render() {
    const { users } = this.state;
    const { handleActiveUserId, activeUserId } = this.props;
    return (
      <Main>
        <StyledTypography fontSize={21}>Chats</StyledTypography>
        <StyledSearchBarWrapper>
          <StyledI className="fas fa-search" />
          <StyledSearchBar placeholder="Search" onChange={this.handleSearch} />
        </StyledSearchBarWrapper>
        <ChatItemWrapper>
          {users.map(({ login, avatar_url: url }, index) => (
            <ChatItem
              key={login + Number(index)}
              onClick={() => { handleActiveUserId(index); }}
              active={activeUserId === index}
            >
              <ProfileWrapper>
                <ProfileDiv>
                  <StyledImg src={url} />
                </ProfileDiv>
              </ProfileWrapper>
              <TextWrapper>
                <StyledTypography fontSize={18} marginTop={17}>{login}</StyledTypography>
                <StyledTypography fontSize={15} opacity={0.7}>
              Sample text of chatting
                </StyledTypography>
              </TextWrapper>
              {/* {index === 2 && <StyledPosition />} */}
            </ChatItem>
          ))}
        </ChatItemWrapper>
      </Main>
    );
  }
}
ChatList.propTypes = {
  handleActiveUserId: PropTypes.func.isRequired,
  activeUserId: PropTypes.number.isRequired,
};
export default ChatList;
