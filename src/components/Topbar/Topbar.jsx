// React core imports
import React from "react";

// antd imports
import { Typography } from "antd";

// utils imports
import { titleText } from "../../utils/titleText";
import API from "../../utils/api";
import { useState } from "react";
import { useEffect } from "react";
import { colors } from "../../utils/colors";

// components
import BoxContainer from "../BoxContainer";

/**
 * Title pulls the name of the user and displays a message
 * randomly picked from the pool of motivational messages
 */
function Title() {
  const currentDate = new Date();
  const day = currentDate.getDay();
  //   const userEmail = window.localStorage.getItem('user')
  //     const [displayName, setDisplayName] = useState('');

  // async function getName () {
  //     console.log(userEmail)
  //     const res = await API.post('/account/get-account', userEmail);
  //     console.log(res.username? res.username : 'doesnt exist what');
  //     setDisplayName(res.username);
  // };

  // useEffect(()=>{
  //     getName();
  // }, []);

  return (
    <>
      <div>
        <Typography
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: colors.lightGrey,
            padding: 20,
          }}
        >
          {`Hi Luka`}
        </Typography>
        <Typography
          style={{
            marginTop: -40,
            padding: 20,
            color: colors.purple,
            fontSize: "30px",
            fontWeight: "700",
            // lineHeight: "60px"
          }}
        >
          {titleText[day]}
        </Typography>
      </div>
    </>
  );
}

/**
 * Menu displays user's avatar, team and notifications
 */
function Menu() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
        }}
      >
        <BoxContainer>Team</BoxContainer>

        <BoxContainer>Me</BoxContainer>

        <BoxContainer>Notif</BoxContainer>
      </div>
    </>
  );
}

export default function Topbar() {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Title />
        <Menu />
      </div>
    </>
  );
}
