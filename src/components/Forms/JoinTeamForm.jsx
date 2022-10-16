// React core imports
import React from "react";

// antd imports
import { Form, Image, Typography } from "antd";

// utils imports
import styles from "./styles";
import LogoPurple from "../../img/png/logoPurple.png";
import { legalText } from "../../utils/staticText";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LoadingOutlined,
} from "@ant-design/icons";
import API from "../../utils/api";
import { useNavigate } from "react-router-dom";

function JoinTeamForm() {
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

          {/* Team code section */}
          <Form.Item style={styles.formItem}></Form.Item>

		  {/* Or text :D */}
          <Form.Item style={styles.formItem}>
			<Typography style={styles.orText}>{`or`}</Typography>
		  </Form.Item>

          {/* Create team button */}
          <Form.Item style={styles.formItem}></Form.Item>
        </Form>

        <Typography style={styles.textLegal}>{legalText}</Typography>
      </div>
    </>
  );
}

export default JoinTeamForm;
