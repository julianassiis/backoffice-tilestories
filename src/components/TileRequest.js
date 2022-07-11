
import '../css/App.css';
import '../css/Login.css';
import '../css/TileRequest.css';
import Navigation from './Navigation';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import {Link, useNavigate} from "react-router-dom";
import {getFirestore} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import {doc, setDoc, getDoc, updateDoc} from "firebase/firestore";
import { useState, useEffect } from 'react';
import { getStorage, ref, getDownloadURL, listAll, list, deleteObject } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAeTmpYBFU9qhsqX0mIU_gg9lKBKJ9TBu0",
    authDomain: "tilestories-64fbb.firebaseapp.com",
    projectId: "tilestories-64fbb",
    storageBucket: "tilestories-64fbb.appspot.com",
    messagingSenderId: "905474695050",
    appId: "1:905474695050:web:bab623a9e3c2a84bfd7273",
    measurementId: "G-3K5HHWFT9Z"
}

const app=initializeApp(firebaseConfig);
const db= getFirestore(app);
const storage = getStorage(app);
const listRef = ref(storage, '/toApprove');
var firstPage;
var urls=[];
var imaaa;
var numreq;
var answer_array;
var nomeimg;
var imaquest;
var contador=0;




function TileRequest() {

    const navigate=useNavigate();

    const [url, setUrl] = useState()
    const [urll, setUrll] = useState()
    const [folder, setFolder] = useState()
    const [item, setItem] = useState()
    const [userDoc, setUserDoc] = useState(null)

    function accept(){


        var apaga=answer_array[1];
        var azul=nomeimg[0]//id do azulejo
        var uid=nomeimg[1]

        const myDoc = doc(db, `users/${uid}/azulejo`,azul)

        // Your Document Goes Here
        const docData = {
            "teste": 'este é o azulejo '+apaga,

        }

        setDoc(myDoc, docData)


        var desertRef= ref(storage, 'toApprove/'+apaga)

       deleteObject(desertRef).then(() => {
            console.log("File deleted successfully");
        }).catch((error) => {
            // Uh-oh, an error occurred!
        });



        contador++;



        if (contador<numreq){
            console.log(contador)
            spliit(contador);
        }else{
            console.log("chegou ao fim");
            navigate("/login");
        }
    }

    if (contador>=numreq){
        navigate("/norequest");
    }

    function refuse(){


        var apaga=answer_array[1];
        var azul=nomeimg[0]//id do azulejo
        var uid=nomeimg[1]

        const myDoc = doc(db, `users/${uid}/azulejo`,azul)

        // Your Document Goes Here
        const docData = {
            "teste": 'este é o azulejo '+apaga,

        }

        setDoc(myDoc, docData)
        var desertRef= ref(storage, 'toApprove/'+apaga)

        deleteObject(desertRef).then(() => {
            console.log("File deleted successfully");
        }).catch((error) => {
            // Uh-oh, an error occurred!
        });



        contador++;




        if (contador<numreq){
            spliit(contador);
        }else{
            console.log("chegou ao fim");
        }
    }

        const func = async () => {


            const reference = ref(storage, 'official/'+userDoc.photo);
            console.log("apanha aqui", userDoc.photo);
            console.log("numero de requests", numreq);

            await getDownloadURL(reference).then((x) => {
                setUrl(x);
            })


        }


    function func2(imag) {


        const reference = ref(storage, 'toApprove/'+imag);
        console.log("apanha aqui2", imag);

         getDownloadURL(reference).then((x) => {
            setUrll(x);
        })

    }

    useEffect(() => {
        const funci = async () => {

             firstPage = await list(listRef, { maxResults: 100 });
            console.log("listref", firstPage);
             urls=firstPage.items.map(element=>element["_location"]["path_"])
            numreq=urls.length;
             console.log("estes sao os urls",urls)
            if (contador===0){
                spliit(contador);
            }

        }

       funci()
    }, [])

    function spliit(pa){

        answer_array = urls[pa].split('/');
         nomeimg= answer_array[1].split('.');
            console.log("PAPAPA",nomeimg[0]);//da o id do azulejo
        console.log("PAPAPAiii",answer_array[1]);//nome azu
        console.log("id user",nomeimg[1]);//da o id do azulejo
        doIT(nomeimg[0])
        func2(answer_array[1])
    }

    function doIT(idazu){

        console.log("este é o idazu",idazu);
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(db, "azulejo", idazu)

        getDoc(myDoc)
            // Handling Promises
            .then((snapshot) => {
                // MARK: Success
                if (snapshot.exists) {
                    setUserDoc(snapshot.data())
                }
                else {
                    alert("No Doc Found")
                }
            })
            .catch((error) => {
                // MARK: Failure
                alert(error.message)
            })
        if (userDoc==null){
            console.log("a dar load do userdoc")
        }else{

        }
    }

    useEffect(() => {

        func();
    }, [userDoc]);






if (url == undefined){

    console.log("loading...")
}else{
    imaaa =<Card.Img variant="top" src={url} className="tile-rounded" />

    imaquest=<Card.Img variant="top" src={urll} className="tile-rounded" />

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
                    <h4 className="fw-bolder mt-1">name of existing tilee</h4>
                </header>

                <div className="container d-flex justify-content-around mb-3 pb-5 mt-5 pt-1">
                    <Card className="tile-rounded w-25">
                        {imaquest}
                        <Card.Body>
                            <Card.Text className="small">
                                <p className="m-0 fw-bolder">tilestories' photo</p>
                                <p className="m-0 mt-1 small">latitude aqui</p>
                                <p className="m-0 small">longitude aqui</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="tile-rounded w-25">
                        {imaaa}
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
                            <Button className="btn-accept fw-light p-2 w-100 mt-2 text-center" variant="primary" type="submit" onClick={accept}>
                                accept
                            </Button>
                        </Link>
                        {/*goes to next*/}
                        <Link to="#" className="col-6 ms-2">
                            <Button className="btn-deny fw-light p-2 w-100 mt-2 text-center" variant="primary" type="submit" onClick={refuse}>
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