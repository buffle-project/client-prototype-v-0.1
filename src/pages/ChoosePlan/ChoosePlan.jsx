// React core imports
import React from 'react';

// components imports
import TextBlock from "../../components/TextBlock/TextBlock";
import ChoosePlanForm from '../../components/Forms/ChoosePlanForm';

// utils imports
import { ChoosePlanText } from "../../utils/staticText";

function ChoosePlan() {
    return (
        <>
            <div className='gradient-background-choosePlan'>
                <div className='wrapper'>
                    {/* Text block */}
                    <TextBlock textTitle={ChoosePlanText.title} textParagraph={ChoosePlanText.paragraph} />

                    {/* Login form */}
                    <ChoosePlanForm />
                </div>
            </div>
        </>
    )
}

export default ChoosePlan;