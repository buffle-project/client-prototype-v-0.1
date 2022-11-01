import React, { useContext } from "react";

import { Context } from "../../context/Context";

import { Button } from 'antd';

import Sidebar from '../../components/Sidebar/Sidebar';

function Dashboard() {
  const { dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
  }

  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <Sidebar />
        <div>Dashboard says hi!</div>
        <Button
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </>
  );
}

export default Dashboard;
