import * as timezone from 'user-timezone';
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
        const res = await axios.get('https://iotlet-default-rtdb.firebaseio.com/logs.json')
        // console.log(res.data);
        let axiosResponse = Object.keys(res.data).map(key => res.data[key]);
        let data = [];
        for (var i = axiosResponse.length - 1; i >= 0; i--) {
            const splitData = axiosResponse[i].split(",");
            // kelembaban: 0, suhu: 1, epoch: 2
            const dateTimeFormat = 'DD MMM YY,hh:mm:ss';
            const datetime = timezone.datetime(splitData[2], dateTimeFormat);
            const splitTimestamp = datetime.split(",");

            const obj = {
                kelembaban: splitData[0],
                suhu: splitData[1],
                date: splitTimestamp[0],
                time: splitTimestamp[1]
            }
            data.push(obj);
        }
        this.setState({ loading: false, log: data });
    }
    componentDidMount() {
        this.getLogData()
    }
    render() {
        console.log(this.state.log);
        // return null;
        const columns = [
            {
                Header: 'Date',
                accessor: 'date'
            },
            {
                Header: 'Time',
                accessor: 'time',
            },
            {
                Header: 'Kelembaban',
                accessor: 'kelembaban',
            },
            {
                Header: 'Suhu',
                accessor: 'suhu',
            }
        ]
        return (
            <div className="m-3">
                <div className="bg-white rounded-md">
                    <ReactTable
                        data={this.state.log}
                        columns={columns}
                    />
                </div>
            </div>
        )
    }
}