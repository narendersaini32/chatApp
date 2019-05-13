import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  margin-top: 10%;
  margin-left: 16%;
  flex-direction: column;
`;
const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  cursor:pointer;
  color:${props => (props.active ? '#9f6ee0' : '')};
  &: hover {
    color: #9f6ee0;
  }
`;
const StyledI = styled.i`
  opacity: 0.7;
`;
const StyledTypography = styled.div`
  margin-left: 20px;
`;
const StyledPosition = styled.div`
  width: 3px;
  position: absolute;
  left: 0px;
  margin-left: 4%;
  height: 19px;
  background: #9f6ee0;
`;

class MenuItem extends PureComponent {
  state={ activeTab: 0 };

  handleActivateTab = (activeTab) => {
    this.setState({ activeTab });
  }

  render() {
    const { activeTab } = this.state;
    return (
      <Main>
        <StyledItem onClick={() => { this.handleActivateTab(0); }} active={activeTab === 0}>
          {activeTab === 0 && <StyledPosition />}
          <StyledI className="far fa-comments" />
          <StyledTypography>Chats </StyledTypography>
        </StyledItem>
        <StyledItem onClick={() => { this.handleActivateTab(1); }} active={activeTab === 1}>
          {activeTab === 1 && <StyledPosition />}

          <StyledI className="fas fa-phone" />
          <StyledTypography>Calls </StyledTypography>
        </StyledItem>
        <StyledItem onClick={() => { this.handleActivateTab(2); }} active={activeTab === 2}>
          {activeTab === 2 && <StyledPosition />}

          <StyledI className="far fa-calendar-alt" />
          <StyledTypography>Calendar </StyledTypography>
        </StyledItem>
        <StyledItem onClick={() => { this.handleActivateTab(3); }} active={activeTab === 3}>
          {activeTab === 3 && <StyledPosition />}

          <StyledI className="fas fa-clock" />
          <StyledTypography>Schedule </StyledTypography>
        </StyledItem>
        <StyledItem onClick={() => { this.handleActivateTab(4); }} active={activeTab === 4}>
          {activeTab === 4 && <StyledPosition />}

          <StyledI className="fas fa-dollar-sign" />
          <StyledTypography>Rewards </StyledTypography>
        </StyledItem>
        <StyledItem onClick={() => { this.handleActivateTab(5); }} active={activeTab === 5}>
          {activeTab === 5 && <StyledPosition />}

          <StyledI className="fas fa-cog" />
          <StyledTypography>Settings </StyledTypography>
        </StyledItem>
      </Main>
    );
  }
}
export default MenuItem;
