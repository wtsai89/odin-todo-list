import projectList from "./projectList";
import project from "./project";
import TodoItem from "./todoItem";

function save(pList) {
    localStorage.clear();
    const projectNames = [];
    for(const project of pList) {
        projectNames.push(project.name);
        const todoNames = [];
        for(const todo of project.todoList) {
            todoNames.push(todo.title);
            const todoKey = `${project.name} ${todo.title}`;
            localStorage.setItem(todoKey, JSON.stringify(todo));
        }
        localStorage.setItem(project.name, JSON.stringify(todoNames));
    }
    localStorage.setItem("projectNames", JSON.stringify(projectNames));
}

function saveTodo(project, todo) {
    const todoKey = `${project.name} ${todo.title}`;
    localStorage.setItem(todoKey, JSON.stringify(todo));
}

function load() {
    const myProjects = projectList();
    const projectNames = JSON.parse(localStorage.getItem("projectNames"));
    for(const projectName of projectNames) {
        const todoNames = JSON.parse(localStorage.getItem(projectName));
        const myProject = project(projectName);
        for(const todoName of todoNames) {
            const todoObject = JSON.parse(localStorage.getItem(`${projectName} ${todoName}`));
            const myTodo = TodoItem.objectParam(todoObject);
            myProject.addTodo(myTodo);
        }
        myProjects.addProject(myProject);
    }
    return myProjects;
}

export {save, saveTodo, load};