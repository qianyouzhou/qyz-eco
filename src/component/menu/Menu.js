import React from "react";
import { connect } from 'react-redux';

import './menu.scss';
import MenuItem from './MenuItem';

const Menu =({sections})=>(
    <div className="menu">
        {
            sections.map(({id,...otherProps})=>(
                <MenuItem
                    key={id} 
                    {...otherProps}
                />
            ))
        }
    </div>
)

const mapStateToProps = ({directory:{sections}}) => ({
    sections
})

export default connect(mapStateToProps)(Menu);