import React, { Component } from 'react';
import './style.css';
class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {
        return (
            <div className='logo'>
                <img alt='logo' src={require('../../assets/logo.png')} />
            </div>
        );
    }

}
export default Logo;