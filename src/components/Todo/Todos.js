import { initialTodos,todoReducer } from "../../reducers/todoReducer";
import { useReducer } from "react";
function Todos(){
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);

    const handleComplete = (todo) => {
      dispatch({ type: "COMPLETE", id: todo.id });
    };
  
    return (
      <>
        {todos.map((todo) => (
          <div key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleComplete(todo)}
              />
              {todo.title}
            </label>
          </div>
        ))}
      </>
    );
}

export default Todos;