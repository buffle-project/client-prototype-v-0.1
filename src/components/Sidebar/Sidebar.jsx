// React core imports
import React from 'react';

// components imports
import BoxContainer from '../BoxContainer';

// styling object
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '160px',
    height: '100vh',
    backgroundColor: 'white',
    boxShadow: '5px 0px 10px rgba(0, 0, 0, 0.25)',
    alignItems: 'center'
  }
}




function Sidebar() {


  return (

    <>
      <div style={styles.container}>
        <div>
          Home
        </div>
        <div>
          <BoxContainer width={50} height={50}>
            
          </BoxContainer>
        </div>
      </div>
    </>
  )
}

export default Sidebar