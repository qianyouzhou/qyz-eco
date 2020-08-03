import React from "react";
import './homepage.scss';
import Menu from '../../component/menu/Menu'

const HomePage = (props) =>{
    console.log(props.match)
    return (
    <div className="homepage">
        <Menu />
    </div>)
}
export default HomePage;