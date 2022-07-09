import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import lettering_branco from '../images/lettering_ts_branco.png';
import '../css/App.css';
import '../css/Navigation.css';
import {NavLink} from 'react-router-dom';

function Navigation() {

    {/*highlight active navlink*/}
    const activeRoute = (routeName) => {
        return window.location.pathname.includes(routeName) ? "link px-2 selected" : "link px-2";
    };

    return (
        <Navbar className="navbar bg-darkblue py-3">
            <Container>
                <Navbar.Brand className="w-25 text-start">
                    <NavLink to="/req">
                        <img src={lettering_branco} alt="logo" className="w-25"/>{' '}
                    </NavLink>
                </Navbar.Brand>
                <div className="mt-1 py-2">
                    <NavLink to="/req" className={activeRoute('req')}>requests</NavLink>
                    <NavLink to="/tileslist" className={activeRoute('list')}>tiles</NavLink>
                    <NavLink to="/login" className="link px-2">signout</NavLink>
                </div>
            </Container>
        </Navbar>
    )
}

export default Navigation;