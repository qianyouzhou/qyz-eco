import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionLoaded } from '../../redux/reducer/shop/shop-selector';
import WithSpinner from "../../component/with-spinner/with-spinner";
import CategoryPage from "./category";

const mapStateToProps = createStructuredSelector({
    isLoading:state => !selectIsCollectionLoaded(state)
})

const CategoryPageContainer = compose(connect(mapStateToProps),WithSpinner)(CategoryPage)

export default CategoryPageContainer;