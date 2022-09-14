import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { deleteUser } from '../../context/slices/userSlice';
import { Link, useNavigate } from "react-router-dom";


// widgets imports
import Meetlinks from '../../widgets/Meetlinks/Meetlinks';



function Test() {
  const dispatch = useDispatch()
  let navigate = useNavigate();
  // const user = useSelector((state) => state.userSlice.user)
  let user = localStorage.getItem("user")

  const userLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    dispatch(deleteUser());
    navigate("/login")
  }

  return (
    <>
      <div style={{
        background: '#F4F7FE',
        width: '100%',
        height: '100vh'
      }}>

        <div>Hello From the test page! Horay!</div>
        {/* <span>Logged in as {user.name}</span> */}
        <span>Logged in as {user}</span>
        <Button
          onClick={e => userLogout(e)}
        >
          Logout
        </Button>
        <Meetlinks />
      </div>

    </>
  )
}

export default Test