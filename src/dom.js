import { saveTodo } from "./storage";

function domProjects(pList) {
    const projectsList = document.querySelector(".projects-list");
    while(projectsList.lastElementChild) {
        projectsList.removeChild(projectsList.lastElementChild);
    }
    let count = 0;
    for(const project of pList.projectList) {
        const li = document.createElement("li");
        li.textContent = project.name;
        li.classList.add("project-tab");
        li.setAttribute("data-index", count);
        projectsList.appendChild(li);
        count += 1;
    }

    projectsList.addEventListener("click", (event) => {
        if(event.target.classList.contains("project-tab")) {
            const selected = projectsList.querySelector(".selected");
            if(selected) {
                selected.classList.remove("selected");
            }

            event.target.classList.add("selected");
            domTodo(pList.getProject(getSelectedProject()));
        }
    })
}

function selectProject(index) {
    const projectsList = document.querySelector(".projects-list");
    const selected = projectsList.querySelector(".selected");
    if(selected) {
        selected.classList.remove("selected");
    }

    projectsList.children[index].classList.add("selected");
}

function getSelectedProject() {
    const projectsList = document.querySelector(".projects-list");
    const selected = projectsList.querySelector(".selected");
    if(selected) {
        return parseInt(selected.dataset.index);
    }
    return -1;
}

function domTodo(project) {
    project.sortTodo();
    const todoList = document.querySelector(".todo-list");
    while(todoList.lastElementChild) {
        todoList.removeChild(todoList.lastElementChild);
    }

    const li = document.createElement("li");
    const title = document.createElement("h4");
    title.textContent = "Title";
    li.appendChild(title);
    const dueDate = document.createElement("h4");
    dueDate.textContent = "Due Date";
    li.appendChild(dueDate);
    todoList.append(li);

    let count = 0;
    for(const todo of project.todoList) {
        const li = document.createElement("li");
        const title = document.createElement("p");
        title.textContent = todo.title;
        li.appendChild(title);
        const dueDate = document.createElement("p");
        dueDate.textContent = todo.dueDate;
        li.appendChild(dueDate);
        const buttonList = document.createElement("div");
        const detailsButton = document.createElement("button");
        detailsButton.textContent = "Details";
        detailsButton.setAttribute("data-index", count);
        detailsButton.addEventListener("click", (event) => {
            const tdialog = document.querySelector(".tmodal");
            const tSubmitButton = document.querySelector(".tsubmit");
            tdialog.showModal();
            tdialog.classList.add("disabled");
            tSubmitButton.setAttribute("data-index", event.target.dataset.index);
        });
        buttonList.appendChild(detailsButton);
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.setAttribute("data-index", count);
        editButton.addEventListener("click", (event) => {
            const tdialog = document.querySelector(".tmodal");
            const tSubmitButton = document.querySelector(".tsubmit");
            tdialog.showModal();
            tSubmitButton.setAttribute("data-index", event.target.dataset.index);
        });
        buttonList.appendChild(editButton);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("data-index", count);
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", (event) => {
            project.deleteTodo(event.target.dataset.index);
        });
        buttonList.appendChild(deleteButton);
        const completedDiv = document.createElement("div");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        if (todo.completed === "true") {
            checkbox.checked = "true";
            li.classList.add("completed");
        }
        checkbox.addEventListener("change", () => {
            if (todo.completed === "true") {
                todo.completed = "false";
                li.classList.remove("completed");
            }
            else {
                todo.completed = "true";
                li.classList.add("completed");
            }
            saveTodo(project, todo);
            domTodo(project);
        });
        checkbox.style.marginRight = "3px";
        completedDiv.appendChild(checkbox);
        const completedLabel = document.createElement("label");
        completedLabel.textContent = "Completed";
        completedLabel.style.fontSize = "15px";
        completedDiv.appendChild(completedLabel);
        buttonList.appendChild(completedDiv);
        buttonList.classList.add("button-list");
        li.appendChild(buttonList);
        if(todo.priority === "low") {
            li.classList.add("low");
        }
        else if(todo.priority === "medium") {
            li.classList.add("medium");
        }
        else if(todo.priority === "high") {
            li.classList.add("high");
        }
        li.classList.add("todo-tab");
        li.setAttribute("data-index", count);
        todoList.appendChild(li);
        count += 1;
    }
}

export {domProjects, selectProject, getSelectedProject, domTodo};