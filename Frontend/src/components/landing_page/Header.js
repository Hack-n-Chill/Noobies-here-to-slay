import React, {Component} from 'react';
import {Jumbotron, Button} from 'reactstrap';
import logo from "./logo.png";

export default class Header extends Component{
    render(){
        return (
            <div>
              <Jumbotron>
                <h1 className="display-3">Welcome to The Reader's Cafe!</h1>
                <p className="lead">Why Read Alone?</p>
                <p className="lead">
                  <Button color="primary">Create a New Room</Button>
                </p>
              </Jumbotron>
            </div>
          );
    }
}