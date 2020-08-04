import React from 'react';
import { Switch, Route, Redirect} from "react-router-dom";
import { connect } from 'react-redux';

import './App.scss';
import HomePage from "./page/homepage/HomePage";
import HatsPage from "./component/Hats/HatsPage";
import HatsDetail from "./component/Hats/HatsDetail";
import ShopPage from "./page/shop/ShopPage";
import Header from "./component/header/Header";
import SignInPage from "./page/signin/SignInPage";
import CheckoutPage from "./page/checkout/checkout"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import setCurrentUser from "./redux/action/user-action";


class App extends React.Component {
  
  unsubscribeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          this.props.setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          })
        })
      }
      this.props.setCurrentUser(userAuth);
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

const mapStateToProps = ({user}) =>({
  currentUser:user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
