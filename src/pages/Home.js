import { Grid } from '@material-ui/core'
import React from 'react'
import GlobalStats from '../components/GlobalStats'
import Table from '../components/Table'


function Home() {
    return (
        <React.Fragment>
            <GlobalStats />
            <Grid item xs={12}>
                <Table />
            </Grid>
        </React.Fragment>
    )
}

export default Home
