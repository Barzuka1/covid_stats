import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import Header from '../components/Header'
import Table from '../components/Table'


function Home() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={12}>
                <Paper>
                    <Typography align="center" variant="h4" color="inherit">
                        Worldwide Statistics
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Table />
            </Grid>
        </Grid>
    )
}

export default Home
