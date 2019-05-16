import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';
import { isEmpty } from 'lodash';
import SideBar from '../sidebar';
import ChatList from '../chatList';
import ChatScreen from '../chatScreen';
import { Socket } from '../../util';

const Main = styled.div`
  ${props => props.isLogin && 'width: 100%;'}
  background: linear-gradient(179.34deg, #e9e1fd 1.05%, #fbf8ff 99.42%);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.31);
  margin: 4%;
  display: flex;
`;


class Home extends PureComponent {
  state={ activeUser: {}, users: [{}], currentLoginUser: {} }

  componentWillMount() {
    const currentLoginUserLS = JSON.parse(localStorage.currentLoginUser || null) || {};
    const { _id } = currentLoginUserLS;
    if (isEmpty(currentLoginUserLS)) {
      Socket.emit('loginUser');
    } else {
      this.setState({ currentLoginUser: currentLoginUserLS });
    }
    Socket.on('currentLoginUser', (currentLoginUser) => {
      localStorage.currentLoginUser = JSON.stringify(currentLoginUser);
      this.setState({ currentLoginUser });
    });
    const filter = {};
    if (_id) {
      filter._id = { $ne: _id };
    }
    Socket.emit('getUsersListing', filter);
    Socket.on('usersListing', (users) => {
      this.setState({ users, activeUser: users[0] });
    });
  }

  logoutUser = () => {
    localStorage.currentLoginUser = JSON.stringify({});
    this.setState({ currentLoginUser: {} });
  }

  responseGoogle = (response) => {
    const { error, profileObj } = response;
    if (!error) {
      const { email, imageUrl: src, name: userName } = profileObj;
      Socket.emit('insertUser', { email, src, userName });
    }
  }

  handleActiveUser = (activeUser) => {
    this.setState({ activeUser });
  }

  render() {
    const { activeUser, users, currentLoginUser } = this.state;
    const isLogin = !isEmpty(currentLoginUser);
    console.log(': Home -> render -> isLogin', isLogin);
    return (
      <Main isLogin={isLogin}>
        {!isLogin
          ? (
            <GoogleLogin
              clientId="833051514160-s0n52aj7oqtmq244t8203vi6hg05ul83.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy="single_host_origin"
            />
          ) : (
            <Fragment>
              <SideBar
                currentLoginUser={currentLoginUser}
                logoutUser={this.logoutUser}
              />
              <ChatList
                handleActiveUser={this.handleActiveUser}
                activeUser={activeUser}
                users={users}
              />
              <ChatScreen
                activeUser={activeUser}
                users={users}
                currentLoginUser={currentLoginUser}
              />
            </Fragment>
          )
        }

      </Main>
    );
  }
}
export default Home;
