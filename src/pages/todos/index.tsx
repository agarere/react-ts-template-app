import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTodosQuery, useLazyGetTodoByIdQuery } from '../../store/api/TodoApi';
import { useEffect, useState } from 'react';
import { setTodos } from '../../store/TodosSlice';
import BaseModal from '../../components/modals/BaseModal';


function TodoListPage() {
  const dispatch = useDispatch();
  const { data: todos } = useGetTodosQuery({});
  const [fetchTodo, { data: todo, isLoading, error }] = useLazyGetTodoByIdQuery();
  const storedTodos = useSelector((state: { todos: any[] }) => state.todos)
  const [modalShow, setModalShow] = useState(false);
  
  useEffect(() => {
    if (todos)
      dispatch(setTodos(todos));
  },
  [todos, dispatch]);

  const clickItem = (todo: any) => {
    fetchTodo(todo.id);
    setModalShow(true);
  }

  return (
    <div className="card bg-light">
      <h2>Todo List</h2>
      <ListGroup className='d-flex flex-column gap-1'>
        {storedTodos?.map((todo: any, index: number) => (
          <ListGroup.Item
            key={index}
            action
            onClick={() => clickItem(todo)}
          >
            {todo.id} - {todo.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <BaseModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        {todo && (
          <div>
            <h2>{todo.id} - {todo.title}</h2>
            <p>{todo.completed ? 'Completed' : 'Not completed'}</p>
          </div>
          )
        }
      </BaseModal>
    </div>
  )
}

export default TodoListPage