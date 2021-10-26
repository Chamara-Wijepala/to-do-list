import { createTask } from "./manage-task-logic";
import { projectStorage, activeProjectId } from "./manage-project-logic";

const taskMenu = document.getElementById('task-menu');
const taskTemplate = document.getElementById('task-template');

//Creates and appends task elements to taskMenu
//for every task object in activeProjectId.tasks
export function renderTaskList() {
    clearTaskList();
    const selectedProject = projectStorage.find(project => project.id === activeProjectId);
    selectedProject.tasks.forEach(task => {
        const taskElement = document.importNode(taskTemplate.content, true);
        const taskName = taskElement.querySelector('p');
        taskName.id = task.id;
        taskName.innerText = task.name;
        taskMenu.appendChild(taskElement);
    });
};
function clearTaskList() {
    taskMenu.textContent = '';
};