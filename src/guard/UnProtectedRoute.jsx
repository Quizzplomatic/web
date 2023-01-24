import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext/AuthContext'

const UnprotectedRoute = () => {
    const { user, isAuthenticationFetched, createToast } = useAuthContext()

    if (isAuthenticationFetched && user) {
        return <Navigate to='/' />;
    } else {
        return <Outlet />;
    }
}

export default UnprotectedRoute;