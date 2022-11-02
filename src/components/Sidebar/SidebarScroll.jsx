// React core imports
import React from 'react';

// components imports
import BoxContainer from '../BoxContainer';

// antd imports
import { Image } from 'antd';

// img imports
import arrowUp from './img/arrowup.png';
import arrowDown from './img/arrowdown.png';
import brain from './img/brain.png';
import check from './img/check.png';
import drop from './img/drop.png';
import moneybag from './img/moneybag.png';
import party from './img/party.png';
// import portugal from './img/portugal.png';
import notepad from './img/notepad.png';
import target from './img/target.png';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(175, 175, 175, 0.2)',
        width: 70,
        boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.25)',
        borderRadius: '75px',
        padding: '5px'
    }
}

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
                <Image
                    src={arrowUp}
                    preview={false}
                    width={15}
                />

                <BoxContainer>
                    <Image
                        src={brain}
                        preview={false}
                        width={50}
                        style={{
                            marginTop: 10
                        }}
                    />
                </BoxContainer>

                <BoxContainer>
                    <Image
                        src={check}
                        preview={false}
                        width={40}
                        style={{
                            marginTop: 5
                        }}
                    />
                </BoxContainer>

                <BoxContainer>
                    <Image
                        src={drop}
                        preview={false}
                        width={35}
                        style={{
                            marginTop: 10
                        }}
                    />
                </BoxContainer>

                <BoxContainer>
                    <Image
                        src={moneybag}
                        preview={false}
                        width={35}
                        style={{
                            marginTop: 5
                        }}
                    />
                </BoxContainer>

                <BoxContainer>
                    <Image
                        src={party}
                        preview={false}
                        width={50}
                        style={{
                            marginTop: 5
                        }}
                    />
                </BoxContainer>

                <BoxContainer>
                    <Image
                        src={notepad}
                        preview={false}
                        width={40}
                        style={{
                            marginTop: 5
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
                            marginLeft: 2
                        }}
                    />
                </BoxContainer>

                <Image
                    src={arrowDown}
                    preview={false}
                    width={15}
                />
            </div>
        </>
    )
}

export default SidebarScroll;