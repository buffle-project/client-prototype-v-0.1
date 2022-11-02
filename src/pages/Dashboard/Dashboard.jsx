// react core imports
import React from "react";

// components imports
import Sidebar from '../../components/Sidebar/Sidebar';


function Dashboard() {

  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <Sidebar />
        <div
          style={{
            width: '100%',
            height: '100vh',
            backgroundColor: '#EFF3FA'
          }}
        >Dashboard says hi!</div>
        
      </div>
    </>
  );
}

export default Dashboard;
