import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Collection from "../Shop/Collection";
import { selectCollectionsForPreview } from "../../redux/reducer/shop/shop-selector";
import "./collections-overview.scss"

const CollectionsOverview = ({collections}) => 
(
    <div className="collections-overview">
        {console.log(collections)}
        {
            collections.map(({id,...otherCollectionProps})=>(
                <Collection 
                    key={id}
                    {...otherCollectionProps}
                />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);