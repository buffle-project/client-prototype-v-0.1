// style imports
import './App.css';
import 'antd/dist/antd.min.css';

// Redux imports
import { useSelector, useDispatch } from 'react-redux';

// pages imports
import Login from './pages/Login/Login';
import Test from './pages/Test/Test';

// utils
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
    const user = useSelector((state) => state.userSlice.user)
    const dispatch = useDispatch()

    return (
        <>
            <Router>
                <Routes>
                    <Route index path={`/`} element={user.email? <Test /> : <Login /> } /> 
                    <Route path={`/login`} element={user.email? <Test /> : <Login />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
