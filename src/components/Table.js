import { DataGrid } from '@material-ui/data-grid'
import React, { Component } from 'react'
import axios from 'axios'

const columns = [
    { field: 'id', headerName: '#', width: 70 },
    { field: 'Country', headerName: 'Country', width: 190 },
    { field: 'TotalConfirmed', headerName: 'Cases', width: 130, type: 'number' },
    { field: 'TotalDeaths', headerName: 'Deaths', width: 120, type: 'number' },
    { field: 'TotalRecovered', headerName: 'Total Recovered', width: 170, type: 'number' },
    { field: 'NewConfirmed', headerName: 'New Cases', width: 150, type: 'number' },
    { field: 'NewDeaths', headerName: 'New Deaths', width: 150, type: 'number' },
]
  

export class Table extends Component {

    state = {
        info: []
    }

    componentDidMount() {
        axios.get("https://api.covid19api.com/summary")
        .then(res => {

            let info = []
            
            // Iterating Data
            res.data.Countries.forEach((country, iterator) => {
                // Adding needed data & Creating an ID
                info.push({
                    id: iterator + 1,
                    Country: country.Country,
                    NewConfirmed: country.NewConfirmed,
                    TotalConfirmed: country.TotalConfirmed,
                    NewDeaths: country.NewDeaths,
                    TotalDeaths: country.TotalDeaths,
                    TotalRecovered: country.TotalRecovered,
                })    
            })

            this.setState({ info })
        })
    }


    render() {
        return (
            <div style={{ height: 700, width: '100%' }}>
                <DataGrid
                rows={this.state.info} 
                columns={columns} 
                pageSize={10} 
                checkboxSelection 
                rowsPerPageOptions={[10, 20, 50, 100, 200]} 
                />
            </div>
        )
    }
}

export default Table