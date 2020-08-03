import React,{Component} from "react";

import ShopData from './ShopData';
import Collection from '../../component/Shop/Collection';

class ShopPage extends Component{
    constructor(props){
        super(props);
        this.state={
            collections:ShopData
        }
    }
    render(){
        const {collections}=this.state;
        return(
            <div>
                {
                    collections.map((collection)=>(
                        <Collection 
                            key={collection.id}
                            {...collection}
                        />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;