// widget imports
import { WorkmoodWidget } from "../apps/workmood";


function WidgetLayout () {

    const styles = {
        layoutContainer: {
            display: 'flex',
            flexDirection: 'column'
        }
    }


    return (
        <>
            <div style={styles.layoutContainer}>
                <WorkmoodWidget />
                <WorkmoodWidget />
            </div>
        </>
    )
};

export default WidgetLayout;