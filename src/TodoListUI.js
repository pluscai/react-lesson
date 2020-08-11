import React, { Component } from "react";
import {Button, Input, List} from "antd";

class TodoListUI extends Component{
    render() {
        return (
            <div style={{margin: '10px'}}>
                <div>
                    <Input onChange={ this.props.handleInputChange } value={ this.props.inputValue } placeholder='todo info' style={{width: '300px',marginRight: '10px'}}></Input>
                    <Button type="primary" onClick={this.props.handleBtnClick}>submit</Button>
                </div>
                <List
                    style={{marginTop: '10px',width: '300px'}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item, index) => <List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>}
                />
            </div>
        )
    }
}

export default TodoListUI;