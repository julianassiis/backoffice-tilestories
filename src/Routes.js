import React from 'react';
import {Route, Routes as Switch} from 'react-router-dom';
import Login from './components/Login';
import Requests from './components/Requests';
import TileRequest from './components/TileRequest';
import NewTileRequest from './components/NewTileRequest';
import TileList from './components/TileList';

export default function Routes() {
    return (
        <Switch>
            <Route path="req" element={<Requests/>}/>
            <Route path="tilereq" element={<TileRequest/>}/>
            <Route path="newtilereq" element={<NewTileRequest/>}/>
            <Route path="tiles" element={<TileList/>}/>
            {/* Catch all unmatched routes */}
            <Route path="*" element={<Login/>}/>
        </Switch>
    );
}