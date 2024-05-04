import NavBar from "./navBar/component.tsx";
import {Outlet} from "react-router";
import "./component.css"

function Home() {
    return (
        <div className="home-container">
            <NavBar />
            <Outlet />
        </div>
    );
}

export default Home;
