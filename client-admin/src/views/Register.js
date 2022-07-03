import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import RegisterStaff from '../store/actionFetch/register';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [input , setInputRegister] = useState({
        username: '',
        password: '',
        email: '',
        address: '',
        phoneNumber: '',
    })
    const Navigate = useNavigate();
    const dispatch = useDispatch()
    
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputRegister({
            ...input,
            [name]: value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(RegisterStaff(input))
        .then((res)=>{
            if(!res.ok){
                throw new Error(res.statusText)
            }
            return res.json()
        })
        .then((data)=>{
            swal("Yasss", `${data.message}`, "success"); 
            Navigate("/") 
        })
        .catch((err)=>{
            if(err.message==="Forbidden"){
                swal("Not Allowed", "You are not Master Admin", "error");
            }
        })
    }

    return (
        <>
            <div className="" style={{marginTop: "80px"}}>
                <h1 className="pt-5 admin-add">Register Staff</h1>
                <Form className="pt-4" style={{ marginLeft: '38vw', width: '25vw' }}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name='email' value={input.email} onChange={handleOnChange} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' value={input.password} onChange={handleOnChange} type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name='username' value={input.username} onChange={handleOnChange} type="text" placeholder="Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control name='address' value={input.address} onChange={handleOnChange} type="text" placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control name='phoneNumber' value={input.phoneNumber} onChange={handleOnChange} type="text" placeholder="+81234567890" />
                    </Form.Group>

                    <Button onClick={handleOnSubmit} className="mt-3" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}