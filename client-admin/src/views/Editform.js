import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Genre from '../store/actionFetch/genre';
import {editData, EditMovie} from '../store/actionFetch/editMovie';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import swal from 'sweetalert';

export default function Editform() {
    const [input, setinputEdit] = useState({
        title: '',
        rating: '',
        synopsis: '',
        GenreId: '',
        trailerURL: '',
        imgURL: '',
        name1: '',
        name2: '',
        name3: '',
        pict1: '',
        pict2: '',
        pict3: ''
    })
    const Movie = useSelector(state => state.Edit.edit)

    
    const Genres = useSelector(state => state.DataGenre.Genre)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams().id


    //DATA FOR EDIT
    useEffect(() => {
        dispatch(editData(params))
        dispatch(Genre())
    }, [])

    //SET DATA FOR EDIT
    useEffect(() => {
        let Cast = Movie.Casts
        if (Cast.length > 0) {
            setinputEdit({
                title: Movie.title,
                rating: Movie.rating,
                synopsis: Movie.synopsis,
                GenreId: Movie.GenreId,
                trailerURL: 'https://www.youtube.com/watch?v='+ Movie.trailerURL.split("embed/")[1],
                imgURL: Movie.imgURL,
                name1: Movie.Casts[0].name,
                name2: Movie.Casts[1].name,
                name3: Movie.Casts[2].name,
                pict1: Movie.Casts[0].profilePict,
                pict2: Movie.Casts[1].profilePict,
                pict3: Movie.Casts[2].profilePict
            })
        }
    }, [Movie])

    const handleChange = (e) => {
        const { name, value } = e.target
        setinputEdit({
            ...input,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(EditMovie(params, input))
        .then(res => res.json())
        .then((data)=>{
            if(data.message === "Successfully Update Movie"){
                navigate("/")
            }
            swal("Message", `${data.message}`);
        })
        .catch(err =>{
            swal("Message", `${err.message}`);
        })
    }


    return (
        <>
            <div className="login-background">
                <Form className="pt-4" style={{ marginLeft: '15vw', width: '25vw', marginRight: '22rem' }}>
                    <h1>EDIT YOUR MOVIE</h1><br />
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>TITLE MOVIE</Form.Label>
                            <Form.Control name='title' onChange={handleChange} value={input.title} placeholder="Input Title Movie name here" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label>RATING</Form.Label>
                            <Form.Control name='rating' onChange={handleChange} value={input.rating} type="number" min="0" placeholder="Input Rating here" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridPassword">
                        <Form.Label>SYNOPSIS</Form.Label>
                        <Form.Control name='synopsis' onChange={handleChange} value={input.synopsis} type="text" placeholder="Input synopsis here" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>TRAILER VIDEOS URL</Form.Label>
                        <Form.Control name='trailerURL' onChange={handleChange} value={input.trailerURL} type="text" placeholder="Input TRAILER URL Here" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>IMAGE MOVIE URL</Form.Label>
                        <Form.Control name='imgURL' onChange={handleChange} value={input.imgURL} type="text" placeholder="Input IMAGE URL Here" />
                    </Form.Group>

                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                            <Form.Label>CASTS PHOTO</Form.Label>
                            <Form.Control name='pict1' onChange={handleChange} value={input.pict1} type="text" placeholder="Input Image Cast URL Here" /><br />
                            <Form.Control name='pict2' onChange={handleChange} value={input.pict2} type="text" placeholder="Input Image Cast URL Here" /><br />
                            <Form.Control name='pict3' onChange={handleChange} value={input.pict3} type="text" placeholder="Input Image Cast URL Here" /><br />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                            <Form.Label>CASTS NAME</Form.Label>
                            <Form.Control name='name1' onChange={handleChange} value={input.name1} type="text" placeholder="Input Name Cast Here" /><br />
                            <Form.Control name='name2' onChange={handleChange} value={input.name2} type="text" placeholder="Input Name Cast Here" /><br />
                            <Form.Control name='name3' onChange={handleChange} value={input.name3} type="text" placeholder="Input Name Cast Here" /><br />
                        </Form.Group>
                    </Row>

                    <Form.Label>GENRE</Form.Label>
                    <Form.Select name='GenreId' onChange={handleChange} value={input.GenreId} aria-label="default select example">
                        <option >
                            Choose Genre
                        </option>
                        {Genres.map((item, index) => {
                            if (item.id === Movie.GenreId) {
                                return <option selected value={item.id}>{item.name}</option>
                            }
                            else {
                                return <option value={item.id}>{item.name}</option>
                            }
                        })}
                    </Form.Select>
                    <Button onClick={handleSubmit} className="mt-3" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}