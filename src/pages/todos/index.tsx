import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTodosQuery } from '../../store/api/TodoApi';
import { useEffect } from 'react';
import { setTodos } from '../../store/TodosSlice';


function TodoListPage() {
  const dispatch = useDispatch();
  const { data: todos } = useGetTodosQuery({});
  const storedTodos = useSelector((state: { todos: any[] }) => state.todos)
  
  useEffect(() => {
    if (todos)
      dispatch(setTodos(todos));
  },
  [todos, dispatch]);

  return (
    <div className="card bg-light">
      <h2>Todo List</h2>
      <ListGroup as="ol" numbered className='d-flex flex-column gap-1'>
        {storedTodos?.map((todo: any, index: number) => (
          <ListGroup.Item as="li" key={index}>{todo.title}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default TodoListPage