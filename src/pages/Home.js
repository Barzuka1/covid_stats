import { Grid } from '@material-ui/core'
import React from 'react'
import Header from '../components/Header'

function Home() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Header />
            </Grid>
        </Grid>
    )
}

export default Home
