import React, { Component } from 'react'
import { Grid, Button } from '@material-ui/core'
import { CodeEditor, CodeResult } from '../../components'
import api from '../../api'
import { AxiosResponse, AxiosError } from 'axios'

interface Props {}
interface State {
    sourceCode: string
    stdout?: string
    stderr?: string
    returnCode?: number
    loading: boolean
}

class Playground extends Component<Props, State> {
    state = {
        sourceCode: '',
        stdout: '',
        stderr: '',
        returnCode: undefined,
        loading: false,
    }

    handleChange = (value: string) => {
        this.setState({
            sourceCode: value,
        })
    }

    handleCompile = () => {
        const { sourceCode } = this.state
        this.setState(
            {
                loading: true,
            },
            () => {
                api()
                    .post('playground/', { sourceCode })
                    .then((res: AxiosResponse) => {
                        console.log(res.data)
                        this.setState({
                            ...res.data,
                            loading: false,
                        })
                    })
                    .catch((err: AxiosError) => {
                        console.log(err.message)
                    })
            },
        )
    }

    render() {
        const { sourceCode, stdout, stderr, returnCode, loading } = this.state
        return (
            <Grid container>
                <Grid item xs={7}>
                    <CodeEditor name="playground" value={sourceCode} onChange={this.handleChange} />
                    <Button variant="contained" color="primary" onClick={this.handleCompile}>
                        Compile and Run
                    </Button>
                </Grid>
                <Grid item xs={5}>
                    <CodeResult loading={loading} stdout={stdout} stderr={stderr} returnCode={returnCode} />
                </Grid>
            </Grid>
        )
    }
}

export default Playground
