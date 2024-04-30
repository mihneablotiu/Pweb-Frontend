import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function withAuth(Component: React.ComponentType) {
    return function WrappedComponent() {
        const navigate = useNavigate();

        // Check if token exists in local storage
        const token = localStorage.getItem('token');

        useEffect(() => {
            if (!token) {
                navigate('/login'); // Redirect to login page if token does not exist
            }
        }, [navigate, token]); // Add navigate and token as dependencies

        // If token exists, render the protected component
        return token ? <Component /> : null;
    };
}

export default withAuth;
