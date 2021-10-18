import { projectStorage } from "./manage-project-logic";

const projectList = document.getElementById('project-list');

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

/*
export function removeProject() {
    customList.removeChild(customList.childNodes[0]);
};
*/