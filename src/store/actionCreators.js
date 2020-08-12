import {ADD_TODO_ITEM, CHANGE_INPUT_value, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes'
import axios from "axios";

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_value,
    value
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})
export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/api/todolist.json').then((res) => {
            const data = res.data;
            const action = initListAction(data);
            dispatch(action);
        })
    }
}