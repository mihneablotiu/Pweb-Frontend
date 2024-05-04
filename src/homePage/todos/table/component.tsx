import {useEffect, useState} from "react";
import {createConfiguration, TodoControllerApi } from "../../../../client";
import {
    TodoControllerApiCreateTodoRequest, TodoControllerApiDeleteTodoRequest,
    TodoControllerApiGetTodos1Request, TodoControllerApiGetTodosRequest, TodoControllerApiUpdateTodoRequest } from "../../../../client/types/ObjectParamAPI.ts";
import {
    Button, Dialog, DialogActions, DialogContent, DialogTitle,
    List,
    ListItem,
    ListItemText,
    Paper,
    Popper,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead, TableRow,
    TextField
} from "@mui/material";

function TableComponent({ todoListId }: {todoListId?: string}) {
    const PAGE_SIZE = 5;
    const configuration = createConfiguration();
    const apiInstance = new TodoControllerApi(configuration);
    const [anchorEl, setAnchorEl] = useState<any>(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    const [currentPage, setCurrentPage] = useState(0);
    const [todos, setTodos] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);

    const [openModal, setOpenModal] = useState(false);
    const [error, setError] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [openSuccessModal, setOpenSuccessModal] = useState(false);
    const [maxValue, setMaxValue] = useState(0);
    const [isEdit, setIsEdit] = useState(false); // New state to track whether it's an edit or add operation
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        if (term.trim() === '') {
            setSearchResults([]);
            return;
        }

        const filteredResults = todos.filter((item: any) => item.title.toLowerCase().includes(term.toLowerCase()));
        setSearchResults(filteredResults);
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const getMaxValue = async () => {
        const request: TodoControllerApiGetTodosRequest = {
            todoListId: todoListId as any as number,
            authorization: "Bearer " + localStorage.getItem('token')
        };

        const response = await apiInstance.getTodos(request.todoListId, request.authorization);
        setMaxValue(response.todos.length !== 0 ? Math.ceil(response.todos.length / PAGE_SIZE) - 1 : 0);
    }
    
    const getTodos = async () => {
        const request: TodoControllerApiGetTodos1Request = {
            todoListId: todoListId as any as number,
            page: currentPage,
            size: PAGE_SIZE,
            authorization: "Bearer " + localStorage.getItem('token')
        };

        const response = await apiInstance.getTodos1(request.todoListId, request.page, request.size, request.authorization);
        setTodos(response.todos);
    }

    useEffect(() => {
        getMaxValue();
        getTodos();
    }, [currentPage, maxValue]);

    const handleOpenModal = () => {
        setOpenModal(true);
        setIsEdit(false); // Reset isEdit state when opening modal for adding
    };

    const handleCloseModal = () => {
        setTitle('');
        setDescription('');
        setIsCompleted(false);
        setOpenModal(false);
    };

    const handleTitleChange = (event: any) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: any) => {
        setDescription(event.target.value);
    };

    const handleIsCompletedChange = (event: any) => {
        setIsCompleted(event.target.checked);
    }

    const handleSubmit = async (isEdit: boolean) => {
        if (title == '' || description == '') {
            setError(true);
            setModalMessage('Please fill out all fields.');
            setOpenModal(false);
            setOpenSuccessModal(true);
            return;
        }

        try {
            if (isEdit) {
                const request: TodoControllerApiUpdateTodoRequest = {
                    authorization: "Bearer " + localStorage.getItem('token'),
                    todoListId: todoListId as any as number,

                    todoDTO: {
                        title: title,
                        description: description,
                        isCompleted: isCompleted
                    }
                };

                const response = await apiInstance.updateTodo(request.authorization, request.todoListId, request.todoDTO);
                setModalMessage(response.message || '');
                getTodos();
            } else {
                const request: TodoControllerApiCreateTodoRequest = {
                    authorization: 'Bearer ' + localStorage.getItem('token'),
                    todoListId: todoListId as any as number,

                    todoDTO: {
                        title: title,
                        description: description,
                        isCompleted: isCompleted
                    }
                };

                const response = await apiInstance.createTodo(request.authorization, request.todoListId, request.todoDTO);
                setModalMessage(response.message || '');
                setCurrentPage(0);
                getTodos();
                getMaxValue();
            }

            setError(false);
            setTitle('');
            setDescription('');
            setIsCompleted(false);

        } catch (error: any) {
            const responseData = JSON.parse(error.body)
            const errorMessage = responseData.message || 'An error occurred';
            setModalMessage(errorMessage);
            setError(true);
        } finally {
            setOpenModal(false);
            setOpenSuccessModal(true);
        }
    }

    const handleEdit = (id: any) => {
        const todoItem: { todoId: number; title: string; description: string; isCompleted: boolean } = todos.filter((item: any) => item.todoId === id)[0];
        setTitle(todoItem.title);
        setDescription(todoItem.description);
        setIsCompleted(todoItem.isCompleted);
        setOpenModal(true);
        setIsEdit(true); // Set isEdit to true when opening modal for editing
    };

    const handleDelete = async (id: any) => {
        const request: TodoControllerApiDeleteTodoRequest = {
            todoListId: todoListId as any as number,
            // number
            todoId: id,
            // string
            authorization: "Bearer " + localStorage.getItem('token')
        };

        try {
            const response = await apiInstance.deleteTodo(request.todoListId, request.todoId, request.authorization);
            setModalMessage(response.message || '');
            setError(false);
            setCurrentPage(0);
            getTodos();
            getMaxValue();
        } catch (error: any) {
            console.log(error)
            const responseData = JSON.parse(error.body)
            const errorMessage = responseData.message || 'An error occurred';
            setModalMessage(errorMessage);
            setError(true);
        } finally {
            setOpenSuccessModal(true);
        }
    };

    const handleEnter = (id: any) => {
        console.log("Clicked on todo with id: " + id);
    }

    const handlePageForward = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePageBack = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleCloseSuccessModal = () => {
        setOpenSuccessModal(false);
    };

    const handleHover = (itemId: number | null) => {
        setHoveredItem(itemId);
    };

    return (
        <div className="top-container">
            <Button className="add-button" variant="contained" color="primary" onClick={handleOpenModal}>
                Add
            </Button>
            <TextField
                label="Search"
                variant="outlined"
                onChange={handleSearch}
                onClick={handleClick}
            />
            <Popper id={id} open={open} anchorEl={anchorEl} style={{width: "75%"}}>
                <Paper>
                    <List>
                        {searchResults.map((item: any) => (
                            <ListItem key={item.todoId} onClick={() => handleEnter(item.todoId)}
                                      onMouseEnter={() => handleHover(item.todoId)}
                                      onMouseLeave={() => handleHover(null)}
                                      style={{ backgroundColor: hoveredItem === item.todoId ? '#f0f0f0' : 'inherit'}}>
                                <ListItemText primary={item.title}/>
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Popper>
            <TableContainer component={Paper} className="table-container">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>isCompleted</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todos && todos.map((item: any) => (
                            <TableRow key={item.todoId}>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>{item.isCompleted ? "true" : "false"}</TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="secondary" onClick={() => handleEdit(item.todoId)}>Edit</Button>
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="primary" onClick={() => handleDelete(item.todoId)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="pagination-container">
                <Button className="pagination-button" variant="outlined" color="primary" onClick={handlePageBack} disabled={currentPage === 0}>Back</Button>
                <Button className="pagination-button" variant="outlined" color="primary" onClick={handlePageForward} disabled={currentPage === maxValue}>Forward</Button>
            </div>
            <Dialog open={openModal} onClose={handleCloseModal}>
                <DialogTitle>{isEdit ? 'Edit Todo' : 'Add Todo'}</DialogTitle>
                <DialogContent dividers>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Title"
                        type="text"
                        fullWidth
                        value={title}
                        onChange={handleTitleChange}
                        disabled={isEdit}
                    />
                    <TextField
                        margin="dense"
                        label="Description"
                        type="text"
                        fullWidth
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                    <TextField
                        margin="dense"
                        label="isCompleted"
                        type="checkbox"
                        fullWidth
                        value={isCompleted}
                        onChange={handleIsCompletedChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => handleSubmit(isEdit)} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={openSuccessModal} onClose={handleCloseSuccessModal}>
                <DialogTitle>{error ? "Error" : "Success"}</DialogTitle>
                <DialogContent dividers>
                    {modalMessage}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseSuccessModal} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default TableComponent;
