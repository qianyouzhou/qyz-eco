import React from 'react';
import { Switch, Route, Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.scss';
import HomePage from "./page/homepage/HomePage";
import HatsPage from "./component/Hats/HatsPage";
import HatsDetail from "./component/Hats/HatsDetail";
import ShopPage from "./page/shop/ShopPage";
import Header from "./component/header/Header";
import SignInPage from "./page/signin/SignInPage";
import CheckoutPage from "./page/checkout/checkout"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
//上面最后一个 要删
import setCurrentUser from "./redux/action/user-action";
import { selectCurrentUser } from "./redux/reducer/user/user-selector";
//import { selectCollectionsForMIHUO } from "./redux/reducer/shop/shop-selector";
//要删

class App extends React.Component {
  unsubscribeFromAuth=null;

  componentDidMount(){

    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth);
      //addCollectionAndItems('collections',collectionsArray.map(({title,items})=>({title,items})));
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div >
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hats" component={HatsPage} />
          <Route path="/hats/:hatid" component={HatsDetail} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={()=>this.props.currentUser?(<Redirect to='/' />):(<SignInPage />)} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
    </div>
  );}
}

const mapStateToProps = createStructuredSelector ({
  currentUser:selectCurrentUser
  //collectionsArray:selectCollectionsForMIHUO// 要删
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
