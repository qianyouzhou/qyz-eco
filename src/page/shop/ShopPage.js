import React from "react";
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CategoryPage from "../category/category"
import CollectionsOverview from "../../component/collections-overview/collections-overview";
import { fetchCollectionsStartAsync } from "../../redux/action/shop-action";
import { selectIsCollectionFetching, selectIsCollectionFail, selectIsCollectionLoaded } from "../../redux/reducer/shop/shop-selector";
import WithSpinner from "../../component/with-spinner/with-spinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);

class ShopPage extends React.Component{
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }
    
    render(){
        const { match, isCollectionFetching, isSelectIsCollectionFail,isCollectionLoaded } = this.props;
        return(
            <>

                <Route 
                    exact 
                    path={`${match.path}`} 
                    render={props => (
                        <CollectionsOverviewWithSpinner 
                            isLoading={isCollectionFetching} 
                            {...props} 
                        />
                      )}
                />
                <Route 
                    exact 
                    path={`${match.path}/:categoryId`} 
                    render={props => (
                        <CategoryPageWithSpinner 
                            isLoading={!isCollectionLoaded} 
                            {...props} 
                        />
                    )}
                />
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync:()=> dispatch(fetchCollectionsStartAsync())
});  

const mapStateToProps = createStructuredSelector({
    isCollectionFetching:selectIsCollectionFetching,
    isSelectIsCollectionFail:selectIsCollectionFail,
    isCollectionLoaded:selectIsCollectionLoaded
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);