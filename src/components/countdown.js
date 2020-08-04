import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import CountdownDetails from './countdownDetails';
import Timer from './timer';

const Wrapper = styled.div`
  width: 100%;
  margin-top: -2.5rem;
  z-index: 998;
  color: #FFEB3B !important;
  font-weight: 900 !important;
`;

const Heading = styled.h5`
    margin: 0 0 0 5%;
    font-weight: 900 !important;
    background: #00000082;
    text-align: center;
    vertical-align: middle;
    padding: 1rem;
    font-size: 3rem;
`;

const Container = styled.div`
  // padding: 3% 5% 5%;
`;
const  span = {
    color: 'yellow'
}

const isPast = (date) => {
  if (moment(Date()).isBefore(date)) {
    return false;
  }
  return true;
};

const Countdown = ({ launches }) => {
  const launch = launches.find((launch) => !isPast(launch.launch_date_local));
  console.log(launch)
  return (
    <Wrapper>

          {
              launch != undefined ?
                  <Heading>NEXT LAUNCH
                      <span style={span}> ( {launch.rocket.rocket_name} )</span>
                  </Heading>


                  :
                  ''
          }
      <Container>
        {launch && (
          <>
            <Timer launchDate={launch.launch_date_local} />
            <CountdownDetails data={launch} />
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default Countdown;
