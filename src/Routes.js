import React from 'react';
import {Route, Routes as Switch} from 'react-router-dom';
import Login from './components/Login';
import Requests from './components/Requests';
import TileRequest from './components/TileRequest';
import NewTileRequest from './components/NewTileRequest';
import TileList from './components/TileList';
import TileInfo from './components/TileInfo';
import Nomorerequests from "./components/Nomorerequests";

export default function Routes() {
    return (
        <Switch>
            <Route path="req" element={<Requests/>}/>
            <Route path="tilereq" element={<TileRequest/>}/>
            <Route path="newtilereq" element={<NewTileRequest/>}/>
            <Route path="tileslist" element={<TileList/>}/>
            <Route path="tileinfolist" element={<TileInfo/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="norequest" element={<Nomorerequests/>}/>
            {/* Catch all unmatched routes */}
            <Route path="*" element={<Login/>}/>
        </Switch>
    );
}