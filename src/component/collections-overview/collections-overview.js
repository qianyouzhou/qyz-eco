import React from 'react';
import {connect} from 'react-redux';

import Collection from "../Shop/Collection";
import "./collections-overview.scss"

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {
            collections.map((collection)=>(
                <Collection 
                    key={collection.id}
                    {...collection}
                />
            ))
        }
    </div>
)

const mapStateToProps = ({shop:{collections}}) =>({
    collections
})

export default connect(mapStateToProps)(CollectionsOverview);