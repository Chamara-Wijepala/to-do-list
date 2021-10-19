import { projectStorage, appendProject, setList } from "./manage-project-logic";

const projectList = document.getElementById('project-list');
const projectForm = document.getElementById('project-form');
const projectInput = document.getElementById('project-input');

//creates and appends a li element to project-list for each object in projectStorage
export function renderList() {
    clearList();
    projectStorage.forEach(project => {
        const projectElement = document.createElement('li');
        projectElement.className = 'project';
        projectElement.dataset.id = project.id;
        projectElement.innerText = project.name;
        projectList.appendChild(projectElement);
    });
};

function clearList() {
    projectList.textContent = '';
};

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

/*
export function removeProject() {
    customList.removeChild(customList.childNodes[0]);
};
*/