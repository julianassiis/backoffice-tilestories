
import '../css/App.css';
import '../css/Login.css';
import '../css/TileRequest.css';
import Navigation from './Navigation';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import {getFirestore} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import {doc, setDoc, getDoc, updateDoc} from "firebase/firestore";
import { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL, listAll, list } from 'firebase/storage';


function Nomorerequests() {

    const activeRoute = (routeName) => {
        return window.location.pathname.includes(routeName) ? "link px-2 selected" : "link px-2";
    };

    return (
        <div className="App min-vh-100 fw-light">
            {Navigation()}
            <p className="m-0 pt-4 px-5"><span className="badge bg-yello me-1">0</span> requests pending</p>
            <div className="container text-center mt-5 pt-5">
                <h5 className="fw-bolder mt-5 pt-5">there are no requests pending</h5>
                come back later
            </div>

            <Link to="/tilereq"><h4 className={"text-center corzinhaaa pt-5"}>refresh</h4></Link>
            {/*div que aparece quando NAO há pedidos*/}

        </div>

    );
}

export default Nomorerequests;