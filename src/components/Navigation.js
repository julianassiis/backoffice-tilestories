import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import lettering_branco from '../images/lettering_ts_branco.png';
import '../css/App.css';
import '../css/Navigation.css';
import {NavLink} from 'react-router-dom';

function Navigation() {

    let activeClassName = "link px-2 selected";
    let notActiveClassName = "link px-2";

    return (
        <Navbar className="navbar bg-darkblue py-3">
            <Container>
                <Navbar.Brand className="w-25 text-start">
                    <NavLink to="/req">
                        <img src={lettering_branco} alt="logo" className="w-25"/>{' '}
                    </NavLink>
                </Navbar.Brand>
                <div className="mt-1 py-2">

                    {/*o estado do active ainda está por resolver*/}
                    <NavLink to="/req" className={({ isActive }) => isActive ? activeClassName : notActiveClassName}>requests</NavLink>

                    <NavLink to="/tiles" className="link px-2">tiles</NavLink>
                    <NavLink to="/Login" className="link px-2">signout</NavLink>
                </div>
            </Container>
        </Navbar>
    )
}

export default Navigation;