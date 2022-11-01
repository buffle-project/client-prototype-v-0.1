import React, { useState } from 'react';

/**
 * This Component allows you to wrap anything in a box
 * container with some of the buffle specific design styles
 * 
 * Default values are:
 * width: 50
 * height: 50
 * marginTop: 15
 * marginBottom: 15
 * 
 * @param {Number} width - specifies the width of the container in pixels
 * @param {Number} height - specifies the height of the container in pixels
 * @param {Number} marginTop 
 * @param {Number} marginBottom
 * 
 * TODO - create default values and make them overridable by props
 */
function BoxContainer(props) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <>
            <div style={{
                width: props.width? props.width : 50,
                height: props.height? props.height : 50,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isHovering? '#CFDDFE' : '#F4F7FE',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '17px',
                marginTop: props.marginTop? props.marginTop : 15,
                marginBottom: props.marginBottom? props.marginBottom : 15,
                cursor: isHovering? 'pointer' : '',
            }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {props.children}
            </div>
        </>
    )
}

export default BoxContainer;