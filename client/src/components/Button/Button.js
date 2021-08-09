import React from 'react';
import './Button.css';

const BUTTON_STYLES = ['btn--primary', 'btn--outline'];
const BUTTON_SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];
const BUTTON_COLOURS = ['primary', 'blue', 'red', 'green'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColour
}) => {
    const checkButtonStyle = BUTTON_STYLES.includes(buttonStyle) ? buttonStyle : BUTTON_STYLES[0];
    const checkButtonSize = BUTTON_SIZES.includes(buttonSize) ? buttonSize : BUTTON_SIZES[0];
    const checkButtonColour = BUTTON_COLOURS.includes(buttonColour) ? buttonColour : null;

    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColour}`} onClick={onClick} type={type}> 
            {children} 
        </button>
    );
}