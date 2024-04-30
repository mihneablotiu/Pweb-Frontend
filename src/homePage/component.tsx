import { useState } from "react";
import NavBar from "./navBar/component.tsx";
import TodoLists from "./todoLists/component.tsx";
import Feedback from "./feedback/component.tsx";

function Home() {
    const [activeComponent, setActiveComponent] = useState("TodoLists");

    return (
        <div>
            <NavBar setActiveComponent={setActiveComponent} />
            {activeComponent === "TodoLists" ? <TodoLists /> : <Feedback />}
        </div>
    );
}

export default Home;
