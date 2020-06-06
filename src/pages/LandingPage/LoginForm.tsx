import React, { FC } from 'react'
import { withFormik } from 'formik'
import { Grid, Paper } from '@material-ui/core'
import { TextField } from '../../components/formik'

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

    handleSubmit: (values) => {
        console.log(values)
    },
})

const LoginForm: FC = () => {
    return (
        <Paper>
            <TextField fullWidth name="username" label="Username" />
            <TextField fullWidth name="password" label="Password" />
        </Paper>
    )
}

export default formConfig(LoginForm)
