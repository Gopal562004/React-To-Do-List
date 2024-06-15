function TodoItem({todoName,todoDate,index, deleteTodo}){

    return(
        <>
        <div class="container ">
        <div class="row gg-row">
        <div class="col-6">{todoDate}</div>
        <div class="col-4">{todoName}</div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-danger gg-button"
            onClick={() => deleteTodo(index)}
          >
            Delete
          </button>
        </div>
      </div>
      </div>
        </>
    );
}
export default TodoItem;