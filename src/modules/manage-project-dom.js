import { projectStorage } from "./manage-project-logic";

const projectList = document.getElementById('project-list');

export function renderList() {
    projectStorage.forEach(project => {
        const projectElement = document.createElement('li');
        projectElement.className = 'project';
        projectElement.dataset.id = project.id;
        projectElement.innerText = project.name;
        projectList.appendChild(projectElement);
    });
};

export function clearList() {
    projectList.textContent = '';
};

/*
export function addProject() {
    let project = document.createElement('div');
    project.className = 'project';
    project.innerText = 'project';
    customList.appendChild(project);
};

export function removeProject() {
    customList.removeChild(customList.childNodes[0]);
};
*/