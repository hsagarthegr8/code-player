import React, { FC } from 'react'
import { useFormikContext } from 'formik'
import { TextField as Input, TextFieldProps } from '@material-ui/core'

interface FormContext {
    [key: string]: string
}

const TextField: FC<TextFieldProps> = (props) => {
    let { name } = props
    name = name as string

    const { values, errors, touched, handleBlur, handleChange } = useFormikContext<FormContext>()
    return (
        <Input
            value={values[name]}
            error={!!errors[name] && touched[name]}
            helperText={touched[name] ? errors[name] : ''}
            onChange={handleChange}
            onBlur={handleBlur}
            {...props}
        />
    )
}

export default TextField
