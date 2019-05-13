import React from 'react';
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
  background: black;
`;

const MenuItem = () => (
  <Main>
    <StyledItem>
      <StyledPosition />
      <StyledI className="far fa-comments" />
      <StyledTypography>Chats </StyledTypography>
    </StyledItem>
    <StyledItem>
      <StyledI className="fas fa-phone" />
      <StyledTypography>Calls </StyledTypography>
    </StyledItem>
    <StyledItem>
      <StyledI className="far fa-calendar-alt" />
      <StyledTypography>Calendar </StyledTypography>
    </StyledItem>
    <StyledItem>
      <StyledI className="fas fa-clock" />
      <StyledTypography>Schedule </StyledTypography>
    </StyledItem>
    <StyledItem>
      <StyledI className="fas fa-dollar-sign" />
      <StyledTypography>Rewards </StyledTypography>
    </StyledItem>
    <StyledItem>
      <StyledI className="fas fa-cog" />
      <StyledTypography>Settings </StyledTypography>
    </StyledItem>
  </Main>
);
export default MenuItem;
