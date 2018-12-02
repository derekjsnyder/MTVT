import React, { Children } from 'react';
import { Router } from '@reach/router';
import Header from './Components/Header/Header';

class Layout extends React.Component {
    render(){
        return(
            <div className="container">
                <Header />
                {this.props.children}
            </div>
        )
    }
}

export default Layout;