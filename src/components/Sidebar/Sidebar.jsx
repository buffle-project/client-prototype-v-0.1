// React core imports
import React from 'react';

// components imports
import SidebarScroll from './SidebarScroll';
import BoxContainer from '../BoxContainer';

// antd imports
import { Image } from 'antd';

// img imports
import homeImg from './img/home.png'

// styling object
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '160px',
    height: '100vh',
    backgroundColor: 'white',
    boxShadow: '5px 0px 10px rgba(0, 0, 0, 0.25)',
    alignItems: 'center'
  }
};

const apps = [
  'Workmood',
  'Breaktime',
  'Placeforce',
  'Taskshop',
  'Waterday'
];


function Sidebar() {

  return (
    <>
      <div style={styles.container}>
        <BoxContainer width={55} height={55} marginTop={20} marginBottom={50}>
          <Image 
            src={homeImg}
            preview={false}
            width={55}
            height={55}
            style={{marginTop: 3}}
          />
        </BoxContainer>
        <SidebarScroll apps={apps} />
      </div>
    </>
  )
}

export default Sidebar