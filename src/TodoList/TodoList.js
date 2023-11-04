    
// TodoList.js
import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './actions';
import '../index.css';  
 
const TodoList = ({ todos, addTodo, toggleTodo, deleteTodo }) => {
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Xóa</button>
          </li>
        ))} 
      </ul>

      <input
        type="text"
        placeholder="Thêm công việc mới"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTodo(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
}); 
  
const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  deleteTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
 

// const TodoList = () => {
//     return(
//         <div>
//          <h2>Todo List</h2>
//         </div>
//     )
// }

// export default TodoList; 