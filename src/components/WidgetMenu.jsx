import { Space, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { colors } from "../utils/colors";

// icons imports
import { PlusOutlined, MoreOutlined } from "@ant-design/icons";

/**
 * @prop {Boolean} plusIcon - you can choose if this is true/false, by default is true
 * @prop {Boolean} moreIcon - you can choose if this is true/false, by default is true
 * @prop {Number} iconSize - the size of menu icons in pixels, default is 20
 * @prop {String} plusLink - url to navigate to on click of the plus icon, default is empty string
 * @prop {String} moreLink - url to navigate to on click of the more icon, default is empty string
 */
function WidgetMenu(props) {
  const iconSize = props.iconSize || 20;
  const plusIcon = props.plusIcon || true;
  const moreIcon = props.moreIcon || true;
  const plusLink = props.plusLink || "";
  const moreLink = props.plusLink || "";

  return (
    <>
      <Space direction="horizontal">
        {plusIcon && (
          <>
            <Tooltip title="Add" color={colors.purple}>
              <Link to={plusLink}>
                <PlusOutlined
                  style={{
                    fontSize: iconSize,
                    cursor: "pointer",
                    color: colors.purple,
                  }}
                />
              </Link>
            </Tooltip>
          </>
        )}
        {moreIcon && (
          <>
            <Tooltip title="More" color={colors.purple}>
              <Link to={moreLink}>
                <MoreOutlined
                  style={{
                    fontSize: iconSize,
                    cursor: "pointer",
                    color: colors.purple,
                  }}
                />
              </Link>
            </Tooltip>
          </>
        )}

        {/* {props.addIcon && props.addIcon === true ? (
          <PlusOutlined style={{ fontSize: iconSize, cursor: 'pointer' }} />
        ) : (
          ""
        )}
        {props.moreIcon && props.moreIcon === true ? (
          <MoreOutlined style={{ fontSize: iconSize, cursor: 'pointer' }} />
        ) : (
          ""
        )} */}
      </Space>
    </>
  );
}

export default WidgetMenu;
