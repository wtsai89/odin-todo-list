import "./styles.css";
import TodoItem from "./todoItem";
import project from "./project";
import projectList from "./projectList";
import { save, load } from "./storage";
import { domProjects, selectProject, getSelectedProject, domTodo } from "./dom";

let myProjects = projectList();

if(!localStorage.getItem("projectNames")) {
    const defaultProject = project("Default");
    const todoEx1 = new TodoItem("buy groceries", "eggs, milk", "2025-12-15", "low", "false");
    const todoEx2 = new TodoItem("work out", "shoulders, triceps", "2025-01-02", "medium", "false");
    defaultProject.addTodo(todoEx1);
    defaultProject.addTodo(todoEx2);

    myProjects.addProject(defaultProject);
}
else {
    myProjects = load();
}

const pdialog = document.querySelector(".pmodal");
const addProjectsButton = document.querySelector(".projects-section button");
addProjectsButton.addEventListener("click", () => {
    pdialog.showModal();
});
const pSubmitButton = document.querySelector(".psubmit");
const name = document.querySelector("#name");
pSubmitButton.addEventListener("click", () => {
    myProjects.addProject(project(name.value));
    name.value = "";
    pdialog.close();
    const selected = getSelectedProject();
    domProjects(myProjects);
    selectProject(selected);
    save(myProjects.projectList);
});
const pCancelButton = document.querySelector(".pcancel");
pCancelButton.addEventListener("click", () => {
    name.value = "";
    pdialog.close();
});

const tdialog = document.querySelector(".tmodal");
const addTodoButton = document.querySelector(".todo-section button");
const tSubmitButton = document.querySelector(".tsubmit");
const tCancelButton = document.querySelector(".tcancel")
addTodoButton.addEventListener("click", () => {
    tdialog.showModal();
    const selectedProject = myProjects.getProject(getSelectedProject());
    selectedProject.addTodo(TodoItem.default());
    tSubmitButton.setAttribute("data-index", selectedProject.todoCount()-1);
});
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const dueDate = document.querySelector("#dueDate");
const low = document.querySelector("#low");
const medium = document.querySelector("#medium");
const high = document.querySelector("#high");
const tformTitle = document.querySelector(".tmodal h2");
tSubmitButton.addEventListener("click", (event) => {
    const todo = new TodoItem(title.value, description.value, dueDate.value, document.querySelector('input[name="priority"]:checked').value, event.target.dataset.completed === 'true');
    const selectedProject = myProjects.getProject(getSelectedProject());
    selectedProject.updateTodo(event.target.dataset.index, todo);
    tdialog.close();
    domTodo(selectedProject);
    save(myProjects.projectList);
    myProjects.displayProjects();
});
tCancelButton.addEventListener("click", () => {
    tdialog.close();
    if (tdialog.classList.contains("disabled")) {
        title.disabled = false;
        description.disabled = false;
        dueDate.disabled = false;
        low.disabled = false;
        medium.disabled = false;
        high.disabled = false;
        tformTitle.textContent = "Edit Todo";
        tSubmitButton.style.display = "inline";
        tCancelButton.textContent = "Cancel";
        tdialog.classList.remove("disabled");
    }
})
let observer = new MutationObserver((event) =>  {
    if (event[0].attributeName == 'open' && event[0].target.open) {
        const selectedProject = myProjects.getProject(getSelectedProject());
        const todo = selectedProject.todoList[tSubmitButton.dataset.index];
        title.value = todo.title;
        description.value = todo.description;
        console.log(todo.dueDate);
        dueDate.value = todo.dueDate;
        const radio = document.querySelector(`#${todo.priority}`);
        radio.checked = true;
        tSubmitButton.setAttribute("data-completed", todo.completed);
        if (tdialog.classList.contains("disabled")) {
            title.disabled = true;
            description.disabled = true;
            dueDate.disabled = true;
            low.disabled = true;
            medium.disabled = true;
            high.disabled = true;
            tformTitle.textContent = "Todo Details";
            tSubmitButton.style.display = "none";
            tCancelButton.textContent = "OK";
        }
    }
});
observer.observe(tdialog, { attributes: true });

const todoList = document.querySelector(".todo-list");
todoList.addEventListener("click", (event) => {
    if(event.target.classList.contains("delete-button")) {
        save(myProjects.projectList);
        domTodo(myProjects.getProject(getSelectedProject()));
    }
});

domProjects(myProjects);
selectProject(0);
domTodo(myProjects.getProject(getSelectedProject()));

//myProjects.displayProjects();

save(myProjects.projectList);
