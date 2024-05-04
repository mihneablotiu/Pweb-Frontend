import { useForm, Controller } from 'react-hook-form';
import { useEffect, useState } from 'react';
import {
    Grid,
    TextField,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Radio,
    RadioGroup,
    Checkbox,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormControlLabel,
    Typography
} from '@mui/material';
import './component.css';
import {createConfiguration, FeedbackControllerApi, FeedbackDTO} from "../../../client";
import {FeedbackControllerApiCreateFeedbackRequest} from "../../../client/types/ObjectParamAPI.ts";

function FeedbackForm() {
    const { control, handleSubmit, reset, setValue, register } = useForm();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        setValue('satisfactionLevel', '5');
        setValue('feedbackType', 'SUGGESTION');
        setValue('acceptTerms', false);
        setValue('comment', '')
    }, [setValue]);

    const onSubmit = async (data: FeedbackDTO) => {
        const { feedbackType, satisfactionLevel, comment, acceptTerms } = data;

        if (!feedbackType || !satisfactionLevel || !comment || !acceptTerms) {
            setError(true);
            setMessage('Please fill out all fields.');
            setOpen(true);
            return;
        }
        try {
            const configuration = createConfiguration();
            const apiInstance = new FeedbackControllerApi(configuration);

            const request: FeedbackControllerApiCreateFeedbackRequest = {
                authorization: 'Bearer ' + localStorage.getItem('token'),

                feedbackDTO: {
                    feedbackType: feedbackType,
                    satisfactionLevel: satisfactionLevel,
                    acceptTerms: acceptTerms,
                    comment: comment,
                }
            };

            const response = await apiInstance.createFeedback(request.authorization, request.feedbackDTO);

            setMessage(response.message || '');
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
        window.location.reload();
    };

    return (
        <div className="formContainer" style={{ flexGrow: 4 }}>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} direction="column">
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="feedback-type-label">Feedback Type</InputLabel>
                            <Select
                                {...register('feedbackType')}
                                labelId="feedback-type-label"
                                id="feedback-type"
                                defaultValue="SUGGESTION"
                            >
                                <MenuItem value="SUGGESTION">Suggestion</MenuItem>
                                <MenuItem value="COMPLAINT">Complaint</MenuItem>
                                <MenuItem value="BUG_REPORT">Bug Report</MenuItem>
                                <MenuItem value="OTHER">Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">Satisfaction Level</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="satisfactionLevel"
                            control={control}
                            defaultValue="5"
                            render={({ field }) => (
                                <RadioGroup row {...field}>
                                    {[...Array(10)].map((_, index) => (
                                        <FormControlLabel
                                            key={index + 1}
                                            value={(index + 1).toString()}
                                            control={<Radio />}
                                            label={(index + 1).toString()}
                                        />
                                    ))}
                                </RadioGroup>
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            {...register('comment')}
                            label="Comment"
                            multiline
                            rows={4}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox {...register('acceptTerms')} defaultChecked={false}/>}
                            label="I accept the terms and conditions"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
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

export default FeedbackForm;
