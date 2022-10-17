import React, { useContext } from "react";

import { Context } from "../../context/Context";

import {Button} from 'antd';

function Dashboard() {
  const { dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
  }
  return (
    <>
      <div>Dashboard says hi!</div>
      <Button
        onClick={handleLogout}
      >Logout</Button>
    </>
  );
}

export default Dashboard;
