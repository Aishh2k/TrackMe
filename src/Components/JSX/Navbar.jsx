import React, { Component } from 'react';
import '../CSS/Navbar.css'
import {  ReactComponent as Arrow } from '../Images/icon-arrow.svg';


class Navbar extends Component {
    constructor(){
        super();
        this.state={
            ipaddress:''
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ipaddress: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div id="navbar">

                <h1>IP Address Tracker</h1>
                <form  type="submit" onSubmit={ this.handleSubmit }>
                    <input type="text" placeholder="Search for any IP address or domain" value={this.state.ipaddress} onChange={this.handleChange} />
                    <button>< Arrow/></button> 
                </form>
            </div>
        );
    }
}

export default Navbar;