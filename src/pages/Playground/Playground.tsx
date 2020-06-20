import React, { Component } from 'react'
import { Grid, Fab, Paper, CircularProgress } from '@material-ui/core'
import { PlayArrow } from '@material-ui/icons'

import { CodeEditor, CodeResult, CustomInput } from '../../components'
import { playgroundApi } from '../../api/playground'

interface Props {}
interface State {
    sourceCode: string
    stdout?: string
    stderr?: string
    returnCode?: number
    time?: number
    isCustomInput: boolean
    customInput: string
    loading: boolean
}

class Playground extends Component<Props, State> {
    state = {
        sourceCode: '',
        stdout: '',
        stderr: '',
        returnCode: undefined,
        time: undefined,
        isCustomInput: false,
        customInput: '',
        input: '',
        loading: false,
    }

    handleChange = (value: string) => {
        this.setState({
            sourceCode: value,
        })
    }

    handleToggleInput = () => {
        this.setState((prevState) => ({
            isCustomInput: !prevState.isCustomInput,
        }))
    }

    handleInputChange = (e: React.ChangeEvent<any>) => {
        this.setState({
            customInput: e.target.value,
        })
    }

    handleCompile = () => {
        const { sourceCode, isCustomInput, customInput } = this.state
        this.setState(
            {
                loading: true,
            },
            async () => {
                try {
                    const res = await playgroundApi({ sourceCode, isCustomInput, customInput })
                    this.setState({
                        ...res,
                        loading: false,
                    })
                } catch (err) {
                    console.log(err)
                }
            },
        )
    }

    render() {
        const { sourceCode, stdout, stderr, returnCode, loading, isCustomInput, customInput, time } = this.state
        return (
            <Grid container>
                <Grid item xs={7}>
                    <CodeEditor name="playground" value={sourceCode} onChange={this.handleChange} />
                </Grid>
                <Fab
                    color="primary"
                    disabled={!!!sourceCode}
                    style={{
                        position: 'absolute',
                        bottom: '6em',
                        left: '51em',
                    }}
                    onClick={this.handleCompile}
                >
                    {loading ? <CircularProgress color="secondary" /> : <PlayArrow fontSize="large" />}
                </Fab>
                <Grid item xs={5}>
                    <Paper square className="h-100">
                        <Grid container direction="column" className="h-100">
                            <Grid item className="w-100">
                                <CustomInput
                                    isActive={isCustomInput}
                                    value={customInput}
                                    toggleActive={this.handleToggleInput}
                                    onInputChange={this.handleInputChange}
                                />
                            </Grid>
                            <Grid item className="w-100">
                                <CodeResult
                                    loading={loading}
                                    stdout={stdout}
                                    stderr={stderr}
                                    returnCode={returnCode}
                                    time={time}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default Playground
