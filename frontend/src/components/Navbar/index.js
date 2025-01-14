import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = () => {
    return (
        <div classname="box">
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/dashboard' activeStyle>
                        Dashboard
                    </NavLink>
                    <NavLink to="/">
                        <img src={require('../images/favicon.png')} alt='logo' />
                    </NavLink>
                    <NavLink to='/apiManager' activeStyle>
                        API Manager
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
    );
};

export default Navbar;