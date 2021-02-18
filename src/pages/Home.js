import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import GlobalStats from '../components/GlobalStats'
import Header from '../components/Header'
import Table from '../components/Table'


function Home() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Header />
            </Grid>
            <GlobalStats />
            <Grid item xs={12}>
                <Table />
            </Grid>
        </Grid>
    )
}

export default Home
