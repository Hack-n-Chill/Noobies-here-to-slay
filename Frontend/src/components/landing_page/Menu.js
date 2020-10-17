import React, {Component} from 'react';
import logo from "./logo_transparent.png";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container 
} from 'reactstrap';    

export default class Menu extends Component{

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render(){
        return(
            <div>
            <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/"><img src={logo} height="100" width="150"></img></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/about">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/profile">Shree Barua</NavLink>
                </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
            </div>
        );
    }
}
