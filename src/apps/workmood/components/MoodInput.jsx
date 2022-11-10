import { useState, useEffect } from "react";
import { Space, Image, Input, notification } from "antd";

import { styles } from "../utils/styles";

import emoji1 from "../../../img/png/emoji1.png";
import emoji2 from "../../../img/png/emoji2.png";
import emoji3 from "../../../img/png/emoji3.png";
import emoji4 from "../../../img/png/emoji4.png";
import emoji5 from "../../../img/png/emoji5.png";

function MoodInput() {
  const [comment, setComment] = useState(null);

  // notifs
  const openNotificationSuccess = () => {
    notification.open({
      message: "Feeling submitted!",
      style: {
        borderRadius: "8px",
        boxShadow: "5px 5px 22px rgba(0, 0, 0, 0.05)",
      },
    });
  };

  /**
   * @param {Number} recordValue - number from [1,5] range, describing the numerical value of the feeling
   */
  const handleEmojiClick = (recordValue) => {
    openNotificationSuccess(comment? comment : "");
    setComment(null);
  };

  return (
    <>
      <Space direction="vertical">
        <Space direction="horizontal" size={20} align="center">
          <Image
            src={emoji1}
            preview={false}
            width={40}
            onClick={handleEmojiClick}
            style={styles.widgetImage}
          />

          <Image
            src={emoji2}
            preview={false}
            width={40}
            onClick={handleEmojiClick}
            style={styles.widgetImage}
          />

          <Image
            src={emoji3}
            preview={false}
            width={40}
            onClick={handleEmojiClick}
            style={styles.widgetImage}
          />

          <Image
            src={emoji4}
            preview={false}
            width={40}
            onClick={handleEmojiClick}
            style={styles.widgetImage}
          />

          <Image
            src={emoji5}
            preview={false}
            width={40}
            onClick={handleEmojiClick}
            style={styles.widgetImage}
          />
        </Space>

        <Input
          style={styles.widgetTextInput}
          placeholder="Add a note to the Feeling"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          maxLength={1024}
        />
      </Space>
    </>
  );
}

export default MoodInput;
