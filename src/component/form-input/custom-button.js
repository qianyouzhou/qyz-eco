import React from 'react';

import "./custom-button.scss";

const CustomButton = ({children,...otherProps}) => (
    <button className="custom-buttom" {...otherProps}>
        {children}
    </button>
);

export default CustomButton;