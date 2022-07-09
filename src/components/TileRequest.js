import puppy_ph from '../images/puppy_placeholder.jpg';
import '../css/App.css';
import '../css/Login.css';
import '../css/TileRequest.css';
import Navigation from './Navigation';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

function TileRequest() {
    return (
        <div className="App min-vh-100 fw-light">
            {Navigation()}
            <p className="m-0 pt-4 px-5"><span className="badge bg-yello me-1">16</span> requests pending</p>

            {/*div que aparece quando NAO há pedidos*/}
            {/*<div className="container text-center mt-5 pt-5">
                <h5 className="fw-bolder mt-5 pt-5">there are no requests pending</h5>
                come back later
            </div>*/}

            {/*div que aparece quando há pedidos*/}
            <div>
                <header className="pt-5 text-center">
                    <h4 className="fw-bolder mt-1">name of existing tilee</h4>
                </header>

                <div className="container d-flex justify-content-around mb-3 pb-5 mt-5 pt-1">
                    <Card className="tile-rounded w-25">
                        <Card.Img variant="top" src={puppy_ph} className="tile-rounded" />
                        <Card.Body>
                            <Card.Text className="small">
                                <p className="m-0 fw-bolder">tilestories' photo</p>
                                <p className="m-0 mt-1 small">latitude aqui</p>
                                <p className="m-0 small">longitude aqui</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="tile-rounded w-25">
                        <Card.Img variant="top" src={puppy_ph} className="tile-rounded" />
                        <Card.Body>
                            <Card.Text className="small">
                                <p className="m-0 fw-bolder">username's photo</p>
                                <p className="m-0 mt-1 small">latitude aqui</p>
                                <p className="m-0 small">longitude aqui</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="container w-25">
                    <div className="d-flex justify-content-around">
                        {/*goes to next*/}
                        <Link to="#" className="col-6">
                            <Button className="btn-accept fw-light p-2 w-100 mt-2 text-center" variant="primary" type="submit">
                                accept
                            </Button>
                        </Link>
                        {/*goes to next*/}
                        <Link to="#" className="col-6 ms-2">
                            <Button className="btn-deny fw-light p-2 w-100 mt-2 text-center" variant="primary" type="submit">
                                deny
                            </Button>
                        </Link>
                    </div>
                    {/*goes to next*/}
                    <Link to="#">
                        <Button className="btn-lightblue fw-light p-2 w-100 d-block mt-2 mx-auto text-center" variant="primary">
                            next request
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TileRequest;