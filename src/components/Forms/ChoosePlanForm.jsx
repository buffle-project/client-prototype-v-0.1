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
import { legalText, ChoosePlanText } from "../../utils/staticText";
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

function ChoosePlanForm() {
  const navigate = useNavigate();
  return (
    <>
      <div style={styles.formWrapper}>
        <Form
          layout="vertical"
          style={styles.form}
          onFinish={`handleRegister`}
          onFinishFailed={`openNotificationFailure`}
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

          {/* Info Text */}
          <Form.Item style={styles.formItem}>
            <Typography style={styles.formHeaderText}>
              Pick between these:
            </Typography>
          </Form.Item>

          {/* Plans wrapper */}
          <Form.Item style={styles.formItem}>
            <div style={styles.planWrapper}>
              {/* Free plan */}
              <div style={styles.planBox}>
                <Typography
                  style={styles.planTitleText}
                >{`Free Plan`}</Typography>
                {/* Bullet points */}
                <div style={styles.planBulletPoints}>
                  <Typography
                    style={styles.planDescriptionText}
                  >{`Up to 5 People`}</Typography>
                  <Typography
                    style={styles.planDescriptionText}
                  >{`Access to all apps`}</Typography>
                  <Typography
                    style={styles.planDescriptionText}
                  >{`Access anytime, anywhere`}</Typography>
                </div>

                <Button
                  style={styles.chooseButton}
                  onClick={() => navigate("/create-team")}
                  size="large"
                >
                  Go for Free
                </Button>
                {/* <Typography>{ChoosePlanText.freePlanDescription}</Typography> */}
              </div>

              {/* Premium plan */}
              <div style={styles.planBox}>
                <Typography
                  style={styles.planTitleText}
                >{`Premium Plan`}</Typography>
                {/* Bullet points */}
                <div style={styles.planBulletPoints}>
                  <Typography
                    style={styles.planDescriptionText}
                  >{`Unlimited number of People`}</Typography>
                  <Typography
                    style={styles.planDescriptionText}
                  >{`Access to all apps`}</Typography>
                  <Typography
                    style={styles.planDescriptionText}
                  >{`Dedicated Buffle subdomain`}</Typography>
                </div>

                <Button
                  style={styles.chooseButtonDisabled}
                  onClick={() => navigate("/create-team")}
                  size="large"
                  disabled={true}
                >
                  Coming soon
                </Button>
                {/* <Typography>{ChoosePlanText.freePlanDescription}</Typography> */}
              </div>
            </div>
          </Form.Item>

          {/* Go back */}
          <Form.Item style={styles.formItem}>
            <Typography style={styles.loginText}>
              Someone invited you while you were choosing?
            </Typography>
            <Link to={`/join-team`}>
              <Typography style={styles.loginText}>
                Click here to go back!
              </Typography>
            </Link>
          </Form.Item>
        </Form>

        <Typography style={styles.textLegal}>{legalText}</Typography>
      </div>
    </>
  );
}

export default ChoosePlanForm;
