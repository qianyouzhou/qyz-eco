import React from 'react';

import "./form-input.scss"

const FormInput = React.forwardRef(({handleChange,label,...otherProps},ref) =>(
    <div className="group">
        <input className="form-input" ref={ref} onChange={handleChange} {...otherProps} />
        {
            label?
            (<label className= {`${otherProps.value.length?"shrink":""}form-input-label`} >{label}</label>)
            :null
        }
    </div>
))

export default FormInput;