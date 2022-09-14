const purple = '#1B2559'

const styles = {
    // Text related styles -----------------
    textWrapper: {
        maxWidth: "30%"
    },
    textHeadline: {
        color: purple,
        fontSize: '60px',
        fontWeight: '700',
        marginBottom: '20px'
    },
    textParagraph: {
        maxWidth: "75%",
        color: purple,
        fontSize: '18px',
        fontWeight: '500',
        letterSpacing: '1px',
    },
    textLegal: {
        color: '#7E94B7',
        fontSize: '11px',
        fontWeight: '400',
    },
    // Form related styles --------------
    formWrapper: {
        maxWidth: '30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        width: '90%',
        backgroundColor: 'white',
        boxShadow: '',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '32px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        padding: '50px',
        marginBottom: '30px',
    },
    formItem: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formHeader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    formHeaderText: {
        color: purple,
        fontWeight: '400',
        fontSize: '14px'
    },
    //name
    formInputName: {
        borderRadius: '8px',
        boxShadow: '5px 5px 22px rgba(0, 0, 0, 0.05)', 
        maxWidth: '100%'       
    },
    formInputGroupWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    formButtonStartWrapper: {
        dispay: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    //google
    formButtonGoogle: {
        width: '100%',
        height: '40px',
        borderRadius: '8px',
        boxShadow: '5px 5px 22px rgba(0, 0, 0, 0.05)',
        background: 'white',
        border: 'none',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    //email
    formInputEmail: {
        borderRadius: '8px',
        boxShadow: '5px 5px 22px rgba(0, 0, 0, 0.05)',
        border: 'none',
    },
    //start
    formButtonStart: {
        color: 'white',
        background: 'radial-gradient(100% 682.41% at 4.04% 0%, #8286FF 0%, #4922FF 100%)',
        border: 'none',
        borderRadius: '8px',
        width: '200px'
    },
    notification: {
        borderRadius: '8px',
        boxShadow: '5px 5px 22px rgba(0, 0, 0, 0.05)', 
    }
};

export default styles;
