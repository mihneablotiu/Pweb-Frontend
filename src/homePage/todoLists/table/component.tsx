import { useEffect, useState } from 'react';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Popper,
    List,
    ListItem, ListItemText
} from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './component.css';
import { createConfiguration, TodoListControllerApi } from "../../../../client";
import {
    TodoListControllerApiCreateTodoListRequest,
    TodoListControllerApiDeleteTodoListRequest,
    TodoListControllerApiGetTodoListRequest,
    TodoListControllerApiGetTodoListsRequest,
    TodoListControllerApiUpdateTodoListRequest
} from "../../../../client/types/ObjectParamAPI.ts";
import {useNavigate} from "react-router";

function TableComponent() {
    const [openModal, setOpenModal] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [openSuccessModal, setOpenSuccessModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const PAGE_SIZE = 5;
    const configuration = createConfiguration();
    const apiInstance = new TodoListControllerApi(configuration);
    const [todoLists, setTodoLists] = useState([]);
    const [isEdit, setIsEdit] = useState(false); // New state to track whether it's an edit or add operation
    const [searchResults, setSearchResults] = useState([]);
    const [anchorEl, setAnchorEl] = useState<any>(null);
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        if (term.trim() === '') {
            setSearchResults([]);
            return;
        }

        const filteredResults = todoLists.filter((item: any) => item.title.toLowerCase().includes(term.toLowerCase()));
        setSearchResults(filteredResults);
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const getMaxValue = async () => {
        const request: TodoListControllerApiGetTodoListsRequest = {
            authorization: "Bearer " + localStorage.getItem('token')
        };

        const response = await apiInstance.getTodoLists(request.authorization);
        setMaxValue(response.todoLists.length !== 0 ? Math.ceil(response.todoLists.length / PAGE_SIZE) - 1 : 0);
    }
    const getTodoLists = async () => {
        const request: TodoListControllerApiGetTodoListRequest = {
            page: currentPage,
            size: PAGE_SIZE,
            authorization: "Bearer " + localStorage.getItem('token')
        };

        const response = await apiInstance.getTodoList(request.page, request.size, request.authorization);
        setTodoLists(response.todoLists);
    }

    useEffect(() => {
        getMaxValue();
        getTodoLists();
    }, [currentPage, maxValue]);

    const handleOpenModal = () => {
        setOpenModal(true);
        setIsEdit(false); // Reset isEdit state when opening modal for adding
    };

    const handleCloseModal = () => {
        setTitle('');
        setDescription('');
        setOpenModal(false);
    };

    const handleTitleChange = (event: any) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: any) => {
        setDescription(event.target.value);
    };

    const handleSubmit = async (isEdit: boolean) => { // Accept isEdit parameter
        if (title == '' || description == '') {
            setError(true);
            setModalMessage('Please fill out all fields.');
            setOpenModal(false);
            setOpenSuccessModal(true);
            return;
        }

        try {
            if (isEdit) {
                // Logic for edit operation
                const request: TodoListControllerApiUpdateTodoListRequest = {
                    // string
                    authorization: "Bearer " + localStorage.getItem('token'),
                    // TodoListDTO
                    todoListDTO: {
                        title: title,
                        description: description
                    }
                };
                    const response = await apiInstance.updateTodoList(request.authorization, request.todoListDTO);
                    setModalMessage(response.message || '');
                    getTodoLists();
            } else {
                // Logic for add operation
                const request: TodoListControllerApiCreateTodoListRequest = {
                    authorization: 'Bearer ' + localStorage.getItem('token'),
                    todoListDTO: {
                        title: title,
                        description: description
                    }
                };

                const response = await apiInstance.createTodoList(request.authorization, request.todoListDTO);
                setModalMessage(response.message || '');
                setCurrentPage(0);
                getTodoLists();
                getMaxValue();
            }

            setError(false);
            setTitle('');
            setDescription('');
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
        const todoItem: { todoListId: number; title: string; description: string } = todoLists.filter((item: any) => item.todoListId === id)[0];
        setTitle(todoItem.title);
        setDescription(todoItem.description);
        setOpenModal(true);
        setIsEdit(true); // Set isEdit to true when opening modal for editing
    };

    const handleDelete = async (id: any) => {
        const request: TodoListControllerApiDeleteTodoListRequest = {
            // number
            id: id,
            // string
            authorization: "Bearer " + localStorage.getItem('token')
        };

        try {
            const response = await apiInstance.deleteTodoList(request.id, request.authorization);
            setModalMessage(response.message || '');
            setError(false);
            setCurrentPage(0);
            getTodoLists();
            getMaxValue();
        } catch (error: any) {
            const responseData = JSON.parse(error.body)
            const errorMessage = responseData.message || 'An error occurred';
            setModalMessage(errorMessage);
            setError(true);
        } finally {
            setOpenSuccessModal(true);
        }
    };

    const navigate = useNavigate();
    const handleEnter = (id: any) => {
        navigate(`/home/todoLists/${id}`)
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
                            <ListItem key={item.todoListId} onClick={() => handleEnter(item.todoListId)}
                                      onMouseEnter={() => handleHover(item.todoListId)}
                                      onMouseLeave={() => handleHover(null)}
                                      style={{ backgroundColor: hoveredItem === item.todoListId ? '#f0f0f0' : 'inherit'}}>
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
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                            <TableCell>Enter</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todoLists && todoLists.map((item: any) => (
                            <TableRow key={item.todoListId}>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="primary" onClick={() => handleEdit(item.todoListId)}>Edit</Button>
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="secondary" onClick={() => handleDelete(item.todoListId)}>Delete</Button>
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="primary" onClick={() => handleEnter(item.todoListId)}>Enter</Button>
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
                <DialogTitle>{isEdit ? 'Edit Todo' : 'Add Todo'}</DialogTitle> {/* Update modal title based on isEdit state */}
                <DialogContent dividers>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Title"
                        type="text"
                        fullWidth
                        value={title}
                        onChange={handleTitleChange}
                        disabled={isEdit} // Disable the field if it's an edit operation
                    />
                    <TextField
                        margin="dense"
                        label="Description"
                        type="text"
                        fullWidth
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => handleSubmit(isEdit)} color="primary"> {/* Pass isEdit to handleSubmit */}
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
