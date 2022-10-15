// Ract core imports
import React, {useState} from "react";

// antd imports
import { Typography, Form, Image, Button, Input, Space, notification } from "antd";

// redux imports
import { useSelector, useDispatch } from 'react-redux';
import { setUser, deleteUser, setUserBetter } from '../../context/slices/userSlice';

// utils imports
import styles from "./styles";
import { AccountCreationText } from "../../utils/staticText";
import LogoPurple from "../../img/png/logoPurple.png";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import API from '../../utils/api';
import { useNavigate } from 'react-router-dom';


function AccountCreation() {
	const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [lastName, setLastName] = useState('');
	const dispatch = useDispatch();
    const navigate = useNavigate();


	// Notifications
    const openNotificationSuccess = (name) => {
        notification.open({
            message: 'Authentication Successful!',
            description: `Welcome to Buffle ${name}!`
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
			password: password,
			username: username,
			lastName: lastName
		})
		.then((res)=>{
			dispatch(setUser(res.data.email))
            openNotificationSuccess(res.data.username);
		})
		.catch((error) => {
            console.log("There's been an error:")
            console.log(error)
            openNotificationFailure();
        })
	};

	// handlers
	const handleRegister = () => {
		console.log("Starting the Register process");
		registerUser();
	}


  return (
    <>
      <div className="gradient-background">
        {/* Add div with absolute position */}
        <div className="wrapper">
          {/* Text block */}
          <div style={styles.textWrapper}>
            <Typography style={styles.textHeadline}>
              {AccountCreationText.title}
            </Typography>
            <Typography style={styles.textParagraph}>
              {AccountCreationText.paragraph}
            </Typography>
          </div>

          {/* Form block*/}
          <div style={styles.formWrapper}>
            <Form
              layout="vertical"
              style={styles.form}
              onFinish={handleRegister}
              onFinishFailed={openNotificationFailure}
            >
              {/* Title section */}
              <Form.Item style={styles.formItem}>
                <div style={styles.formHeader}>
                  <Image preview={false} src={LogoPurple} width={140} />
                  <span style={styles.formHeaderBrand}>Teams®</span>
                  <span style={styles.formHeaderText}>
                    Explore our way of working
                  </span>
                </div>
              </Form.Item>

              {/* Email and Password */}
              <Form.Item style={styles.formItem}>
				<div style={styles.emailSection}>
					<span>Give us an Email and a Password (better be strong one)</span>
					<Input 
						style={styles.input}
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input.Password
						style={styles.input}
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
						iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
					/>
				</div>
			  </Form.Item>

              {/* username and lastName */}
              <Form.Item style={styles.formItem}>
                <div style={styles.nameSection}>
                  <span >How should we call you?</span>
                  <Space direction="horizontal">
                    <Input 
						style={styles.input}
						placeholder="Username"
						onChange={(e) => setUsername(e.target.value)}
					/>
                    <Input 
						style={styles.input}
						placeholder="Your other name"
						onChange={(e) => setLastName(e.target.value)}
					/>
                  </Space>
                </div>
              </Form.Item>

              {/* Next button */}
              <Form.Item style={styles.formItem}>
                <div style={styles.formButtonStartWrapper}>
                  <Button
                    style={styles.formButtonStart}
                    size="large"
                    htmlType="submit"
                  >
                    Next
                  </Button>
                </div>
              </Form.Item>
            </Form>

            <Typography style={styles.textLegal}>
              {AccountCreationText.legal}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountCreation;
