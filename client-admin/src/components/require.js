import { Navigate } from "react-router-dom"

export default function require({children}) {
    let Auth = localStorage.access_token
    if(Auth) {
        return <Navigate to="/" replace/>
    }
    return children
}