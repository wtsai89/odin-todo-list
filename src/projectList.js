function projectList() {
    const projectList = [];

    const addProject = (project) => {
        projectList.push(project);
    }

    const getProject = (index) => {
        return projectList[index];
    }

    const displayProjects = () => {
        for(const project of projectList) {
            console.log(project.name);
            for(const todo of project.todoList) {
                console.log(todo);
            }
        }
    }

    return {projectList, addProject, displayProjects, getProject};
}

export default projectList;