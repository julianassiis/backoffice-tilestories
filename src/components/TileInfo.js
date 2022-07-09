import puppy_ph from '../images/puppy_placeholder.jpg';
import '../css/App.css';
import '../css/Login.css';
import '../css/TileRequest.css';
import Navigation from './Navigation';
import Button from "react-bootstrap/Button";

function TileInfo() {
    return (
        <div className="App min-vh-100 fw-light">
            {Navigation()}
            <div className="mt-5">
                <header className="pt-5 text-center">
                    <h4 className="fw-bolder mt-1">tile information</h4>
                </header>

                {/*se não tiver certas infos colocar not found ou algo assim*/}
                <div className="container d-flex justify-content-center mb-3 pb-5 mt-5 pt-3 align-items-center">
                    <img src={puppy_ph} className="tile-rounded" alt="tile photo" />

                    <div className="ms-5">
                        <div className="ms-1 mt-3">
                            <p className="fw-bolder mb-0">date</p>
                            <p className="small">18 jun 2020</p>
                            <p className="fw-bolder mb-0">location</p>
                            <p className="small mb-0">latitude aqui</p>
                            <p className="small">longitude aqui</p>
                            <p className="fw-bolder mb-0">photo taken by</p>
                            <p className="small">username or tilestories</p>
                            <p className="fw-bolder mb-0">additional information</p>
                            <p className="small mb-0">kinda cute but also not that cute</p>
                        </div>
                    </div>
                </div>

                <div className="container w-25 pb-5">
                    <p className="text-center fw-bolder mb-5 mt-5">edit details</p>
                    <span className="small fw-bolder ms-2">tile name</span>
                    <div className="d-flex mb-4 mt-1">
                        <input type="text" className="form-round p-2 fw-light h-50 w-100" />
                    </div>
                    <span className="small fw-bolder ms-2">tile safety</span>
                    <div className="d-flex mb-4 mt-1">
                        <input type="text" className="form-round p-2 fw-light h-50 w-100" />
                    </div>
                    <span className="small fw-bolder ms-2">find difficulty</span>
                    <div className="d-flex mb-4 mt-1">
                        <input type="text" className="form-round p-2 fw-light h-50 w-100" />
                    </div>
                    <span className="small fw-bolder ms-2">reward points</span>
                    <div className="d-flex mb-4 mt-1">
                        <input type="text" className="form-round p-2 fw-light h-50 w-100" />
                    </div>

                    <span className="small fw-bolder ms-2">tile description</span>
                    <div className="d-flex mb-4 mt-1">
                        <input type="textarea" className="form-round p-2 fw-light w-100" />
                    </div>

                    <span className="small fw-bolder ms-2">summary?</span>
                    <div className="d-flex mb-4 mt-1">
                        <input type="text" className="form-round p-2 fw-light h-50 w-100" />
                    </div>

                    {/*saves info to bd*/}
                    <Button className="btn-lightblue fw-light p-2 w-100 d-block my-5 mx-auto text-center" variant="primary">
                        save info
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default TileInfo;