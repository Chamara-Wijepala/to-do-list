import {projectStorage,
        appendProject,
        setList,
        activeProject, 
        selectProject,
        deleteProject } from "./manage-project-logic";

const projectList = document.getElementById('project-list');
const projectForm = document.getElementById('project-form');
const projectInput = document.getElementById('project-input');
const deleteProjectButton = document.getElementById('delete-project-button');

//creates and appends a li element to project-list for each object in projectStorage
export function renderList() {
    clearList();
    projectStorage.forEach(project => {
        const projectElement = document.createElement('li');
        projectElement.classList.add('project');
        projectElement.dataset.id = project.id;
        projectElement.innerText = project.name;
        if(project.id === activeProject) {
            projectElement.classList.add('active-project');
        };
        projectList.appendChild(projectElement);
    });
};
function clearList() {
    projectList.textContent = '';
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

//Applies a class to a clicked project then saves project's id in localStorage
projectList.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'li') {
        selectProject(e);
        setList();
        renderList();
    };
});

//Deletes selected project using array filter()
deleteProjectButton.addEventListener('click', e => {
    deleteProject();
    setList();
    renderList();
});