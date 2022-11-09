import { Space } from "antd";

// icons imports
import { PlusOutlined, MoreOutlined } from "@ant-design/icons";

/**
 * @prop {Boolean} addIcon - you can choose if this is true/false, by default is true
 * @prop {Boolean} moreIcon - you can choose if this is true/false, by default is true
 * @prop {Number} iconSize - the size of menu icons in pixels, default is 20
 */
function WidgetMenu(props) {
  const iconSize = props.iconSize || 20;
  const addIcon = props.addIcon || true;
  const moreIcon = props.moreIcon || true; 
  return (
    <>
      <Space direction="horizontal">
        {addIcon && 
          <PlusOutlined style={{ fontSize: iconSize, cursor: 'pointer' }} />        
        }
        {moreIcon &&
          <MoreOutlined style={{ fontSize: iconSize, cursor: 'pointer' }} />
        }

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
