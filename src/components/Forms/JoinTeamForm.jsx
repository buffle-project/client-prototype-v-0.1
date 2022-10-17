// React core imports
import React, { useState, useContext } from "react";

// antd imports
import { Form, Image, Typography, Button, Input, notification } from "antd";

// context imports
import {Context} from '../../context/Context';

// utils imports
import styles from "./styles";
import LogoPurple from "../../img/png/logoPurple.png";
import { legalText } from "../../utils/staticText";
import {
  LoadingOutlined,
} from "@ant-design/icons";
import API from "../../utils/api";
import { Link, useNavigate } from "react-router-dom";

function JoinTeamForm() {
  const [invitationCode, setInvitationCode] = useState('');
  const { user, isFetching, dispatch } = useContext(Context);
	// Notifications
	const openNotificationSuccess = (teamName) => {
		notification.open({
		  message: "Joined Successfully!",
		  description: `Successfully joined the Team: ${teamName}`,
		  style: {
			borderRadius: "8px",
			boxShadow: "5px 5px 22px rgba(0, 0, 0, 0.05)",
		  },
		});
	  };
	
	  const openNotificationFailure = () => {
		notification.open({
		  message: "Failed to Join",
		  description: `Sorry, there's been an error`,
		  style: {
			borderRadius: "8px",
			boxShadow: "5px 5px 22px rgba(0, 0, 0, 0.05)",
		  },
		});
	  };

	// API calls
	async function joinTeam() {
		try {
      await API.post("/join-team", {

      })
    } catch (error) {

    };
	};

  // handlers
  const handleJoinTeam = () => {
    console.log(invitationCode);
    console.log(user);
  };

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
          <Form.Item style={styles.formItem}>
            {/* <Typography style={styles.teamCodeText}>
              {`Check you'r email for a Team invitation code`}
            </Typography> */}
            <div style={styles.teamCodeInputSection}>
              <Input
                style={styles.teamCodeInput}
                placeholder="6 character code"
                onChange={(e) => setInvitationCode(e.target.value)}
              />
              <Button 
                style={styles.teamCodeButton}
                onClick={handleJoinTeam}
              >
                Join
              </Button>
            </div>
          </Form.Item>

          {/* Or text :D */}
          <Form.Item style={styles.formItem}>
            <Typography style={styles.orText}>{`or`}</Typography>
          </Form.Item>

          {/* Create team button */}
          <Form.Item style={styles.formItem}>
            <div style={styles.formButtonStartWrapper}>
              <Link to={`/choose-plan`}>
                <Button
                  style={styles.formButtonStart}
                  size="large"
                >
                  Create a Team
                </Button>
              </Link>
            </div>
          </Form.Item>

          
        </Form>

        <Typography style={styles.textLegal}>{legalText}</Typography>
      </div>
    </>
  );
}

export default JoinTeamForm;
