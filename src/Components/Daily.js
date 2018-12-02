import React from 'react';
import { Router } from "@reach/router";


class Daily extends React.Component {
    render(){
        const date = new Date();

        return(
            <Router>
                <div className>
               <h1>Today is {date} </h1>
            </div>
            </Router>
        )
    }
}

export default Daily;