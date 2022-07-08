import logo_branco from '../images/logo_ts_branco.png';
import security from '../images/security_ilu.png';
import '../css/App.css';
import '../css/Login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function Login() {

    return (
        <div className="App bg-darkblue min-vh-100 fw-light">
            <header className="App-header py-5">
                <img src={logo_branco} className="App-logo" alt="logo"/>
            </header>

            <div className="d-flex bg-cream log-container rounded shadow-lg col-9 m-auto">
                <div className="col-5 text-center mt-4 m-adj">
                    <img src={security} className="w-50 m-auto" alt="logo"/>
                </div>
                <div className="col-7 form-container">
                    <p className="mb-5 text-center">login as <span className="fw-normal">admin</span> or <span className="fw-normal">editor</span> for tilestories</p>
                    <Form className="mx-4">
                        <Form.Group className="mb-4 mt-5 small" controlId="formBasicEmail">
                            <Form.Label className="mb-1">email</Form.Label>
                            <Form.Control className="form-round p-2 fw-light" type="email"/>
                        </Form.Group>

                        <Form.Group className="small" controlId="formBasicPassword">
                            <Form.Label className="mb-1">password</Form.Label>
                            <Form.Control className="form-round mb-5 p-2 fw-light" type="password"/>
                        </Form.Group>

                        {/*<Form.Text className="text-muted mb-3 fst-italic">
                            forgot password?
                        </Form.Text>*/}

                        <Link to="/req">
                            <Button className="btn-lightblue fw-light p-2 w-100 d-block mt-5" variant="primary" type="submit">
                                login
                            </Button>
                        </Link>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;