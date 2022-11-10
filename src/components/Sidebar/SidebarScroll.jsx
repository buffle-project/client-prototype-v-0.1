// React core imports
import React from "react";

// components imports
import BoxContainer from "../BoxContainer";

// antd imports
import { Image, Tooltip } from "antd";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

// utils imports
import { colors } from "../../utils/colors";
import { Link } from "react-router-dom";

// img imports
import brain from "../../img/png/brain.png";
import check from "../../img/png/check.png";
import drop from "../../img/png/drop.png";
import moneybag from "../../img/png/moneybag.png";
import party from "../../img/png/party.png";
import notepad from "../../img/png/notepad.png";
import target from "../../img/png/target.png";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(175, 175, 175, 0.2)",
    width: 70,
    boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.25)",
    borderRadius: "75px",
    padding: "5px",
  },
};

/**
 *
 * @param {Object []} props.apps - an array of strings containing the names of the apps
 * @returns A scrollbar with icons, each representing one of the user's Buffle apps
 *
 * TODO: everything is hard coded now, make it dynamic later on
 */
function SidebarScroll(props) {
  return (
    <>
      <div style={styles.container}>
        <UpOutlined style={{ color: colors.purple, fontSize: 20 }} />

        <Link to="/apps/workmood">
          <BoxContainer>
            <Tooltip
              title="Workmood App"
              color={colors.purple}
              placement="right"
            >
              <Image
                src={brain}
                preview={false}
                width={50}
                style={{
                  marginTop: 10,
                }}
              />
            </Tooltip>
          </BoxContainer>
        </Link>

        <BoxContainer>
          <Image
            src={check}
            preview={false}
            width={40}
            style={{
              marginTop: 5,
            }}
          />
        </BoxContainer>

        <BoxContainer>
          <Image
            src={drop}
            preview={false}
            width={35}
            style={{
              marginTop: 10,
            }}
          />
        </BoxContainer>

        <BoxContainer>
          <Image
            src={moneybag}
            preview={false}
            width={35}
            style={{
              marginTop: 5,
            }}
          />
        </BoxContainer>

        <BoxContainer>
          <Image
            src={party}
            preview={false}
            width={50}
            style={{
              marginTop: 5,
            }}
          />
        </BoxContainer>

        <BoxContainer>
          <Image
            src={notepad}
            preview={false}
            width={40}
            style={{
              marginTop: 5,
            }}
          />
        </BoxContainer>

        <BoxContainer>
          <Image
            src={target}
            preview={false}
            width={50}
            style={{
              marginTop: 10,
              marginLeft: 2,
            }}
          />
        </BoxContainer>
        <DownOutlined style={{ color: colors.purple, fontSize: 20 }} />
      </div>
    </>
  );
}

export default SidebarScroll;
