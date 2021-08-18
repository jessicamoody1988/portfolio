import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Jumbotron, Nav, Navbar, NavbarToggler, NavItem } from 'reactstrap';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    
    render() {
        return (
            <> 
                <Jumbotron fluid>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <h1>Jessica Moody</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky='top' expand='md'>
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'>
                                        <i className='fa fa-home fa-lg' /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/projects'>
                                        <i className='fa fa-list fa-lg' /> Projects
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/about'>
                                        <i className='fa fa-info fa-lg' /> Projects
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/contact'>
                                        <i className='fa fa-address-card fa-lg' /> Projects
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </>
        );
    }
}