import React, { Component } from 'react'
import { LinearProgress, Typography } from '@material-ui/core'

interface Props {
    loading: boolean
    returnCode?: number
    stderr?: string
    stdout?: string
    time?: number
}

class CodeResult extends Component<Props> {
    renderOutput() {
        const { returnCode, stderr, stdout, time } = this.props
        if (returnCode === 0) {
            return (
                <>
                    <pre style={{ maxHeight: '15em' }}>{stdout}</pre>
                    <Typography color="primary" variant="caption">
                        Process Successfully completed in {time} sec(s).
                    </Typography>
                </>
            )
        }
        return <pre style={{ color: 'red', maxHeight: '15em' }}>{stderr}</pre>
    }

    render() {
        const { loading } = this.props
        return (
            <>
                <Typography>Output</Typography>
                {loading ? <LinearProgress color="secondary" /> : this.renderOutput()}
            </>
        )
    }
}

export default CodeResult
