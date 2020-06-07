import React, { Component } from 'react'
import { withFormik, InjectedFormikProps } from 'formik'
import * as yup from 'yup'
import { Grid, Paper, Button, Typography, InputAdornment } from '@material-ui/core'
import { AccountBoxRounded, VpnKeyRounded } from '@material-ui/icons'

import { createStatusFromError } from '../../utils/forms'
import { TextField } from '../../components/formik'
import api from '../../api'

interface Values {
    username: string
    password: string
}

interface Props {}

const formConfig = withFormik<Props, Values>({
    mapPropsToValues: () => ({
        username: '',
        password: '',
    }),

    mapPropsToStatus: () => ({}),

    validationSchema: yup.object().shape<Values>({
        username: yup.string().required().label('Username'),
        password: yup.string().required().label('Password'),
    }),

    handleSubmit: (values, formikBag) => {
        const { setStatus } = formikBag
        api.post('login', values)
            .then((res) => console.log(res))
            .catch((err) => setStatus(createStatusFromError(err)))
    },
})

class LoginForm extends Component<InjectedFormikProps<Props, Values>> {
    handleBlur = (e: React.FocusEvent<any>): void => {
        const { setStatus, status, handleBlur } = this.props
        e.persist()
        const { name } = e.target

        setStatus({
            ...status,
            root: '',
            [name]: '',
        })
        handleBlur(e)
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <Paper elevation={3}>
                <form noValidate onSubmit={handleSubmit}>
                    <Grid container direction="row">
                        <Typography variant="h6" className="form-heading">
                            Login to your account
                        </Typography>
                        <TextField
                            fullWidth
                            name="username"
                            placeholder="Username*"
                            onBlur={this.handleBlur}
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
                            name="password"
                            placeholder="Password*"
                            type="password"
                            onBlur={this.handleBlur}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <VpnKeyRounded />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Grid item container direction="row-reverse">
                            <Button color="primary" variant="contained" type="submit">
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        )
    }
}

export default formConfig(LoginForm)
