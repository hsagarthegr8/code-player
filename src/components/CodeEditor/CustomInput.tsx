import React, { FC } from 'react'
import { Typography, Switch, Grid, TextField } from '@material-ui/core'

interface Props {
    isActive: boolean
    value: string
    toggleActive: (e: React.ChangeEvent<any>) => void
    onInputChange: (e: React.ChangeEvent<any>) => void
}

const CustomInput: FC<Props> = (props) => {
    const { isActive, value, toggleActive, onInputChange } = props
    return (
        <>
            <Grid container justify="space-between">
                <Grid item>
                    <Typography>Custom Input</Typography>
                </Grid>
                <Grid item>
                    <Switch checked={isActive} color="primary" onChange={toggleActive} />
                </Grid>
            </Grid>
            {isActive && <TextField fullWidth multiline rows={7} value={value} onChange={onInputChange} />}
        </>
    )
}

export default CustomInput
