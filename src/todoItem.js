class TodoItem {
    constructor(title, description, dueDate, priority, completed) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
    }

    static objectParam(o) {
        return new TodoItem(o.title, o.description, o.dueDate, o.priority, o.completed);
    }

    static default() {
        const now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);

        var dateInput = now.getFullYear()+"-"+(month)+"-"+(day) ;
        return new TodoItem("","",dateInput,"low", "false");
    }
}

export default TodoItem;