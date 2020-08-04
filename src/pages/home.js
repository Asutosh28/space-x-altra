import React from 'react';

import { useFetch } from '../hooks/useFetch';
import Layout from '../components/layout';
import Countdown from '../components/countdown';
import RecentLaunches from '../components/recentLaunches';
import UpcomingLaunches from '../components/upcomingLaunches';
import back_vid from '../video/space.mp4'
import style from '../css/home.css'
const styles = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 'auto',
    width: '100%',
    float: 'left',
    padding: 0,
    zIndex: 99,
    overflow: 'hidden'
}
const layout = {
    background: 'rgba(0,0,0,0.7)'
}
const Home = () => {
  const url = `https://api.spacexdata.com/v3/launches/upcoming?order=ascc`;

  const { data } = useFetch(url);

  return (
      <Layout style="background: 'rgba(0,0,0,0.7)'">
          <video style={styles} autoPlay loop muted >
              <source src={back_vid} type='video/mp4' />
          </video>
          <Countdown launches={data} />
          {/*<RecentLaunches />*/}
          <UpcomingLaunches launches={data} />
      </Layout>

  );
};

export default Home;
