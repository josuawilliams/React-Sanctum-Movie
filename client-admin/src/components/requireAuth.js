import { Navigate } from "react-router-dom"

export default function requireAuth({ children }) {
    let Auth = localStorage.access_token
    if (!Auth) {
        return <Navigate to="/login" replace />
    }
    return children
}

