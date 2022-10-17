// style imports
import './App.css';
import 'antd/dist/antd.min.css';

// pages imports
import Login from './pages/Login/Login';
import Test from './pages/Test/Test';
import AccountCreation from './pages/AccountCreation/AccountCreation';
import JoinTeam from './pages/JoinTeam/JoinTeam';

// utils
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Context imports
import { useContext } from "react";
import { Context } from "./context/Context";
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
    const { user } = useContext(Context);

    return (
        <>
            <Router>
                <Routes>
                    <Route exact path={`/`} element={user? <Dashboard /> : <Login />} />
                    <Route exact path={`/login`} element={user? <Dashboard /> : <Login />} />
                    <Route index path={`/register`} element={<AccountCreation/>} />
                    <Route path={`/join-team`} element={<JoinTeam/>} />
                    
                    {/* Login */}
                    {/* Join team */}
                    {/* Choose plan */}
                    {/* Account Creation */}
                    {/* Dashboard */}


                    {/* <Route path={`/`} element={<Test/>} /> */}
                    {/* <Route index path={`/`} element={user? <Test /> : <AccountCreation /> } /> 
                    <Route path={`/dashboard`} element={!user? <AccountCreation /> : <Test />} /> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;
