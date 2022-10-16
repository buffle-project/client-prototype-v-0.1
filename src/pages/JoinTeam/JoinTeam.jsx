// React core imports
import React from "react";

// components imports
import TextBlock from "../../components/TextBlock/TextBlock";
import JoinTeamForm from "../../components/Forms/JoinTeamForm";

// utils imports
import { JoinTeamText } from "../../utils/staticText";

function JoinTeam() {
  return (
    <>
      <div className="gradient-background-joinTeam">
        <div className="wrapper">
          {/* Text block */}
          <TextBlock
            textTitle={JoinTeamText.title}
            textParagraph={JoinTeamText.paragraph}
          />
          {/* Form block*/}
          <JoinTeamForm />
        </div>
      </div>
    </>
  );
}

export default JoinTeam;
