import React from 'react'
import { useSelector, useDispatch } from 'react-redux';



function Test() {

  const user = useSelector((state) => state.userSlice.user)

  return (
    <>
      <div>Hello From the test page! Horay!</div>
      <span>Logged in as {user.name}</span>
    </>

  )
}

export default Test