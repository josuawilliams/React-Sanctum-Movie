import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from "react-router-dom"
import addMovies from '../store/actionFetch/addmovie';
import swal from 'sweetalert'

export default function AddForm() {
    const [input, setInputMovie] = useState({
        title: "",
        rating: "",
        synopsis: "",
        trailerURL: "",
        imgURL: "",
        GenreId: "",
        pict1: "",
        pict2: "",
        pict3: "",
        name1: "",
        name2: "",
        name3: ""
    })
    const Navigate = useNavigate()
    const dispatch = useDispatch();
    const handleOnChange = (e) => {
        const {name,  value } = e.target
        setInputMovie({
            ...input,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addMovies(input))
        .then((res) => {
            return res.json()
        }).then((data) => {
            swal("Thank You", `${data.message}`, "success");
            Navigate("/")
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <>
            <div className="login-background">
                <Carousel id='corosal' fade>
                    <Carousel.Item>
                        <img
                            id='imgAdd'
                            className="d-block w-100"
                            src="https://lumiere-a.akamaihd.net/v1/images/au_marvel_shang-chiandthelegendofthetenrings_payoff_mov_cc4c0527.jpeg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            id='imgAdd'
                            className="d-block w-100"
                            src="https://m.media-amazon.com/images/M/MV5BYzA3NjY4ZjUtMjQ3ZC00N2NmLTk2OTktODllODk0NGRmNjQyXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            id='imgAdd'
                            className="d-block w-100"
                            src="https://cineverse.id/wp-content/uploads/2021/12/cover-32.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

                <Form className="pt-4" style={{ marginLeft: '15vw', width: '25vw', marginRight: '22rem' }}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>TITLE MOVIE</Form.Label>
                            <Form.Control name="title" value={input.title} type="text" onChange={handleOnChange} placeholder="Input Title Movie name here" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label>RATING</Form.Label>
                            <Form.Control name="rating" value={input.rating} onChange={handleOnChange} type="number" min="0" placeholder="Input Rating here" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridPassword">
                        <Form.Label>SYNOPSIS</Form.Label>
                        <Form.Control name="synopsis" value={input.synopsis} onChange={handleOnChange} type="text" placeholder="Input synopsis here" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>TRAILER VIDEOS URL</Form.Label>
                        <Form.Control name="trailerURL" value={input.trailerURL} onChange={handleOnChange} type="text" placeholder="JUST FROM YOUTUBE" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>IMAGE MOVIE URL</Form.Label>
                        <Form.Control name="imgURL" value={input.imgURL} onChange={handleOnChange} type="text" placeholder="Input IMAGE URL Here" />
                    </Form.Group>

                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                            <Form.Label>CASTS PHOTO</Form.Label>
                            <Form.Control name="pict1" value={input.pict1} onChange={handleOnChange} type="text" placeholder="Input Image Cast URL Here" /><br />
                            <Form.Control name="pict2" value={input.pict2} onChange={handleOnChange} type="text" placeholder="Input Image Cast URL Here" /><br />
                            <Form.Control name="pict3" value={input.pict3} onChange={handleOnChange} type="text" placeholder="Input Image Cast URL Here" /><br />
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                            <Form.Label>CASTS NAME</Form.Label>
                            <Form.Control name="name1" value={input.name1} onChange={handleOnChange} type="text" placeholder="Input Name Cast Here" /><br />
                            <Form.Control name="name2" value={input.name2} onChange={handleOnChange} type="text" placeholder="Input Name Cast Here" /><br />
                            <Form.Control name="name3" value={input.name3} onChange={handleOnChange} type="text" placeholder="Input Name Cast Here" />
                        </Form.Group>
                    </Row>

                    <Form.Label>GENRE</Form.Label>
                    <Form.Select name="GenreId" value={input.GenreId} onChange={handleOnChange} aria-label="default select example">
                        <option value="" >
                           Choice Genre
                        </option>
                        <option value={"1"}>Action</option>
                        <option value={"2"}>Comendy</option>
                        <option value={"3"}>Romance</option>
                        <option value={"4"}>Horror</option>
                        <option value={"5"}>Science Fiction</option>
                    </Form.Select>

                    <Button onClick={handleSubmit}  className="mt-3" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}
