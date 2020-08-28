import React from "react";
import { connect } from 'react-redux';

import CollectionItem from "../../component/Shop/CollectionItem";
import { selectCollection } from "../../redux/reducer/shop/shop-selector";
import "./category.scss";

const CategoryPage = ({collection}) => {
    const {items,title}=collection;
    return(
        <div className="category-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                { 
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
  });  

export default connect(mapStateToProps)(CategoryPage)