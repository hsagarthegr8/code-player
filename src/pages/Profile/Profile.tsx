import React, { Component } from 'react'
import { Paper, Grid, Typography, Divider, Chip } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { connect } from 'react-redux'

import { setCurrentUser } from '../../store/user/actions'
import { getCurrentUserApi } from '../../api/user'
import { UserState } from '../../store/user/types'
import { ApplicationState } from '../../store/types'

interface Actions {
    setCurrentUser: (user: UserState) => void
}

interface Props {
    user: UserState
}

class Profile extends Component<Props & Actions> {
    async componentDidMount() {
        const { setCurrentUser, user } = this.props
        if (!user.username) {
            try {
                const user = await getCurrentUserApi()
                setCurrentUser(user)
            } catch (err) {
                console.log(err.message)
            }
        }
    }

    render() {
        const { user } = this.props
        return (
            <Grid container>
                <Grid item sm={8}>
                    <Paper>
                        <Typography variant="h5">My Profile</Typography>
                        <div style={{ margin: 30 }}>
                            <Typography variant="h6">Personal Details</Typography>
                            <Divider />
                            <div style={{ marginTop: 30 }} />
                            <Grid container className="mb-15">
                                <Grid item xs={3}>
                                    <Typography variant="body2">First Name:</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    {user.username ? (
                                        <Typography variant="body2">{user.profile?.firstName}</Typography>
                                    ) : (
                                        <Skeleton variant="text" />
                                    )}
                                </Grid>
                            </Grid>
                            <Grid container className="mb-15">
                                <Grid item xs={3}>
                                    <Typography variant="body2">Middle Name:</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    {user.username ? (
                                        <Typography variant="body2">{user.profile?.middleName}</Typography>
                                    ) : (
                                        <Skeleton variant="text" />
                                    )}
                                </Grid>
                            </Grid>
                            <Grid container className="mb-15">
                                <Grid item xs={3}>
                                    <Typography variant="body2">Last Name:</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    {user.username ? (
                                        <Typography variant="body2">{user.profile?.lastName}</Typography>
                                    ) : (
                                        <Skeleton variant="text" />
                                    )}
                                </Grid>
                            </Grid>
                            <Grid container className="mb-15">
                                <Grid item xs={3}>
                                    <Typography variant="body2">Occupation:</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    {user.username ? (
                                        <Typography variant="body2">{user.profile?.occupation}</Typography>
                                    ) : (
                                        <Skeleton variant="text" />
                                    )}
                                </Grid>
                            </Grid>
                            <Grid container className="mb-15">
                                <Grid item xs={3}>
                                    <Typography variant="body2">Organization Name:</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    {user.username ? (
                                        <Typography variant="body2">{user.profile?.organizationName}</Typography>
                                    ) : (
                                        <Skeleton variant="text" />
                                    )}
                                </Grid>
                            </Grid>
                            <Grid container className="mb-15">
                                <Grid item xs={3}>
                                    <Typography variant="body2">Skills:</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    {user.username ? (
                                        user.profile?.skills.map((skill) => (
                                            <Chip clickable color="primary" variant="outlined" label={skill.name} />
                                        ))
                                    ) : (
                                        <Skeleton variant="rect" height={50} />
                                    )}
                                </Grid>
                            </Grid>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state: ApplicationState): Props => ({
    user: state.user,
})

const mapDispatchToProps = {
    setCurrentUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
