import React from 'react';
import { connect } from 'react-redux';
import Menubar from '../components/Menubar';
import {loginaction, logoutaction} from '../actions/login';

import {login} from '../reducers/login';

const LoginContainer = ({
                            login,
                            loginaction,
                            logoutaction
                            }) => (
    <Menubar
        login = {login}
        loginaction  = {loginaction}
        logoutaction = {logoutaction}
    />
);

const mapStateToProps = (state) => ({
    login: state.login.login
});

export default connect(
    mapStateToProps,
    {loginaction, logoutaction}
)(LoginContainer);
