import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.span`
  font-weight: 600;
  margin-right: 0.5rem;
`;

const MissionName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.5rem;

  h1 {
    line-height: 1;
  }

  @media (max-width: 740px) {
    font-size: 0.875rem;
  }
`;

const Status = styled.span`
  color: #27d872;
`;

const Container = styled.div`
  display: flex;

  @media (max-width: 740px) {
    flex-direction: column-reverse;
  }
`;

const PatchBlock = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 160px;
    height: 160px;
  }

  @media (max-width: 740px) {
    img {
      width: 100px;
      height: 100px;
      margin-bottom: 1.5rem;
    }
  }
`;

const DetailsBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 3rem;
  flex: 1;

  @media (max-width: 740px) {
    padding-right: 0;
  }
`;

const Detail = styled.div`
  &:not(:last-child) {
    margin-bottom: 0.35rem;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const Number = styled.div`
  font-size: 1.5rem;
  line-height: 1;
  width: 160px;
  display: flex;
  justify-content: center;

  span {
    font-size: 1rem;
    line-height: 1;
    vertical-align: top;
    margin-left: 0.5rem;
  }

  @media (max-width: 740px) {
    justify-content: flex-end;
    flex: 0;
  }
`;

const DetailsButton = styled(Link)`
  background: none;
  color: ${(props) => props.theme.linkColor};
  border: 1px solid ${(props) => props.theme.linkColor};
  border-radius: 3px;
  display: inline-block;
  padding: 4px 12px;
  font-size: 1rem;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 600;
`;

const PresskitButton = styled.a`
  background: none;
  color: ${(props) => props.theme.linkColor};
  border: 1px solid ${(props) => props.theme.linkColor};
  border-radius: 3px;
  display: inline-block;
  padding: 4px 12px;
  font-size: 1rem;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 600;
`;

const renderActionButton = (type, launchData) => {
  if (type === 'details') {
    if (launchData.links.presskit) {
      return (
        <PresskitButton
          href={launchData.links.presskit}
          target="_blank"
          rel="noopener noreferrer"
          arial-label="Go to flight press kit"
        >
          PRESS KIT
        </PresskitButton>
      );
    } else {
      return <div>Sorry, no press kit available.</div>;
    }
  }
  return (
    <DetailsButton
      to={`/launch/${launchData.flight_number}`}
      arial-label="Go to flight details"
    >
      LAUNCH DETAILS
    </DetailsButton>
  );
};

const LaunchDetails = ({ launchData, type }) => {
  if (!launchData) return 'Loading...';
  const {
    mission_name,
    launch_date_local,
    launch_site,
    flight_number,
    launch_success,
    details,
    links,
  } = launchData;

  return (
    <Wrapper>
      <Container>
        <DetailsBlock>
          <MissionName>
            <h1>{mission_name}</h1>
          </MissionName>
          <Detail style={{ marginBottom: '1rem' }}>
            {details ? details : 'No description provided.'}
          </Detail>
          <Detail>
            <Heading>LAUNCH STATUS:</Heading>
            <Status>{launch_success ? 'SUCCESSFUL' : 'FAILURE'}</Status>
          </Detail>
          <Detail>
            <Heading>LAUNCH DATE:</Heading>
            {launch_date_local}
          </Detail>
          <Detail>
            <Heading>LAUNCH SITE:</Heading>
            {launch_site && launch_site.site_name_long}
          </Detail>
        </DetailsBlock>
        <PatchBlock>
          <img
            src={
              links && links.mission_patch
                ? links.mission_patch
                : '/images/space-x-badge.png'
            }
            alt={`${mission_name} patch`}
          />
        </PatchBlock>
      </Container>
      <Actions>
        {renderActionButton(type, launchData)}
        <Number>
          FLIGHT
          <span> #</span>
          {flight_number}
        </Number>
      </Actions>
    </Wrapper>
  );
};

export default LaunchDetails;
