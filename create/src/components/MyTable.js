import React, { Component, Fragment } from 'react';
import { Table, Button } from 'antd';

export default class MyTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
             data :[
                {
                    key: 1,
                    name: 'job'
                },
                {
                    key: 2,
                    name: 'bob'
                }
            ]
        }
    }
    handleClick (row) {
        console.log(row);
        let key = row['key'];
        for(let i = 0; i < this.state.data.length; i++) {
            if (key === this.state.data[i].key) {
                this.setState(this.state.data.splice(i, 1));
            }
        }
    }
    render() {
        let columns = [{
            title: '姓名',
            dataIndex: 'name'
        },
        {
            title: '地址',
            dataIndex: 'address'
        },
        {
            title: '操作',
            render: (row) => {
                return (
                    <Fragment>
                        <Button type="danger" onClick={() => {this.handleClick(row)}}>删除</Button>
                        <Button type="primary" style={{ marginLeft: '15px' }}>编辑</Button>
                    </Fragment>
                )
            }
        }
        ];
        
        return (
            <Table bordered columns={columns} dataSource={this.state.data}></Table>
        )
    }
}