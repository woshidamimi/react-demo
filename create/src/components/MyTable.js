import React, { Component } from 'react';
import { Table } from 'antd';

export default class MyTable extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let columns = [{
            title: '姓名'
        },
        {
            title: '地址'
        }
        ]
        return (
            <Table columns={columns}></Table>
        )
    }
}