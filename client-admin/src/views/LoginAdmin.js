import {  useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import  login  from "../store/actionFetch/login"
import swal from "sweetalert"

export default function LoginAdmin() {
    const [input, setInputLogin] = useState({
        email : "",
        password : ""
    })
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const handleOnChange = (e) => {
        const { name, value } = e.target
        setInputLogin({
            ...input,
            [name]: value
        })
    }
    const onClickLogin = (e) => {
        e.preventDefault()
        dispatch(login(input))
        .then((res) => {
            return res.json()
        }).then((data) => {
            if(data.message){
                throw new Error(data.message)
            }else{
                localStorage.setItem("access_token", data.access_token)
                swal("Welcome", "", "success");
                Navigate("/")
            }
        }).catch((err) => {
            swal("Oppss", `${err.message}`, "error"); 
        })
    }
    
    return (
        <>
            <section className="mx-auto">
                <div className="container h-100">
                    <div className="row justify-content-sm-center h-100">
                        <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                            <div className="card shadow-lg">
                                <div className="card-body p-5">
                                    <h1 className="fs-4 card-title fw-bold mb-4">Login Super Admin</h1>
                                    <form>
                                        <div className="mb-3">
                                            <label className="mb-2 text-muted" htmlFor="email">E-Mail</label>
                                            <input value={input.email} onChange={handleOnChange} id="email" type="email" className="form-control" name="email" />
                                        </div>
                                        <div className="mb-3">
                                            <div className="mb-2 w-100">
                                                <label className="text-muted" htmlFor="password">Password</label>

                                            </div>
                                            <input value={input.password} onChange={handleOnChange} id="password" type="password" className="form-control" name="password" required />
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <button onClick={onClickLogin} type="submit" className="btn btn-primary ms-auto">
                                                Login
                                            </button>
                                        </div>
                                    </form>

                                </div>
                                <div className="card-footer py-3 border-0">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}