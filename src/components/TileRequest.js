import logo_branco from '../images/logo_ts_branco.png';
import '../css/login.css';

function TileRequest() {
    return (
        <div className="App bg-darkblue min-vh-100 fw-light">
            <header className="App-header py-5">
                <img src={logo_branco} className="App-logo" alt="logo"/>
            </header>
        </div>
    );
}

export default TileRequest;