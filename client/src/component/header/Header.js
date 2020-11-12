import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../asset/crown.svg"
import CartIcon from "../cart-icon/cart-icon/cart-icon";
import CartDropDown from "../cart-icon/cart-dropdown/cart-dropdown";
import { selectCurrentUser } from "../../redux/reducer/user/user-selector";
import { selectCartHidden } from "../../redux/reducer/cart/cart-selectors";
import  { signOutStart } from "../../redux/action/user-action";
import "./header.scss";

const Header=({currentUser,hidden,signOutStart})=>{
    /*let showDropDownBool=false;
    const inputEl=useRef(null);
    const showDropDown = () =>{
    console.log(inputEl);
        showDropDownBool?inputEl.current.style.visibility="hidden":inputEl.current.style.visibility="visible";
        showDropDownBool=!showDropDownBool;
    }*/
    return(
        <div className="header">
            <Link to="/" className="logo">
                <Logo />
            </Link>
            <div className="options">
                <Link to='/shop' className="option"> 
                    SHOP
                </Link>
                <Link to='/' className="option"> 
                    CONTACT
                </Link>
                {currentUser ? (
                    <div className='option' onClick={signOutStart}>
                    SIGN OUT
                    </div>
                ) : (                   
                    <Link className='option' to='/signin'>
                    SIGN IN
                    </Link>
                )}
                <CartIcon className="option"/>
            </div>
            {/*<CartDropDown ref={inputEl}></CartDropDown>*/}
            {hidden?null:<CartDropDown />}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);