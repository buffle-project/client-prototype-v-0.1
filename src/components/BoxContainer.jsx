import React from 'react';

/**
 * This Component allows you to wrap anything in a box
 * container with some of the buffle specific design styles
 * 
 * Default values are:
 * width: 50
 * 
 * @param {Number} width - specifies the width of the container in pixels
 * @param {Number} height - specifies the height of the container in pixels
 * 
 * TODO - create default values and make them overridable by props
 */
function BoxContainer(props) {
    return (
        <>
            <div style={{
                width: props.width,
                height: props.height,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F4F7FE',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '17px'

            }}>
                {props.children}
            </div>
        </>
    )
}

export default BoxContainer;