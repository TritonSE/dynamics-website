import React, { Component } from 'react';
import '../css/About.css';

class SupportingDirectors extends Component {
	render() {
        var nameDisplays = this.props.names.map((item,i) => 
            <p style={{marginLeft:"2%"}}>
                <span className="Teal" style={{fontWeight:"bold", textTransform:"uppercase"}}> {this.props.titles[i]} |</span> {item}
            </p>
        );
		return (
            <div className="Supporting-Directors">
                {nameDisplays}
            </div>
        );
	}
}

export default SupportingDirectors;