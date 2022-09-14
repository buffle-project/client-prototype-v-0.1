const purple = '#1B2559';


const styles = {
    container: {
        background: '#FFFFFF',
        borderRadius: "20px",
        boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.25)',
        padding: '13px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // TEMP HERE
        width: '50%',
    },
    // Header section
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerTitleSection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTitle: {
        marginLeft: '5px',
        color: purple,
        fontSize: '20px',
        fontWeight: '700',
    },
    headerButton: {
        fontSize: '30px',
        color: '#1B2559',
        cursor: 'pointer',
    },
    // Links & Table section - it will be a separate component
    content: {

    },

}

export default styles;