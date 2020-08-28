import React from "react";
import { connect } from 'react-redux';

import MenuItem from './MenuItem';
import { selectDirectorySections } from "../../redux/reducer/directory/directory-selector";
import './menu.scss';

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

const mapStateToProps = state => ({
    sections:selectDirectorySections(state)
})

export default connect(mapStateToProps)(Menu);