import React, { FC } from 'react'
import { withFormik } from 'formik'
import { Grid, Paper, Button, Typography, InputAdornment } from '@material-ui/core'
import { AccountBoxRounded, VpnKeyRounded, EmailRounded } from '@material-ui/icons'
import { TextField } from '../../components/formik'

interface Values {
    username: string
    password: string
    confirmPassword: string
    email: string
}

interface Props {}

const formConfig = withFormik<Props, Values>({
    mapPropsToValues: () => ({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    }),

    handleSubmit: (values) => {
        console.log(values)
    },
})

const RegistrationForm: FC = () => {
    return (
        <Paper elevation={3}>
            <Grid container direction="row">
                <Typography variant="h6" className="form-heading">
                    New User?? Register Here
                </Typography>
                <TextField
                    fullWidth
                    name="username"
                    placeholder="Username"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountBoxRounded />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    fullWidth
                    name="email"
                    placeholder="Email"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailRounded />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    fullWidth
                    name="password"
                    placeholder="Password"
                    type="password"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <VpnKeyRounded />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    fullWidth
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <VpnKeyRounded />
                            </InputAdornment>
                        ),
                    }}
                />
                <Grid item container direction="row-reverse">
                    <Button color="primary" variant="contained">
                        Register
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default formConfig(RegistrationForm)
