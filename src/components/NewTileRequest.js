import puppy_ph from '../images/puppy_placeholder.jpg';
import '../css/App.css';
import '../css/Login.css';
import '../css/TileRequest.css';
import Navigation from './Navigation';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import Form from "react-bootstrap/Form";

function NewTileRequest() {
    return (
        <div className="App min-vh-100 fw-light">
            {Navigation()}
            <p className="m-0 pt-4 px-5"><span className="badge bg-yello me-2">16</span> requests pending</p>

            {/*div que aparece quando NAO há pedidos*/}
            {/*<div className="container text-center mt-5 pt-5">
                <h5 className="fw-bolder mt-5 pt-5">there are no requests pending</h5>
                come back later
            </div>*/}

            {/*div que aparece quando há pedidos*/}
            <div>
                <header className="pt-5 text-center">
                    <h4 className="fw-bolder mt-1">unknown tile</h4>
                </header>

                <div className="container d-flex justify-content-center mb-3 pb-5 mt-5 pt-1">
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

                    <div className="ms-5">
                        <div className="d-flex justify-content-around mb-4 mt-2">
                            <input type="text" placeholder="add tile name..." className="form-round p-2 fw-light h-50" />
                        </div>
                        <div className="ms-1">
                            <p className="fw-bolder mb-0">discovery date</p>
                            <p className="small">18 jun 2020</p>
                            <p className="fw-bolder mb-0">tile state</p>
                            <p className="small">endangered</p>
                            <p className="fw-bolder mb-0">additional information</p>
                            <p className="small">kinda cute but also not that cute</p>
                        </div>
                    </div>
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

export default NewTileRequest;