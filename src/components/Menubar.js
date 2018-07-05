import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Navbar, Nav, NavItem,FormGroup, FormControl, Button} from 'react-bootstrap';

export default class Menubar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loginname: ''
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        this.setState({ loginname: e.target.value });
    };

    render() {
        const {loginaction, logoutaction, login} = this.props;
        var loginStatement = login ? 'Logged in by ' + login : 'Not logged in';

        return (

            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={'none'} href="#" >
                            {loginStatement}
                        </NavItem>
                    </Nav>
                    <Navbar.Form pullRight>
                        <FormGroup>
                            <FormControl type="text"
                                         value={this.state.loginname}
                                         placeholder="Type login to login"
                                         onChange={this.handleChange}
                            />
                        </FormGroup>{' '}
                        <Button type="submit"
                                onClick={()=>login==='' ? loginaction(this.state.loginname) : logoutaction()}
                        >{login==='' ? 'Login':'Logout'}</Button>
                    </Navbar.Form>
                </Navbar.Collapse>

            </Navbar>
        )
    };
};


Menubar.propTypes = {
    loginaction: PropTypes.func.isRequired,
    logoutaction: PropTypes.func.isRequired,
    login:PropTypes.string
};