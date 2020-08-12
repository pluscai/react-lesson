import {GET_INIT_LIST, ADD_TODO_ITEM, CHANGE_INPUT_value, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes'


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

export const getInitList = () => ({
    type: GET_INIT_LIST
})

