import "./component.css"
import TableComponent from "./table/component.tsx";
import {useParams} from "react-router";
import {createConfiguration, TodoListControllerApi} from "../../../client";
import {TodoListControllerApiGetTodoList1Request} from "../../../client/types/ObjectParamAPI.ts";
import {useEffect, useState} from "react";

function Todos() {
    const { id } = useParams();
    const configuration = createConfiguration();
    const todoListApiInstance = new TodoListControllerApi(configuration);
    const [todoListName, setTodoListName] = useState("");

    useEffect(() => {
        getTodoListInfo();
    }, []);

    const getTodoListInfo = async () => {
        const request: TodoListControllerApiGetTodoList1Request = {
            id: parseInt(id as string),
            authorization: "Bearer " + localStorage.getItem("token"),
        };

        const response: any = await todoListApiInstance.getTodoList1(request.id, request.authorization);
        setTodoListName(response.title)
    }

    return (
        <div className="todos-container">
            <h2>Todos - Todolist: {todoListName}</h2>
            <TableComponent todoListId={id}/>
        </div>
    );
}

export default Todos;
