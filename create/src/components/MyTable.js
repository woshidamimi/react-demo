import React, { Component } from 'react';
import { Table } from 'antd';

export default class MyTable extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let columns = [{
            title: '姓名',
            dataIndex: 'name'
        },
        {
            title: '地址',
            dataIndex: 'address'
        }
        ];
        let data = [
            {
                name: 'job'
            },
            {
                name: 'bob'
            }
        ]
        return (
            <Table bordered columns={columns} dataSource={data}></Table>
        )
    }
}