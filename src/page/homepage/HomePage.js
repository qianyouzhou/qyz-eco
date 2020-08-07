import React from "react";

//import './homepage.scss';
import Menu from '../../component/menu/Menu'
import HomePageContainer from "./HomePageStyle";

const HomePage = (props) =>{
   // console.log(props.match)
    return (
    <HomePageContainer>
        <Menu />
    </HomePageContainer>)
}
export default HomePage;