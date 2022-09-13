// React core imports
import React, { useState, useEffect } from 'react';

// antd imports
import { Form, Button, Input, Image, Space } from 'antd';
import { Typography } from 'antd';

// Redux imports
import { useSelector, useDispatch } from 'react-redux';
import { setUser, deleteUser } from '../../context/slices/userSlice';

// utils imports
import { textHeadline, textParagraph, textLegal } from './staticText';
import styles from './styles';
import './login.css'
import LogoPurple from '../../img/png/logoPurple.png'
import Google from '../../img/png/googleicon.png'




function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isEmail, setIsEmail] = useState(false)
    const dispatch = useDispatch()

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(setUser());
    }

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
                            <Form.Item style={styles.formItem}>
                                <div style={styles.formInputGroupWrapper}>
                                    <Input
                                        placeholder={`Enter an e-mail`}
                                        style={styles.formInputEmail}
                                        maxLength={80}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        bordered={false}
                                        size='large'

                                    />
                                    <span style={{margin: 20}}>or</span>
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
                                        onClick={handleLogin}
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