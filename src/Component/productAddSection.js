import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

class ProductAddSection extends Component {
    render() {
        return (
            <div>

                <div className={"bodyDiv"}>
                    <form action="">
                        <h3 style={{fontStyle:"bold",color:"black"}}>Add a new Product</h3>
                        <h6>Title</h6>
                        <input type="text" style={{width:"100%"}} />
                        <h6 style={{paddingTop:"10px"}}>Price</h6>
                        <input type="text" style={{width:"100%"}}/>
                        <br/>
                        <button style={{marginTop:"10px",paddingLeft:"5%",paddingRight:"5%",backgroundColor:"blue",color:"white",width:"30%"}}>Add Product</button>
                    </form>
                </div>
                <div>
                    <h1>You added:</h1>

                        <li>Title:</li>
                        <li>Price:</li>

                </div>
            </div>
            
        );
    }
}
export default ProductAddSection;