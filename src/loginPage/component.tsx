import { useForm } from 'react-hook-form';
import { createConfiguration, UserControllerApi, UserLoginDTO } from '../../client';
import { Grid, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const { register, handleSubmit, reset } = useForm();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (data: UserLoginDTO) => {
        const configuration = createConfiguration();
        const apiInstance = new UserControllerApi(configuration);

        const body: UserLoginDTO = {
            email: data.email,
            password: data.password
        };

        try {
            const { token } = await apiInstance.login(body) as any;
            localStorage.setItem('token', token); // Store token locally
            navigate('/home'); // Navigate to /home on success
        } catch (error: any) {
            const responseData = JSON.parse(error.body);
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
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <main style={{ flex: 1, overflow: 'auto' }}>
                <Grid container justifyContent="center" alignItems="center" style={{ minHeight: 'calc(100vh - 128px)', padding: '20px' }}>
                    <Grid item xs={12} sm={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2} direction="column" alignItems="center">
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
                                        Login
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

export default Login;
