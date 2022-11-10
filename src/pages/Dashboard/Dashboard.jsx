// react core imports
import React from "react";

// components imports
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

// widget layout containing all the widgets
import WidgetLayout from "../../components/WidgetLayout";

// apps imports
import { WorkmoodApp } from "../../apps/workmood";

// utils imports
import { Route, Routes, Outlet} from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Sidebar />
        <div
          style={{
            width: "100%",
            height: "100vh",
            // backgroundColor: "#EFF3FA",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Topbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
