export const styles = {
    widgetContainer: {
        width: 450,
        height: 250,
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 7px 29px 0px',
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 10,
        margin: 20,
        display: 'flex',
        flexDirection: 'column',
    },
    widgetTopbar: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    widgetMoodInput: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    widgetTextInput: {
        marginTop: 20,
        borderRadius: 10,
        border: 'none',
        boxShadow: '5px 5px 22px rgba(0, 0, 0, 0.05)',
    },
    notification: {
        borderRadius: '8px',
        boxShadow: '5px 5px 22px rgba(0, 0, 0, 0.05)', 
    },
    widgetImage: {
        cursor: 'pointer'
    }
};