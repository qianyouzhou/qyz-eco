import React from "react";
import {Route} from 'react-router-dom';

import CategoryPage from "../category/category"
import CollectionsOverview from '../../component/collections-overview/collections-overview';

const ShopPage = ({match})=>{
    return(
    <>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route exact path={`${match.path}/:categoryId`} component={CategoryPage} />
    </>)
}
export default ShopPage;