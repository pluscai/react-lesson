import React, {Component} from "react";
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.content !== this.props.content) {
            return true
        }else {
            return false
        }
    }

    render() {
        console.log('child render')
        const { content } = this.props;
        return (
            <li onClick={this.handleClick}>
                 { content }
            </li>
        )
    }

    handleClick() {
        const { deleteItem, index } = this.props;
        deleteItem(index)
    }
}

TodoItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}


export default TodoItem