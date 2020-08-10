import React,{useEffect} from "react";
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';

import CategoryPageContainer from "../category/category-container";
import CollectionsOverviewContainer from "../../component/collections-overview/collections-overview-container";
import { fetchCollectionsStart } from "../../redux/action/shop-action";

class ShopPage extends React.Component{

    componentDidMount(){
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }
    
    render(){
        const { match } = this.props;
        return(
            <>
                <Route 
                    exact 
                    path={`${match.path}`} 
                    component={CollectionsOverviewContainer}
                />
                <Route 
                    exact 
                    path={`${match.path}/:categoryId`} 
                    component={CategoryPageContainer}
                />
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart:()=> dispatch(fetchCollectionsStart())
});  

export default connect(null,mapDispatchToProps)(ShopPage);