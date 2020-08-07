import React, {Component} from "react";
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { content, test } = this.props;
        return (
            <li onClick={this.handleClick}>
                { test } - { content }
            </li>
        )
    }

    // 一个组件要从父组件接收参数
    // 如果这个组件第一次存在于父组件中，不会执行
    // 如果这个组件之前已经存在于父组件中，才会执行
    UNSAFE_componentWillReceiveProps() {
        console.log("child componentWillReceiveProps")
    }

    // 当一个组件即将从页面中被剔除时，自动被执行
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    handleClick() {
        const { deleteItem, index } = this.props;
        deleteItem(index)
    }
}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem