import {CHANGE_INPUT , ADD_ITEM, DELETE_ITEM, GET_LIST }  from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = ()=>({
    type:ADD_ITEM
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})

export const getListAction = (data) => ({
    type:GET_LIST,
    data
})

export const getTodoList = () => {
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5e2e626016f42c50a5c9da72/ReactDemo01/getlist#!method=get').then((res) => {
            const data = res.data
            console.log(data)
            const action = getListAction(data)
            dispatch(action)
        })
    }
}