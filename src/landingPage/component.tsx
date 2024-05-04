import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./component.css";
import { Outlet, useNavigate } from "react-router";

function App() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token")); // Check if token exists in local session

    useEffect(() => {
        if (localStorage.getItem("token") !== null && localStorage.getItem("token") !== undefined && localStorage.getItem("token") !== "") {
            setIsLoggedIn(true);
        }
    });

    // Function to handle logout
    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove token from local session
        setIsLoggedIn(false); // Update isLoggedIn state to false

        navigate("/login"); // Redirect to login page
    };

    // Component for the marquee
    const MarqueeComponent = () => {
        return (
            <div className="marquee-container">
                <Typography variant="body2" className="marquee-text">
                    Copyright © 2024 Mihnea Blotiu
                </Typography>
            </div>
        );
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        TodoLists App
                    </Typography>
                    {isLoggedIn ? (
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    ) : (
                        <>
                            <Button color="inherit" onClick={() => navigate("/register")}>Register</Button>
                            <Button color="inherit" onClick={() => navigate("/login")}>Login</Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Box display="flex" sx={{ flexGrow: 1 }}>
                <Outlet />
            </Box>
            <AppBar position="static">
                <Toolbar>
                    <MarqueeComponent />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default App;
