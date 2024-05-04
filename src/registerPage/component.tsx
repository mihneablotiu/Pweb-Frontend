import { useForm } from 'react-hook-form';
import {createConfiguration, UserControllerApi, UserRegisterDTO} from '../../client';
import { Grid, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import {useState} from "react";

function Register() {
    const { register, handleSubmit, reset } = useForm();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    const onSubmit = async (data: UserRegisterDTO) => {
        const configuration = createConfiguration();
        const apiInstance = new UserControllerApi(configuration);

        const body: UserRegisterDTO = {
            username: data.username,
            email: data.email,
            password: data.password
        };

        try {
            const response = await apiInstance.registerUser(body);
            setMessage(response.message || ''); // Extract the error message
            setOpen(true);
            setError(false);
            reset(); // Reset the form upon success
        } catch (error: any) {
            const responseData = JSON.parse(error.body)
            const errorMessage = responseData.message || 'An error occurred';
            setMessage(errorMessage);
            setOpen(true);
            setError(true);
            reset(); // Reset the form upon error
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', flex: 1 }}>
            <main style={{ flex: 1, overflow: 'auto' }}>
                <Grid container justifyContent="center" alignItems="center" style={{ minHeight: 'calc(100vh - 128px)', padding: '20px' }}>
                    <Grid item xs={12} sm={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2} direction="column" alignItems="center">
                                <Grid item xs={12} style={{ width: '100%' }}>
                                    <TextField
                                        {...register('username')}
                                        label="Username"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} style={{ width: '100%' }}>
                                    <TextField
                                        {...register('email')}
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} style={{ width: '100%' }}>
                                    <TextField
                                        {...register('password')}
                                        type="password"
                                        label="Password"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} style={{ width: '100%', textAlign: 'center' }}>
                                    <Button type="submit" variant="contained" color="primary">
                                        Register
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </main>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{error ? 'Error' : 'Success'}</DialogTitle>
                <DialogContent>{message}</DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Register;
