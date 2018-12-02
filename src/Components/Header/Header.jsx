import React from 'react';




class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navOpen: false
        }
    }

    toggleNav = () => {
        console.log("This is working");
        this.setState({
            navOpen: !this.state.navOpen
        })
    }
    render() {

        return(
            <div className="header">
                <div className="nav" onClick={this.toggleNav}>
                    <div className={this.state.navOpen === true ? "change bar1" : "bar1"}></div>
                    <div className={this.state.navOpen === true ? "change bar2" : "bar2"}></div>
                    <div className={this.state.navOpen === true ? "change bar3" : "bar3"}></div>
                </div>
                <h1>MTVT</h1>
            </div>
        )
    }
}

export default Header;