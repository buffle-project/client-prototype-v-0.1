// React core imports
import React from 'react';

// components imports
import TextBlock from "../../components/TextBlock/TextBlock";
import CreateTeamForm from '../../components/Forms/CreateTeamForm';

// utils imports
import { CreateTeamText } from "../../utils/staticText";

function ChoosePlan() {
    return (
        <>
            <div className='gradient-background-choosePlan'>
                <div className='wrapper'>
                    {/* Text block */}
                    <TextBlock textTitle={CreateTeamText.title} textParagraph={CreateTeamText.paragraph} />

                    {/* Login form */}
                    <CreateTeamForm />
                </div>
            </div>
        </>
    )
}

export default ChoosePlan;