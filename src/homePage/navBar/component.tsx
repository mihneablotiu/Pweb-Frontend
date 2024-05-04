import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./component.css";
import {useNavigate} from "react-router"; // Import CSS file for NavBar styling

function NavBar() {
    const navigate = useNavigate();

    return (
        <div className="navbar-container">
            <Typography variant="h6" className="navbar-header">
                Menu
            </Typography>
            <div className="navbar-buttons">
                <Button onClick={() => navigate("/home/todoLists")} color="inherit">
                    TodoLists
                </Button>
                <Button onClick={() => navigate("/home/feedback")} color="inherit">
                    Feedback
                </Button>
            </div>
        </div>
    );
}

export default NavBar;
