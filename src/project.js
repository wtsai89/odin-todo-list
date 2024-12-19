function project(name) {
    const todoList = [];
    name = name || "Untitled";

    const addTodo = (todo) => {
        todoList.push(todo);
    };

    const updateTodo = (index, todo) => {
        todoList[index] = todo;
    };

    const deleteTodo = (index) => {
        todoList.splice(index,1);
    };

    const todoCount = () => {
        return todoList.length;
    };

    const sortTodo = () => {
        todoList.sort((a, b) => {
            const completedOrder = { true: 2, false: 1 };
            const priorityOrder = { low: 3, medium: 2, high: 1 };
            return completedOrder[a.completed] - completedOrder[b.completed] || priorityOrder[a.priority] - priorityOrder[b.priority] || new Date(a.dueDate) - new Date(b.dueDate);
        });
    };

    return {name, todoList, addTodo, updateTodo, todoCount, deleteTodo, sortTodo};
}

export default project;