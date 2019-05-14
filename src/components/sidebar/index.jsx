import React, { PureComponent } from 'react';
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
  border-radius:25px;
`;
const StyledTypography = styled.div``;
const NameAndIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 4%;
`;
const StyledI = styled.i`
  margin-left: ${props => props.marginLeft || 0}px;
  opacity: 0.7;
  cursor: pointer;
  margin-right:${props => props.marginRight || 0}px;
`;

const MyProfileItems = styled.div`
${props => `
visibility: ${props.showMyProfile ? 'visible' : 'hidden'};
width: 110px;
color: #fff;
text-align: center;
border-radius: 6px;
padding: 8px 0;
position: absolute;
z-index: 1;
margin-left: 89%;
margin-top: 13%;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.31);
display: flex;
flex-direction: column;
align-items: end;
`}
`;
const MyProfileItem = styled.div`
font-size: 17px;
    color: black;
    font-weight: 100;
    margin: 5px;
    cursor:pointer;
    &: hover {
      color: #9f6ee0;
    }
    
`;
class SideBar extends PureComponent {
  state={};

  render() {
    const { showMyProfile } = this.state;
    document.addEventListener('click', (e) => {
      if (e.target.id !== 'myProfileItems') { this.setState({ showMyProfile: false }); }
    }, false);
    const iconName = showMyProfile ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
    return (
      <StyledSideBar>
        <ProfileDiv>
          <StyledImg src="https://avatars0.githubusercontent.com/u/210?v=4" />
          <NameAndIconWrapper>
            <StyledTypography>Naredner Saini </StyledTypography>
            <StyledI id="myProfileItems" marginLeft={20} className={iconName} onClick={() => { this.setState({ showMyProfile: !showMyProfile }); }} />
            <MyProfileItems showMyProfile={showMyProfile}>
              <MyProfileItem>
                <StyledI className="far fa-user-circle" marginRight={6} />
                  My Profile
              </MyProfileItem>
              <MyProfileItem>
                <StyledI className="far fa-question-circle" marginRight={6} />
                    Faq
              </MyProfileItem>
              <MyProfileItem>
                <StyledI className="fas fa-sign-out-alt" marginRight={6} />
                    Logout
              </MyProfileItem>
            </MyProfileItems>
          </NameAndIconWrapper>
        </ProfileDiv>
        <MenuItem />
      </StyledSideBar>
    );
  }
}
export default SideBar;
