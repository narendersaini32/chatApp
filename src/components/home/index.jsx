import React, { PureComponent } from 'react';
import styled from 'styled-components';
import SideBar from '../sidebar';
import ChatList from '../chatList';
import ChatScreen from '../chatScreen';
import { Socket } from '../../util';

const Main = styled.div`
  width: 100%;
  background: linear-gradient(179.34deg, #e9e1fd 1.05%, #fbf8ff 99.42%);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.31);
  margin: 4%;
  display: flex;
`;


class Home extends PureComponent {
  state={ activeUserId: 0, users: [{}] }

  componentWillMount() {
    Socket.emit('getUsersListing');
    Socket.on('usersListing', (users) => {
      this.setState({ users });
    });
  }

  handleActiveUserId = (activeUserId) => {
    this.setState({ activeUserId });
  }

  render() {
    const { activeUserId, users } = this.state;
    return (
      <Main>
        <SideBar />
        <ChatList
          handleActiveUserId={this.handleActiveUserId}
          activeUserId={activeUserId}
          users={users}
        />
        <ChatScreen activeUserId={activeUserId} users={users} />
      </Main>
    );
  }
}
export default Home;
