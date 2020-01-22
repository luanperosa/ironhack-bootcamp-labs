/* eslint-disable no-confusing-arrow */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
    <Route render={props => (isAuth ? <Component {...rest} {...props} /> : <Redirect to={'/login'} />)} />
);

export default PrivateRoute;
