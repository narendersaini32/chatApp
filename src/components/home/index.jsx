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
  state={ activeUserId: 0 }

  componentWillMount() {
    Socket.on('news', (data) => {
      console.log(data);
      Socket.emit('my other event', { my: 'data' });
    });
  }

  handleActiveUserId = (activeUserId) => {
    this.setState({ activeUserId });
  }

  render() {
    const { activeUserId } = this.state;
    return (
      <Main>
        <SideBar />
        <ChatList
          handleActiveUserId={this.handleActiveUserId}
          activeUserId={activeUserId}
        />
        <ChatScreen activeUserId={activeUserId} />
      </Main>
    );
  }
}
export default Home;
