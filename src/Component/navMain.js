import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavMain extends Component {
    render() {
        return (
            <div>
                <nav  style={{backgroundColor: "blue"}} id="topNav"
                     className="navbar fixed-top navbar-toggleable-sm navbar-inverse">
                    <h1 className="mx-auto" style={{color: "white"}}>Shafiq Vai</h1>
                </nav>
            </div>
        );
    }
}

export default NavMain;