import { CHANGE_INPUT_value, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes';

const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    if( action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state)); // 对象的深拷贝
        newState.list = action.data;
        return newState
    }
    if( action.type === CHANGE_INPUT_value) {
        const newState = JSON.parse(JSON.stringify(state)); // 对象的深拷贝
        newState.inputValue = action.value;
        return newState
    }
    if( action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state)); // 对象的深拷贝
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState
    }
    if( action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state)); // 对象的深拷贝
        newState.list.splice(action.index, 1);
        return newState
    }

    return state
}