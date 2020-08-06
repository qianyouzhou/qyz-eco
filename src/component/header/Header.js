import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from "../../asset/crown.svg"
import CartIcon from "../cart-icon/cart-icon/cart-icon";
import CartDropDown from "../cart-icon/cart-dropdown/cart-dropdown";
import "./header.scss";

const Header=({currentUser,hidden})=>{
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
                    <Link className='option' to='/signin'>
                    SIGN IN
                    </Link>
                ) : (
                    <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                    </div>
                )}
                <CartIcon className="option"/>
            </div>
            {/*<CartDropDown ref={inputEl}></CartDropDown>*/}
            {hidden?null:<CartDropDown />}
        </div>
    )
}

const mapStateToProps = ({user:currentUser,cart:{hidden}}) =>({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);