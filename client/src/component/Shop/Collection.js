import React from 'react';
import CollectionItem from './CollectionItem';
import "./collection.scss"

const Collection=({title,id,items})=>{
    return(
        <div className="collection-page">
            <div>{title.toUpperCase()}</div>
            <div className="collection">
            {
                items
                .filter((item,index)=>index<4)
                .map(item=>(
                    <CollectionItem
                        key={item.id} 
                        item={item}
                    />
                )
                )
            }
            </div>
        </div>
    
    )
}

export default Collection;