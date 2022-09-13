// React core imports
import React, { useState, useEffect } from 'react';

// antd imports
import { Form, Button, Input, Image, Space, notification, Typography } from 'antd';

// Redux imports
import { useSelector, useDispatch } from 'react-redux';
import { setUser, deleteUser, setUserBetter } from '../../context/slices/userSlice';

// utils imports
import { textHeadline, textParagraph, textLegal } from './staticText';
import LogoPurple from '../../img/png/logoPurple.png';
import Google from '../../img/png/googleicon.png';
import API from '../../utils/api';
import styles from './styles';
import './login.css';



function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [validationStatus, setValidationStatus] = useState('');
    const dispatch = useDispatch()


    // Notifications
    const openNotificationSuccess = (name) => {
        notification.open({
            message: 'Authentication Successful!',
            description: `Welcome back to Buffle ${name}!`
        });
    };

    const openNotificationFailure = () => {
        notification.open({
            message: 'Authentication Failure',
            description: `Sorry, we couldn't log you in. Try again with a different combination!`
        });
    };


    // API calls
    async function registerUser() {
        await API.post('/register', {
            email: email,
            name: name,
        })
        .then((res) => {
            setName(res.data.name);
            setEmail(res.data.email);
            dispatch(setUser(res.data))
        })
        .catch((error) => {
            console.log(error)
        })
    }

    async function loginUser() {
        await API.post('/login', {
            email: email
        })
        .then((res) => {
            setName(res.data.name);
            setEmail(res.data.email);
            dispatch(setUser(res.data))
            // dispatch(setUserBetter());
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const handleLogin = () => {
        console.log("Starting the login")
        loginUser();
    }


    // Functions and Handlers
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleEmailChange = (email) => {
        if (validateEmail(email)) {
            setEmail(email);
            setIsValidEmail(true);
        } else {
            setIsValidEmail(false);
        }
    }

    useEffect(() => {
        if (isValidEmail === true) {
            setValidationStatus('');
        } else (
            setValidationStatus('error')
        )
    }, [isValidEmail])



    return (
        <>
            <div className='login-container'>
                <div className='wrapper'>

                    {/* Text block */}
                    <div style={styles.textWrapper}>
                        <Typography style={styles.textHeadline}>
                            {textHeadline}
                        </Typography>
                        <Typography style={styles.textParagraph}>
                            {textParagraph}
                        </Typography>
                    </div>

                    {/* Login form */}
                    <div style={styles.formWrapper}>
                        <Form
                            layout='vertical'
                            style={styles.form}
                            onFinish={handleLogin}
                            onFinishFailed={``}

                        >
                            {/* Title section */}
                            <Form.Item style={styles.formItem}>
                                <div style={styles.formHeader}>
                                    <Image
                                        preview={false}
                                        src={LogoPurple}
                                        width={140}
                                        style={{
                                            marginBottom: '10px'
                                        }}
                                    />
                                    <span style={styles.formHeaderText}>Explore our way of working</span>
                                </div>
                            </Form.Item>

                            {/* Name section */}
                            <Form.Item style={styles.formItem}>
                                <Input
                                    placeholder={`What's your name?`}
                                    style={styles.formInputName}
                                    maxLength={30}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    bordered={false}
                                    size='large'
                                />
                            </Form.Item>

                            {/* Email section */}
                            <Form.Item style={styles.formItem} rules={[{ required: true, message: 'Please input your e-mail!', }]}>
                                <div style={styles.formInputGroupWrapper}>
                                    <Input
                                        placeholder={`Enter an e-mail`}
                                        style={styles.formInputEmail}
                                        maxLength={80}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        bordered={false}
                                        size='large'
                                        status={validationStatus}
                                    />
                                    <span style={{ margin: 20 }}>or</span>
                                    <button
                                        style={styles.formButtonGoogle}
                                        onClick={``}
                                    >
                                        <Image
                                            preview={false}
                                            src={Google}
                                            width={20}
                                        />
                                    </button>
                                </div>
                            </Form.Item>

                            {/* Start Button Section */}
                            <Form.Item style={styles.formItem}>
                                <div style={styles.formButtonStartWrapper}>
                                    <Button
                                        style={styles.formButtonStart}
                                        size='large'
                                        htmlType="submit"
                                    >
                                        Start
                                    </Button>
                                </div>
                            </Form.Item>
                        </Form>

                        <Typography style={styles.textLegal}>
                            {textLegal}
                        </Typography>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login