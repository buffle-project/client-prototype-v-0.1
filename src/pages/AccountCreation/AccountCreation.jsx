// Ract core imports
import React from "react";

// components imports
import TextBlock from "../../components/TextBlock/TextBlock";
import RegistrationForm from "../../components/Forms/RegistrationForm";

// utils imports
import { AccountCreationText } from "../../utils/staticText";

function AccountCreation() {
  return (
    <>
      <div className="gradient-background-register">
        <div className="wrapper">
          {/* Text block */}
          <TextBlock
            textTitle={AccountCreationText.title}
            textParagraph={AccountCreationText.paragraph}
          />
          {/* Form block*/}
          <RegistrationForm />
        </div>
      </div>
    </>
  );
}

export default AccountCreation;
