// React core imports
import React from "react";

// Antd imports
import { Typography } from "antd";

// utils imports
import { colors } from '../../utils/colors';

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
};

/**
 * 
 * @param {String} textTitle - Title of the paragraph
 * @param {String} textParagraph - Paragraph
 * @returns - Stylized text block that takes up to 30% of the screen, with a Title and Paragraph
 */
function TextBlock({textTitle, textParagraph}) {
  return (
    <>
      <div style={styles.textWrapper}>
        <Typography style={styles.textHeadline}>
          {textTitle}
        </Typography>
        <Typography style={styles.textParagraph}>
          {textParagraph}
        </Typography>
      </div>
    </>
  );
}

export default TextBlock;
