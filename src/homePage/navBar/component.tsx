import Button from "@mui/material/Button";

const NavBar = ({ setActiveComponent }: { setActiveComponent: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <div>
            <Button onClick={() => setActiveComponent("TodoLists")}>TodoLists</Button>
            <Button onClick={() => setActiveComponent("Feedback")}>Feedback</Button>
        </div>
    );
};

export default NavBar;
