import { appendTask } from "./manage-task-logic";
import { projectStorage, activeProjectId, setList } from "./manage-project-logic";
import { renderList } from "./manage-project-dom";

const taskMenu = document.getElementById('task-menu');
const taskTemplate = document.getElementById('task-template');
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');

//Creates and appends task elements to taskMenu
//for every task object in activeProjectId.tasks
export function renderTaskList() {
    clearTaskList();
    const selectedProject = projectStorage.find(project => project.id === activeProjectId);
    selectedProject.tasks.forEach(task => {
        const taskElement = document.importNode(taskTemplate.content, true);
        const taskName = taskElement.querySelector('p');
        taskName.innerText = task.name;
        const checkBox = taskElement.querySelector('input');
        checkBox.id = task.id;
        checkBox.checked = task.priority;
        const label = taskElement.querySelector('label');
        label.htmlFor = task.id;
        label.append(task.priority ? 'High' : 'Normal');
        
        taskMenu.appendChild(taskElement);
    });
};
function clearTaskList() {
    taskMenu.textContent = '';
};

//Creates a dynamically named task and stores it in tasks array of activeProject
taskForm.addEventListener('submit', e => {
    e.preventDefault();
    processForm();
    setList()
    renderList();
});
function processForm() {
    let taskName = taskInput.value;
    if (taskName === null || taskName === '') return;
    taskInput.value = null;
    appendTask(taskName);
};