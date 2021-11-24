import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table";
import 'react-table/react-table.css'

export default class Chart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            log: [],
            loading: true
        }
    }
    async getLogData() {
        const res = await axios.get('https://iotlet-default-rtdb.firebaseio.com/log.json')
        console.log(res.data)
        this.setState({ loading: false, log: res.data })
    }
    componentDidMount() {
        this.getLogData()
    }
    render() {
        const columns = [{
            Header: 'Timestamp',
            accessor: 'time',
        }
            , {
            Header: 'Kelembaban',
            accessor: 'kelembaban',
        }

            , {
            Header: 'Suhu',
            accessor: 'suhu',
        }
        ]
        return (
            <div className="bg-white rounded-md">
                <ReactTable
                    data={this.state.log}
                    columns={columns}
                />
            </div>
            
        )
    }
}