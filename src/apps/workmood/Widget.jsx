// react core imports
import React from "react";

// antd imports
import { Space, Image, notification, Input, Button } from "antd";

// utils imports
import { styles } from "./utils/styles";
import brain from "../../img/png/brain.png";

// components imports
import WidgetMenu from "../../components/WidgetMenu";
import TitleWithLogo from "../../components/TitleWithLogo";
import MoodInput from "./components/MoodInput";

export default function Widget() {
  return (
    <>
      <div style={styles.widgetContainer}>
        <div style={styles.widgetTopbar}>
          <TitleWithLogo
            title={"Workmood"}
            src={brain}
            width={35}
            height={35}
          />
          <WidgetMenu plusLink={"/apps/workmood"} moreLink={"/apps/workmood"} />
        </div>

        <div style={styles.widgetMoodInput}>
          <MoodInput />
        </div>
        <div></div>
      </div>
    </>
  );
}
