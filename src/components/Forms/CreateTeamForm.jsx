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
  List
} from "antd";

// utils imports
import styles from "./styles";
import { legalText } from "../../utils/staticText";
import LogoPurple from "../../img/png/logoPurple.png";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LoadingOutlined,
  CloseOutlined
} from "@ant-design/icons";
import API from "../../utils/api";
import { useNavigate, Link, Navigate } from "react-router-dom";

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

function CreateTeamForm() {
  const { isFetching, user, dispatch } = useContext(Context);
  const [inviteList, setInviteList] = useState([]);
  const [inviteEmail, setInviteEmail] = useState('');
  const [teamName, setTeamName] = useState('');
  const navigate = useNavigate();

  // Notifications
  const openNotificationSuccess = (name) => {
    notification.open({
      message: "Team Creation Successful!",
      description: `Successfully created ${name}!`,
      style: {
        borderRadius: "8px",
        boxShadow: "5px 5px 22px rgba(0, 0, 0, 0.05)",
      },
    });
  };

  const openNotificationFailure = () => {
    notification.open({
      message: "Team Creation Failure",
      description: `Sorry, there's been an error`,
      style: {
        borderRadius: "8px",
        boxShadow: "5px 5px 22px rgba(0, 0, 0, 0.05)",
      },
    });
  };

  // API Calls
  async function CreateTeam() {
    dispatch({type: "FETCH_START"});
    try{
        const res = await API.post('/teams/create-team', {
            email: user,
            teamName: teamName,
            pendingInvites: inviteList
        }); 
        // openNotificationSuccess(res.savedTeam.teamName);
        openNotificationSuccess(teamName);
        dispatch({type: "FETCH_END"});
        navigate('/');
    } catch(error) {
        dispatch({type: "FETCH_END"});
        console.log(error);
        openNotificationFailure();
    };
  };

  // handlers
  const handleCreateTeam = () => {
    console.log("Creating the team. Just a moment");
    CreateTeam();
  };

  const handleRemoveClick = (item) => {
    // figure this out idk
  };

  const handleInviteClick = () => {
    inviteList.push(inviteEmail);
    setInviteEmail('');
  };

  

  return (
    <>
      <div style={styles.formWrapper}>
        <Form
          layout="vertical"
          style={styles.form}
          onFinish={handleCreateTeam}
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

          {/* Team Name */}
          <Form.Item style={styles.formItem}>
            <Input
                style={styles.teamNameInput}
                placeholder="Enter a Team name"
                size="large"
                onChange={(e) => setTeamName(e.target.value)}
            /> 
          </Form.Item>

          {/* Description */}
          <Form.Item style={styles.formItem}>
            <Typography style={styles.formHeaderText}>
              Would you like to invite anyone to your team now?
            </Typography>
          </Form.Item>


          {/* Email and Button section */}
          <Form.Item style={styles.formItem}>
            <div style={styles.teamCodeInputSection}>
              <Input
                placeholder='Enter Email'
                style={styles.teamCodeInput}
                onChange={(e) => setInviteEmail(e.target.value)}
                value={inviteEmail}
              />
              <Button
                style={styles.teamCodeButton}
                onClick={handleInviteClick}
              >Invite</Button>
            </div>
          </Form.Item>

          {/* Mailing list */}
          <Form.Item style={styles.formItem}>
            <div style={styles.listContainer}>
                <List
                size="small"
                dataSource={inviteList}
                style={styles.list}
                renderItem={(item) => (
                    <List.Item
                        actions={[<CloseOutlined 
                            onClick={handleRemoveClick()}
                        />]}
                    >{item}</List.Item>
                )}
                />
            </div>
          </Form.Item>

          {/* Create button */}
          <Form.Item style={styles.formItem}>
            <div style={styles.formButtonStartWrapper}>
              <Button
                style={styles.formButtonStart}
                size="large"
                htmlType="submit"
                disabled={isFetching}
              >
                {isFetching ? <Spin indicator={loadingIcon} /> : "Create"}
              </Button>
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

export default CreateTeamForm;
