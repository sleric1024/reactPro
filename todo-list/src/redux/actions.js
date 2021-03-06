import axios from 'axios'
import store from './store';
import {
  GET_LIST,
  ADD_ITEM,
  DELETE_ITEM,
  DONE_TEST,
  DONE_ITEM
} from './actionType';

export const getTodoList = () => {
  return (dispatch, getState, extraArgument) => {
    axios.get('http://localhost:3000/data').then(
      res => {
        const {data} = res;
        const action = getListAction(data);
        store.dispatch(action);
      }
    )
  }
};

export const getListAction = (data) => ({
  data,
  type: GET_LIST
});

export const onAddTodo = content => {
  return (dispatch, getState, extraArgument) => {
    dispatch(addTodoAction(content));
  }
};

export const addTodoAction = (content) => ({
  type: ADD_ITEM,
  payload: {
    id: new Date().getTime(),
    content,
  }
});

export const deleteItemAction = (id) => ({
  type: DELETE_ITEM,
  payload: {
    id,
  }
});

export const doneTestAction = () => ({
  type: DONE_TEST
});

export const doneItemAction = (id, done) => ({
  type: DONE_ITEM,
  payload: {
    id,
    done
  }
});