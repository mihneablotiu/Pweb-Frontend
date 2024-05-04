import TableComponent from "./table/component.tsx";
import './component.css';

function TodoLists() {
    return (
        <div className="todo-lists-container">
            <h2>TodoLists</h2>
            <TableComponent />
        </div>
    );
}

export default TodoLists;
