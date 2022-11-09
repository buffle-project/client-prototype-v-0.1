// react core imports
import React from "react";

// components imports
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from "../../components/Topbar/Topbar";

// widgets imports for testing
import { WorkmoodApp, WorkmoodWidget } from "../../apps/workmood";

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
            backgroundColor: '#EFF3FA',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Topbar />
          <WorkmoodWidget />
        </div>
        
      </div>
    </>
  );
}

export default Dashboard;
