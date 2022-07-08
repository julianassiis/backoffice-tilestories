import '../css/App.css';
import '../css/Login.css';
import Navigation from './Navigation';
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

function Requests() {
    return (
        <div className="App min-vh-100 fw-light">
            {Navigation()}

            <div className="mt-5 pt-5">
                <header className="App-header py-5 my-5">
                    <h4 className="fw-bolder mb-4 mt-4">tile requests</h4>
                    <p>accept/deny user's photo requests for existing tiles or new tile submissions</p>
                </header>

                <div className="container w-25">
                    <Link to="/tilereq">
                        <Button className="btn-lightblue fw-light p-2 d-block w-100 mt-5 mx-auto text-center" variant="primary">
                            <span className="badge bg-yello me-2">16</span>existing tiles
                        </Button>
                    </Link>

                    <Link to="/newtilereq">
                        <Button className="btn-lightblue fw-light p-2 d-block w-100 mt-2 mx-auto text-center" variant="primary">
                            <span className="badge bg-yello me-2">10</span>new tiles
                        </Button>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Requests;