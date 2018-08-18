import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import { hot } from 'react-hot-loader';
import TodoForm from '../components/TodoForm'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
	               id: 1,
	               text: 'clean room'
                },
                {
	               id: 2,
	               text: 'wash the dishes'
                },
                {
	               id: 3,
	               text: 'feed my cat'
                }
            ]
        };
    }
    
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4()
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder})
    }
    
    render () {
        return (
            <div className={style.TodoApp}>
                <Title title='Todo' length={this.state.data.length} />
                <TodoForm add={this.addTodo.bind(this)} />
                <TodoList items={this.state.data} remove={this.removeTodo.bind(this)} />
            </div>
        );
    }
}

export default hot(module)(App);
