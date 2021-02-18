import React, { Component } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

export class PaperInfo extends Component {
    render() {
        return (
            <Grid item xs={12} lg={4}>
                <Paper style={{ padding: "25px" }}>
                    <Typography align="center" variant="h4">{ this.props.heading }</Typography>
                    <Typography align="center" variant="h6">{ this.props.value }</Typography>
                </Paper>
            </Grid>
        )
    }
}

export default PaperInfo
