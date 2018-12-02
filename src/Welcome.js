import React from 'react';
import { Link } from "@reach/router";

class Welcome extends React.Component {
    render(){
        return(
            <div>
                <h1 className="welcome-title">Welcome to MTVT</h1>
                <Link to="/home">
                    <button className="welcome-enter">Enter</button>
                </Link>
            </div>
        )
    }

}

export default Welcome;