import React from 'react';
import {Route, Routes as Switch} from 'react-router-dom';
import Login from './components/Login';
import Requests from './components/Requests';
import TileRequest from './components/TileRequest';
import NewTileRequest from './components/TileRequest';

export default function Routes() {
    return (
        <Switch>
            <Route path="req" element={<Requests/>}/>
            <Route path="tilereq" element={<TileRequest/>}/>
            <Route path="newtilereq" element={<NewTileRequest/>}/>
            {/* Catch all unmatched routes */}
            <Route path="*" element={<Login/>}/>
        </Switch>
    );
}