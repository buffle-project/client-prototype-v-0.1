import { colors, textColors } from '../../utils/colors';

const styles = {
    textWrapper: {
        maxWidth: "30%"
    },
    textHeadline: {
        color: colors.purple,
        fontSize: '60px',
        fontWeight: '700',
        marginBottom: '20px',
        lineHeight: '60px'
    },
    textParagraph: {
        maxWidth: "75%",
        color: colors.purple,
        fontSize: '18px',
        fontWeight: '500',
        letterSpacing: '1px',
    },
    textLegal: {
        color: textColors.purple,
        fontSize: '11px',
        fontWeight: '400',
    },
    // Form related styles ------------
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
        color: colors.purple,
        fontWeight: '400',
        fontSize: '14px'
    },
    formHeaderBrand: {
        color: colors.purple,
        fontWeight: '600',
        fontSize: '20px'
    },
    formButtonStartWrapper: {
        dispay: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formButtonStart: {
        color: 'white',
        background: 'radial-gradient(100% 682.41% at 4.04% 0%, #8286FF 0%, #4922FF 100%)',
        border: 'none',
        borderRadius: '8px',
        width: '200px',
        //box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 3px 8px',
    },
    notification: {
        borderRadius: '8px',
        boxShadow: '5px 5px 22px rgba(0, 0, 0, 0.05)', 
    },
    input: {
        borderRadius: '8px',
        boxShadow: '5px 5px 22px rgba(0, 0, 0, 0.05)',
        border: 'none',
        marginTop: 15,
    },
    inputFullWidth: {
        borderRadius: '8px',
        boxShadow: '5px 5px 22px rgba(0, 0, 0, 0.05)',
        border: 'none',
        marginTop: 15,
        width: '100%'
    },
    // Username and Lastname section -------------------
    nameSection: {
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    // Email and Password section -------------------
    emailSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
    
};

export default styles;