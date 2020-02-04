import React, { Component } from 'react';
import store from './store'
// import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from './store/actionTypes'
import {changeInputAction,addItemAction ,deleteItemAction, getTodoList} from './store/actionCreatores'
import TodoListUI from './TodoListUI'
class TodoList extends Component {
    state = {  }
    constructor(props){
        super(props)
        this.state=store.getState();
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange) //订阅Redux的状态
        this.clickBtn = this.clickBtn.bind(this)
    
        
    }
    componentDidMount(){
       const action = getTodoList()
       store.dispatch(action)
    }
    render() { 
        return (  
            <TodoListUI
                inputValue = {this.state.inputValue}
                changeInputValue = {this.changeInputValue}
                clickBtn = {this.clickBtn}
                list = {this.state.list}
                deleteItem = {this.deleteItem}
            ></TodoListUI>
        );
    }
    changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    //增加按钮
    clickBtn(){
        const action = addItemAction()
        store.dispatch(action)
    }
    //删除按钮
    deleteItem(index){
        console.log(index)
        const action =  deleteItemAction(index)
        store.dispatch(action)
        
    }

}
  
export default TodoList;