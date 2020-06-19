import React, { Component } from 'react'
import { LinearProgress, Typography, Paper } from '@material-ui/core'

interface Props {
    loading: boolean
    returnCode?: number
    stderr?: string
    stdout?: string
}

class CodeResult extends Component<Props> {
    renderOutput() {
        const { returnCode, stderr, stdout } = this.props
        if (returnCode === 0) {
            return <pre>{stdout}</pre>
        }
        return <pre style={{ color: 'red' }}>{stderr}</pre>
    }

    render() {
        const { loading } = this.props
        return (
            <Paper square>
                <Typography>Output</Typography>
                {loading ? <LinearProgress color="secondary" /> : this.renderOutput()}
            </Paper>
        )
    }
}

export default CodeResult
