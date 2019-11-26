import React, { Component } from 'react';
import '../css/Description.css';
import { Container, Row ,Col} from 'react-bootstrap';
import {MemberInfo} from './MemberInfo.js';


class Description extends Component {
    render() {
        return(
            <Container>
                <div>
                {MemberInfo.info.map( (info, i) =>
                <InfoItem pic = {info.image} role = {info.role} name = {info.name} />)}
                </div>
            </Container>
        );
    }
}

class InfoItem extends Component {
    render() {
        return(
            <Row>
               <Col lg ={6}> 
                     <img
                        src = {this.props.pic}
                        style= {{width: 281, height: 367, marginTop: 200, marginLeft:300}}
                        alt = "Could not load"
                    />
               </Col>
               <Col>
                    <h1 className="Role">
                        <span>{this.props.role}</span>
                    </h1> 
                    <h2 className="Name"> {this.props.name}</h2>
                    </Col>
                </Row>
        )
    }
}

export default Description;