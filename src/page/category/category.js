import React from "react";
import { connect } from 'react-redux';

import CollectionItem from "../../component/Shop/CollectionItem";
import { selectCollections } from "../../redux/reducer/shop/shop-selector";
import "./category.scss";

const CategoryPage = ({match,collections}) => {
    //const {items,title}=collections;
    //alert(collections.title);
    let collection=collections.filter(col=>(col.routeName===`${match.params.categoryId}`))
    console.log(typeof collection[0])
    return(
        <div className="category-page">
            <h2 className="title">{collection[0].title}</h2>
            <div className="items">
                { 
                    collection[0].items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    collections:selectCollections(state)
})


export default connect(mapStateToProps)(CategoryPage)