import React from 'react';
import styled from 'styled-components';
import SideBar from '../sidebar';
import ChatList from '../chatList';
import ChatScreen from '../chatScreen';

const Main = styled.div`
  width: 100%;
  background: linear-gradient(179.34deg, #e9e1fd 1.05%, #fbf8ff 99.42%);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.31);
  margin: 4%;
  display: flex;
`;


const Home = () => (
  <Main>
    <SideBar />
    <ChatList />
    <ChatScreen />
  </Main>
);
export default Home;
