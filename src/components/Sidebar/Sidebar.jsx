// React core imports
import React, { useContext } from 'react';

// components imports
import SidebarScroll from './SidebarScroll';
import BoxContainer from '../BoxContainer';

// antd imports
import { Image, Button } from 'antd';

// img imports
import homeImg from '../../img/png/home.png';
import dashImg from '../../img/png/dash.png';

// context
import { Context } from '../../context/Context';

import { Link } from 'react-router-dom';

// styling object
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '8%',
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
  const { dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
  }

  return (
    <>
      <div style={styles.container} >
        <Link to='/dashboard'>
        <BoxContainer width={55} height={55} marginTop={20} marginBottom={50}>
          <Image
            src={homeImg}
            preview={false}
            width={55}
            height={55}
            style={{ marginTop: 3 }}
            />
        </BoxContainer>
        </Link>
        <SidebarScroll apps={apps} />
        <BoxContainer width={55} height={55} marginTop={50} marginBottom={50}>
          <Image
            src={dashImg}
            preview={false}
            width={35}
            height={35}
            style={{ marginTop: 3 }}
            onClick={handleLogout}
          />
        </BoxContainer>
      </div>
    </>
  )
}

export default Sidebar