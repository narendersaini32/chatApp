import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Picker } from 'emoji-mart';
import { Socket } from '../../util';
import 'emoji-mart/css/emoji-mart.css';

const Main = styled.div`
  margin-top: 4%;
  margin-left: 7%;
  width: 45%;
  height: auto;
  position: relative;
  margin-right: 1px;
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
max-width: 300px;
word-break: break-all;
text-transform: capitalize;
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
  border-radius: 25px;
`;

const ProfileWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const ChatHistory = styled.div`
  margin-top: 10%;
  height: 442px;
  overflow: scroll;
  overflow-x: hidden;
  margin-bottom: 14%;
  display: flex;
  flex-direction: column;
`;

const LeftAlign = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 40px;
`;
const BackGround = styled.div`
  background: ${props => props.color};
  border-radius: 50px;
  padding: 5px 11px 5px 3px;
  width: fit-content;
  float: right;
  margin-left: 10px;
`;

const RightAlign = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 30px;
  margin-bottom: 30px;
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
  bottom: 25px;
  position: absolute;
  width: 96%;
`;
const StyledI = styled.i`
  opacity: 0.7;
  margin-left: 10px;
  cursor: pointer;
`;

const StyledSendIcon = styled.i`
  opacity: 0.7;
  margin-right: 10px;
  cursor: pointer;
`;

const EmojiWrapper = styled.div`
  z-index: 1;
  position: absolute;
  top: 19%;
`;
class ChatScreen extends PureComponent {
  state = { chat: [] };

  componentWillMount() {
    this.input = React.createRef();
    // document.addEventListener('click', (e) => {
    //   if (e.target.id !== 'emojiWrapper'
    // && e.target.id !== 'emojiIcon') { this.setState({ emojiPicker: false }); }
    // }, false);
    this.getLatestChat(this.props);
  }


  componentDidMount() {
    this.scrollToBottom();
  }

  componentWillReceiveProps(nextProps) {
    this.getLatestChat(nextProps);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  getLatestChat = (props) => {
    Socket.emit('getChatHistory', this.getFilter(props));
    Socket.on('chatHistory', (chat) => {
      this.setState({ chat });
    });
  }

  scrollToBottom = () => {
    const chatHistoryDiv = document.getElementById('chatHistory') || {};
    chatHistoryDiv.scrollTop = chatHistoryDiv.scrollHeight;
  };

  handleMessageSend = (value) => {
    // const time = new Date().toLocaleTimeString(navigator.language, {
    //   hour: '2-digit',
    //   minute: '2-digit',
    // });
    const {
      currentLoginUser: { _id: from, userName: fromUserName },
      activeUser: { _id: to, userName: toUserName },
    } = this.props;
    const newMsg = {
      msg: value, from, to, toUserName, fromUserName,
    };

    Socket.emit('insertChat', newMsg, this.getFilter(this.props));
  };

  getFilter = (props) => {
    const { currentLoginUser: { _id: from }, activeUser: { _id: to } } = props;
    return { $or: [{ from, to }, { from: to, to: from }] };
  }

  toggleEmojiPicker = () => {
    this.setState((state) => {
      const { emojiPicker } = state;
      return { emojiPicker: !emojiPicker };
    });
  };

  handleEmojiClick = (emoji) => {
    const { native } = emoji;
    this.input.current.value = this.input.current.value + native;
  }

  render() {
    const { chat, emojiPicker } = this.state;
    const { activeUser: { userName, src, _id } } = this.props;

    return (
      <Main>
        <StyledTypography fontSize={22}>{userName}</StyledTypography>
        <ChatHistory id="chatHistory">
          {chat.map((obj, index) => {
            const {
              msg, from, to, timeStamp = new Date(),
            } = obj;
            const key = index + msg + from;
            const time = new Date(timeStamp).toLocaleTimeString(navigator.language, {
              hour: '2-digit',
              minute: '2-digit',
            });
            console.log(': ChatScreen -> render -> _id', _id);
            console.log(': ChatScreen -> render -> from', from);
            if (to !== _id) {
              return (
                <RightAlign key={key}>
                  <BackGround color="#327ED8">
                    <StyledTypography fontSize={15} color="white">
                      {msg}
                    </StyledTypography>
                  </BackGround>
                  <StyledTypography float="right" fontSize={15} opacity={0.7}>
                    {time}
                  </StyledTypography>
                </RightAlign>
              );
            }
            return (
              <LeftAlign key={key}>
                <ProfileWrapper>
                  <ProfileDiv>
                    <StyledImg src={src} />
                  </ProfileDiv>
                  <StyledTypography fontSize={15} opacity={0.7}>
                    {time}
                  </StyledTypography>
                </ProfileWrapper>
                <BackGround color="#c4c4c4">
                  <StyledTypography fontSize={15}>{msg}</StyledTypography>
                </BackGround>
              </LeftAlign>
            );
          })}
        </ChatHistory>
        <StyledSearchBarWrapper>
          <StyledI id="emojiIcon" className="far fa-smile-wink" onClick={this.toggleEmojiPicker} />
          <StyledSearchBar
            placeholder="Type a message..."
            ref={this.input}
            onKeyPress={({ key, target: { value } }) => {
              if (key === 'Enter' && value) {
                this.handleMessageSend(value);
                this.input.current.value = '';
              }
            }}
          />
          <StyledSendIcon className="far fa-paper-plane" />
        </StyledSearchBarWrapper>
        <EmojiWrapper id="emojiWrapper">
          {emojiPicker && (
          <Picker
            set="google"
            title=""
            onClick={this.handleEmojiClick}
          />
          )}
        </EmojiWrapper>
      </Main>
    );
  }
}
ChatScreen.propTypes = {
  activeUser: PropTypes.instanceOf(Object).isRequired,
  currentLoginUser: PropTypes.instanceOf(Object).isRequired,
};
export default ChatScreen;
