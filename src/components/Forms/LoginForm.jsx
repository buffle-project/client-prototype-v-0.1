// React core imports
import React, { useState, useContext } from "react";

// Antd imports
import {
  Typography,
  Form,
  Image,
  Button,
  Input,
  notification,
  Spin,
} from "antd";

// utils imports
import styles from "./styles";
import { legalText } from "../../utils/staticText";
import LogoPurple from "../../img/png/logoPurple.png";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LoadingOutlined,
} from "@ant-design/icons";
import API from "../../utils/api";
import { useNavigate, Link } from "react-router-dom";

// Context imports
import { Context } from "../../context/Context";

const loadingIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
      color: "#1B2559",
    }}
    spin
  />
);

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(Context);
  const navigate = useNavigate();


  // Notifications
  const openNotificationSuccess = (name) => {
    notification.open({
      message: "Login Successful!",
      description: `Welcome back to Buffle ${name}!`,
      style: {
        borderRadius: "8px",
        boxShadow: "5px 5px 22px rgba(0, 0, 0, 0.05)",
      },
    });
  };

  const openNotificationFailure = () => {
    notification.open({
      message: "Login Failure",
      description: `Sorry, there's been an error`,
      style: {
        borderRadius: "8px",
        boxShadow: "5px 5px 22px rgba(0, 0, 0, 0.05)",
      },
    });
  };

  const openNotificationNoTeam = (name) => {
    notification.open({
        message: "Login Successful!",
        description: `Looks like you still don't have a team ${name}. Lets fix that real quick!`,
        style: {
          borderRadius: "8px",
          boxShadow: "5px 5px 22px rgba(0, 0, 0, 0.05)",
        },
      });
  };

  // API calls
  async function loginUser() {
    dispatch({ type: "LOGIN_START" })
    try {
        const res = await API.post('/login', {
            email: email,
            password: password,
        });
        dispatch({type: "LOGIN_SUCCESS", payload: res.data.email});
        if(res.data.teams.length > 0) {
            openNotificationSuccess(res.data.username);
            navigate('/dashboard');
        } else {
            openNotificationNoTeam(res.data.username);
            navigate('/join-team');
        };
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      openNotificationFailure();
      console.log(error);
    }
  };

  // handlers
  const handleLogin = () => {
    console.log('Starting Login')
    loginUser();
  };

  return (
    <>
      <div style={styles.formWrapper}>
        <Form
          layout="vertical"
          style={styles.form}
          onFinish={handleLogin}
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
              <Typography style={styles.formHeaderText}>
                What was your Email and password again?
              </Typography>
              <Input
                style={styles.input}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input.Password
                style={styles.input}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </div>
          </Form.Item>

          {/* Next button */}
          <Form.Item style={styles.formItem}>
            <div style={styles.formButtonStartWrapper}>
              <Button
                style={styles.formButtonStart}
                size="large"
                htmlType="submit"
                disabled={isFetching}
              >
                {isFetching ? <Spin indicator={loadingIcon} /> : "Enter"}
              </Button>
            </div>
          </Form.Item>

          {/* Login Link */}
          <Form.Item style={styles.formItem}>
            <Typography style={styles.loginText}>
              Don't have an account?
            </Typography>
            <Link to={`/register`}>
              <Typography style={styles.loginText}>
                Click here to make one!
              </Typography>
            </Link>
          </Form.Item>
        </Form>

        <Typography style={styles.textLegal}>{legalText}</Typography>
      </div>
    </>
  );
}

export default LoginForm;
