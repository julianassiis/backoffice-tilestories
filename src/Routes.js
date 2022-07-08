import React from 'react';
import {Route, Routes as Switch} from 'react-router-dom';
import Login from './components/Login';
import TileRequest from './components/TileRequest';

export default function Routes() {
    return (
        <Switch>
            {/*<Route exact path="tilerequest" element={<TileRequest/>}/>*/}
            {/* Catch all unmatched routes */}
            <Route path="*" element={<Login/>}/>
        </Switch>
    );
}