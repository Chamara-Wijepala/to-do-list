import {projectStorage,
        appendProject,
        setList,
        activeProjectId,
        deleteProject } from "./manage-project-logic";

const projectList = document.getElementById('project-list');
const projectForm = document.getElementById('project-form');
const projectInput = document.getElementById('project-input');
const taskMenu = document.getElementById('task-menu');
const taskForm = document.getElementById('task-form');
const deleteProjectButton = document.querySelector('.delete-project-button');

//creates and appends a li element to project-list for each object in projectStorage
//and renders task-menu if there's a selected project
export function renderList() {
    clearProjectList();
    projectStorage.forEach(project => {
        const projectElement = document.createElement('li');
        projectElement.classList.add('project');
        projectElement.dataset.id = project.id;
        projectElement.innerText = project.name;
        if(project.id === activeProjectId) {
            projectElement.classList.add('active-project');
        };
        projectList.appendChild(projectElement);
    });
    renderTaskMenu();
};
function clearProjectList() {
    projectList.textContent = '';
};
function renderTaskMenu() {
    if (activeProjectId === null) {
        taskMenu.style.display = 'none';
        taskForm.style.display = 'none';
    }
    else {
        taskMenu.style.display = '';
        taskForm.style.display = '';
    }
};

//Creates a dynamically named project object and stores it in projectStorage
projectForm.addEventListener('submit', e => {
    e.preventDefault();
    processForm();
    setList()
    renderList();
});
function processForm() {
    let projectName = projectInput.value;
    if (projectName === null || projectName === '') return;
    projectInput.value = null;
    appendProject(projectName);
};

//Deletes selected project using array filter()
deleteProjectButton.addEventListener('click', e => {
    deleteProject();
    setList();
    renderList();
});