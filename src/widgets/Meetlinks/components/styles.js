const purple = '#1B2559'

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    // Sections
    titleSection: {
        padding: '5px',
        width: '35%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    timeSection: {
        padding: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionsSection: {
        width: '20%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    menuSection: {
        width: '10%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    // Individual stuff
    linkTitle: {
        fontWeight: '500',
        fontSize: '17px',
        color: purple,
    },
    timeTitle: {
        fontWeight: '500',
        fontSize: '14px',
        color: purple,
    },
    timeRange: {
        fontWeight: '500',
        fontSize: '20px',
        color: purple,
    },
    menuButton: {
        border: 'none',
        background: 'white',
        color: purple,
        fontWeight: '700',
        fontSize: '20px',
        cursor: 'pointer'
    },
}

export default styles;