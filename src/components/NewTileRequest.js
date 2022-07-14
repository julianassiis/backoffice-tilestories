import puppy_ph from '../images/puppy_placeholder.jpg';
import '../css/App.css';
import '../css/Login.css';
import '../css/TileRequest.css';
import Navigation from './Navigation';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import firebaseConfig from "../firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc, collection, getDocs, query, deleteDoc, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {deleteObject, getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";




const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
var pedidos;
var inuse=0;
var date, info, photo, stage, date2, date3, geo, lati, longi,fotinha;
var nomeimag


function NewTileRequest() {

    const [userDataArray, setUserDataArray] = useState([]);
    const [userDataArrayazul, setUserDataArrayazul] = useState([]);
    const [azuname, setAzuname] = useState(undefined);
    const [url, setUrl] = useState()

    console.log(userDataArray.length);



    const pullinfo=async ()=> {
        await getDocs(collection(db, "newtile"))
            .then((querySnapshot) => {
                const newUserDataArray = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setUserDataArray(newUserDataArray);
            })
            .catch((err) => {

                // TODO: Handle errors
                console.error("Failed to retrieve data", err);
            });
    }

    const pullinfo2=async ()=> {
        await getDocs(collection(db, "azulejo"))
            .then((querySnapshot) => {
                const newUserDataArrayy = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setUserDataArrayazul(newUserDataArrayy);
            })
            .catch((err) => {

                // TODO: Handle errors
                console.error("Failed to retrieve data", err);
            });
    }


    useEffect( () => {
        ( async() => {
             await pullinfo();
             await pullinfo2();

        })();
    }, []);

    console.log("maan",userDataArray);
    pedidos=userDataArray.length;

    useEffect( () => {
        ( async() => {
          console.log("pa")
            await display();
        })();
    }, [userDataArray]);


    const display= async ()=>{
        console.log("im heredd", pedidos);
        console.log("inuse", inuse);

        if (inuse<pedidos){
            console.log("inuse2", inuse);

            date=userDataArray[inuse].date;
            console.log("data",userDataArray[inuse].date)
            info=userDataArray[inuse].description;
            photo=userDataArray[inuse].photo;
            lati=userDataArray[inuse].geo.latitude;
            longi=userDataArray[inuse].geo.longitude;
            console.log("geooo",geo);
            stage=userDataArray[inuse].state;
            console.log("im heredd2d", date2);
            date2 = new Date(date.seconds * 1000 + date.nanoseconds/1000000)
            console.log("date2",date2);
            date3 = date2.toString();
            console.log("date3",date3);


            func(photo);

        }
    }

    const func = async (foto) => {
        const reference = ref(storage, '/newTile/'+foto);
        console.log("apanha aqui", foto);
        nomeimag= foto.split('.');
        fotinha=foto;


        await getDownloadURL(reference).then((x) => {
            setUrl(x);
        })
    }

    const accept = () => {
        let id = userDataArrayazul.length;

        console.log("olah o id",id.toString())

        const myDoc = doc(db, "azulejo",id.toString())


        console.log(info)
        console.log(lati)
        console.log(longi)
        console.log(azuname)
        console.log(info)
        console.log(id)
        // Your Document Goes Here
        const docData = {
            "description": info,
            "difficulty": "to be decided",
            "geo": {
                "latitude":lati,
                "longitude":longi
            },
            "name": azuname,
            "photo": "photophoto",
            "points": "1",
            "summary": info,
            "uid": id,
            "visits": "1",
        }

        setDoc(myDoc, docData)
            // Handling Promises
            .then(() => {
                // MARK: Success
                console.log('vai para o firebase!!');
            })
            .catch((error) => {
                // MARK: Failure
                alert(error.message)
            })

        deleteDoc(doc(db,"newtile",nomeimag[0]));
        console.log("fotinha", nomeimag[0]);
        const desertRef = ref(storage, 'newTile/'+fotinha);
        console.log("fotinha", fotinha);

// Delete the file
        deleteObject(desertRef).then(() => {

            console.log("File deleted successfully");
        }).catch((error) => {
            // Uh-oh, an error occurred!
        });

        inuse++;

    }

    const regect = () => {

        deleteDoc(doc(db,"newtile",nomeimag[0]));
        console.log("fotinha", nomeimag[0]);
        const desertRef = ref(storage, 'newTile/'+fotinha);
        console.log("fotinha", fotinha);

// Delete the file
        deleteObject(desertRef).then(() => {

            console.log("File deleted successfully");
        }).catch((error) => {
            // Uh-oh, an error occurred!
        });

        inuse++;

    }

    const next=()=>{
        inuse++;
    }

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
                    <h4 className="fw-bolder mt-1">unknown tile</h4>
                </header>

                <div className="container d-flex justify-content-center mb-3 pb-5 mt-5 pt-1">
                    <Card className="tile-rounded w-25">
                        <Card.Img variant="top" src={url} className="tile-rounded" />
                        <Card.Body>
                            <Card.Text className="small">
                                <p className="m-0 fw-bolder">user's photo</p>
                                <p className="m-0 mt-1 small">{lati}</p>
                                <p className="m-0 small">{longi}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <div className="ms-5">
                        <div className="d-flex justify-content-around mb-4 mt-2">
                            <input type="text" onChange={(event) => {
                                setAzuname(event.target.value);
                            }} placeholder="add tile name..." className="form-round p-2 fw-light h-50" />
                        </div>
                        <div className="ms-1">
                            <p className="fw-bolder mb-0">date</p>
                            <p className="small">{date3}</p>
                            <p className="fw-bolder mb-0">tile state</p>
                            <p className="small">{stage}</p>
                            <p className="fw-bolder mb-0">additional information</p>
                            <p className="small">{info}</p>
                        </div>
                    </div>
                </div>

                <div className="container w-25">
                    <div className="d-flex justify-content-around">
                        {/*goes to next*/}
                        <Link to="#" className="col-6">
                            <Button className="btn-accept fw-light p-2 w-100 mt-2 text-center" variant="primary" type="submit" onClick={accept}>
                                accept
                            </Button>
                        </Link>
                        {/*goes to next*/}
                        <Link to="#" className="col-6 ms-2">
                            <Button onClick={regect} className="btn-deny fw-light p-2 w-100 mt-2 text-center" variant="primary" type="submit">
                                deny
                            </Button>
                        </Link>
                    </div>
                    {/*goes to next*/}
                    <Link to="#">
                        <Button onClick={next} className="btn-lightblue fw-light p-2 w-100 d-block mt-2 mx-auto text-center" variant="primary">
                            next request
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NewTileRequest;