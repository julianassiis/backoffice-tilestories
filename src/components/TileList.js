import puppy_ph from '../images/puppy_placeholder.jpg';
import '../css/App.css';
import '../css/Login.css';
import '../css/TileRequest.css';
import Navigation from './Navigation';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

function TileList() {
    return (
        <div className="App min-vh-100 fw-light">
            {Navigation()}
            <p className="m-0 pt-4 px-5"><span className="badge bg-yello me-1">160</span> saved tiles</p>

            <div>
                <header className="pt-5 text-center">
                    <h4 className="fw-bolder mt-1">tilestories' saved tiles</h4>
                </header>

                <div className="container d-flex flex-wrap justify-content-around mb-3 pb-5 mt-5 pt-1">
                    {/*repeated card*/}
                    <Card className="tile-rounded w-25 m-3 mb-5">
                        <Card.Img variant="top" src={puppy_ph} className="tile-rounded" />
                        <Card.Body>
                            <Card.Text className="small">
                                <p className="m-0 fw-bolder">tile name</p>
                                <p className="m-0 mt-1 small">latitude aqui</p>
                                <p className="m-0 small">longitude aqui</p>
                                {/*goes to individual tile info*/}
                                <Link to="/tileinfo">
                                    <Button className="btn-lightblue fw-light p-2 w-100 d-block mt-4" variant="primary" type="submit">
                                        edit info
                                    </Button>
                                </Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default TileList;