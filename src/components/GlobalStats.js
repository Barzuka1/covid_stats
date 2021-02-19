import { Grid, Paper, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import axios from 'axios'
import PaperInfo from './PaperInfo'

export class GlobalStats extends Component {

    state = {
        data: []
    }
    
    componentDidMount() {
        axios.get("https://api.covid19api.com/summary")
        .then(res => {
            this.setState({ data: res.data.Global })
        })
    }

    render() {
        return (
            <React.Fragment>
                <PaperInfo heading="Cases" value={ this.state.data.TotalConfirmed } />
                <PaperInfo heading="Deaths" value={ this.state.data.TotalDeaths } />
                <PaperInfo heading="Recoveries" value={ this.state.data.TotalRecovered } />
            </React.Fragment>
        )
    }
}

export default GlobalStats
