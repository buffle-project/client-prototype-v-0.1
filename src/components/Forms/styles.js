import { colors } from '../../utils/colors';

const styles = {
    textLegal: {
        color: colors.lightGrey,
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
    },
    loginText: {
        color: colors.lightGrey,
        fontSize: '11px',
        fontWeight: '400',
    },

    // JoinTeamForm styles
    teamCodeText: {
        color: colors.purple,
        fontWeight: '600',
        fontSize: '14px',
        marginBottom: '7px',
        marginTop: '7px',
    },
    orText: {
        color: colors.purple,
        fontSize: '20px',
        fontWeight: '600',
    },
    teamCodeInputSection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    teamCodeInput: {
        borderRadius: '8px',
        boxShadow: '5px 5px 22px rgba(0, 0, 0, 0.05)',
        border: 'none',
        width: '70%'
    },
    teamCodeButton: {
        color: 'white',
        background: 'radial-gradient(100% 682.41% at 4.04% 0%, #8286FF 0%, #4922FF 100%)',
        border: 'none',
        borderRadius: '8px',
        width: '30%',
        boxShadow: 'rgba(0, 0, 0, 0.3) 0px 3px 8px',
        marginLeft: '5px'
    },

    // choose plan styles ----------
    planWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    planBox: {
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '10px',
        boxShadow: '5px 5px 22px rgba(0, 0, 0, 0.2)',
        border: 'none',
        width: '45%',
        height: '250px'
    },
    chooseButton: {
        color: 'white',
        background: 'radial-gradient(100% 682.41% at 4.04% 0%, #8286FF 0%, #4922FF 100%)',
        border: 'none',         
        borderRadius: '8px',
        boxShadow: 'rgba(0, 0, 0, 0.3) 0px 3px 8px',
        margin: '10px'
    },
    chooseButtonDisabled: {
        color: 'white',
        background: 'radial-gradient(100% 682.41% at 4.04% 0%, #A9A9A9 0%, #696969 100%)',
        border: 'none',         
        borderRadius: '8px',
        boxShadow: 'rgba(0, 0, 0, 0.3) 0px 3px 8px',
        margin: '10px'
    },
    planTitleText: {
        color: colors.purple,
        fontSize: '24px',
        fontWeight: '600',
    },
    planDescriptionText: {
        color: colors.lightGrey,
        fontSize: '15px',
        fontWeight: '400',
        padding: '3px'
    },
    planBulletPoints: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    }
};

export default styles;