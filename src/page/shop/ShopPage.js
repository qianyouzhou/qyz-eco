import React from "react";
import {Route} from 'react-router-dom';

import CategoryPage from "../category/category";
import CollectionOverview from '../../component/collections-overview/collections-overview';

const ShopPage = ({match})=>{
    console.log(match);
    alert("looklook");
    return(
    <>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route exact path={`${match.path}/:catogoryId`} component={CategoryPage} />
    </>)
}
export default ShopPage;