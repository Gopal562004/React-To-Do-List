import TodoItem from "./TodoItem";
const TodoList = ({ todoItems, deleteTodo }) => {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item, index) => (
          <TodoItem
            key={index}
            todoDate={item.todoName}
            todoName={item.todoDate}
            index={index}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </>
  );
};
export default TodoList;
