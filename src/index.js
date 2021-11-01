import './styles/index.css';
import { activeProjectId, setList, selectProject } from './modules/manage-project-logic';
import { renderList } from './modules/manage-project-dom';
import { renderTaskList, processTaskForm } from './modules/manage-task-dom';
import { togglePriority, deleteTask } from './modules/manage-task-logic';

const projectList = document.getElementById('project-list');
const taskMenu = document.getElementById('task-menu');
const taskForm = document.getElementById('task-form');

function loadPage() {
    setList();
    renderList();
    if (activeProjectId !== 'null') {
        renderTaskList();
    }
    else return;
};

//Creates a dynamically named task and stores it in tasks array of activeProject
taskForm.addEventListener('submit', e => {
    e.preventDefault();
    processTaskForm();
    loadPage();
});

//Applies a class to a clicked project then saves project's id in localStorage
projectList.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'li') {
        selectProject(e);
        loadPage();
    };
});

//Toggles task priority
taskMenu.addEventListener('change', e => {
    if (e.target.tagName.toLowerCase() === 'input') {
        togglePriority(e);
        loadPage();
    };
});

taskMenu.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'button') {
        deleteTask(e);
        loadPage();
    };
});

loadPage();