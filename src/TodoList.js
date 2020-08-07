import React,{ Component, Fragment } from 'react';
import TodoItem from "./TodoItem";
import './style.css'

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    // 在组件即将被挂载到页面的时刻自动执行
    componentWillMount() {
        console.log('componentWillMount')
    }

    render() {
        console.log('render')
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入要添加的内容：</label>
                    <input
                        className='input'
                        id='insertArea'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}>
                    { this.getTodoItem() }
                </ul>
            </Fragment>
        )
    }

    // 在组件被挂载到页面之后，自动被执行
    componentDidMount() {
        console.log('componentDidMount')
    }

    // 组件更新之前，他会自动被执行
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    // 组件更新之前，他会自动被执行,在shouldComponentUpdate之后
    // 在shouldComponentUpdate返回true才执行
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    // 组件更新完成之后，他会自动被执行
    componentDidUpdate() {
        console.log(' componentDidUpdate');
    }





    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    key={index}
                    content={item}
                    index={index}
                    deleteItem={this.handleItemDelete}
                >
                </TodoItem>
            )
        })
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }));
    }

    handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }),() => {
            //console.log(this.ul.querySelectorAll('li').length);
        })

    }

    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        })
    }

}

export default TodoList;
