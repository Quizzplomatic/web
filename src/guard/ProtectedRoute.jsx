import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../contexts/AuthContext/AuthContext"

const ProtectedRoute = () => {
    const { user, isAuthenticationFetched, createToast } = useAuthContext()

    if (isAuthenticationFetched && !user) {
        createToast('You need to log in first!', 'fail')
        return <Navigate to="/login" />
    } else {
        return <Outlet />
    }
}

export default ProtectedRoute