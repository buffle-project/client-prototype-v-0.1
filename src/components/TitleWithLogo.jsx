import { Image, Typography, Space } from 'antd';
import { colors } from '../utils/colors';

/**
 * @prop {String} props.direction - direction of the layout, horizontal / vertical - default is horizontal
 * @prop {Object} props.src - image source for the logo
 * @prop {String} props.title - title to be displayed
 * @prop {Number} props.width - width of the image
 * @prop {Number} props.height - height of the images
 * @prop {Number} props.fontSize - fontSize of the title, default is 20
 * @returns Logo with a title 
 */
function TitleWithLogo (props) {
    const fontSize = props.fontSize || 20;
    const direction = props.direction || "horizontal";
    return (
        <>
            <Space direction={direction} align='center'>
                <Image 
                    src={props.src}
                    preview={false}
                    width={props.width}
                    height={props.height}
                />
                <Typography
                    style={{
                        fontWeight: '700',
                        fontSize: fontSize,
                        color: colors.purple 
                    }}
                >{props.title}</Typography>
            </Space>
        </>
    )
};

export default TitleWithLogo;
