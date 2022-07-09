import puppy_ph from '../images/puppy_placeholder.jpg';
import '../css/App.css';
import '../css/Login.css';
import '../css/TileRequest.css';
import Navigation from './Navigation';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

function TileInfo() {
    return (
        <div className="App min-vh-100 fw-light">
            {Navigation()}
            <div className="mt-5">
                <header className="pt-5 text-center">
                    <h4 className="fw-bolder mt-1">tile name</h4>
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
                            <p className="fw-bolder mb-0">date</p>
                            <p className="small">18 jun 2020</p>
                            <p className="fw-bolder mb-0">tile state</p>
                            <p className="small">endangered</p>
                            <p className="fw-bolder mb-0">additional information</p>
                            <p className="small">kinda cute but also not that cute</p>
                        </div>
                    </div>
                </div>

                <div className="container w-25">
                    {/*saves info to bd*/}
                    <Button className="btn-lightblue fw-light p-2 w-100 d-block mt-2 mx-auto text-center" variant="primary">
                        save info
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default TileInfo;