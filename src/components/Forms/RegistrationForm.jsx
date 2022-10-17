// React core imports
import React, { useState, useContext } from "react";

// Antd imports
import {
  Typography,
  Form,
  Image,
  Button,
  Input,
  Space,
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

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const { dispatch, isFetching } = useContext(Context);
  const navigate = useNavigate();

  // Notifications
  const openNotificationSuccess = (name) => {
    notification.open({
      message: "Registration Successful!",
      description: `Welcome to Buffle ${name}!`,
      style: {
        borderRadius: "8px",
        boxShadow: "5px 5px 22px rgba(0, 0, 0, 0.05)",
      },
    });
  };

  const openNotificationFailure = () => {
    notification.open({
      message: "Registration Failure",
      description: `Sorry, there's been an error`,
      style: {
        borderRadius: "8px",
        boxShadow: "5px 5px 22px rgba(0, 0, 0, 0.05)",
      },
    });
  };

  // API calls
  async function registerUser() {
    dispatch({type: "REGISTRATION_START"});
    try {
      const response = await API.post("/register", {
        email: email,
        password: password,
        username: username,
        lastName: lastName,
      });
      openNotificationSuccess(response.data.username);
      dispatch({ type: "REGISTRATION_FAILURE", payload: response.data });
    } catch (error) {
      dispatch({ type: "REGISTRATION_FAILURE" });
      openNotificationFailure();
      console.log(error);
    }
  };

  // handlers
  const handleRegister = () => {
    console.log("Starting the Register process");
    registerUser();
  };

  return (
    <>
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
              <span>
                Give us an Email and a Password (better be strong one)
              </span>
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

          {/* username and lastName */}
          <Form.Item style={styles.formItem}>
            <div style={styles.nameSection}>
              <span>How should we call you?</span>
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
              {isFetching ? (
                <Spin indicator={loadingIcon} />
              ) : (
                <Button
                  style={styles.formButtonStart}
                  size="large"
                  htmlType="submit"
                >
                  Next
                </Button>
              )}
            </div>
          </Form.Item>

          {/* Login Link */}
          <Form.Item style={styles.formItem}>
            <Typography style={styles.loginText}>
              Already have an account?
            </Typography>
            <Link to={`/login`}>
              <Typography style={styles.loginText}>
                Click here to Log in
              </Typography>
            </Link>
          </Form.Item>
        </Form>

        <Typography style={styles.textLegal}>{legalText}</Typography>
      </div>
    </>
  );
}

export default RegistrationForm;
