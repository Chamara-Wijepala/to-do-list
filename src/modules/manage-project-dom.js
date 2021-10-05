const customList = document.getElementById('custom-list');

export function addProject() {
    let project = document.createElement('div');
    project.className = 'project';
    project.innerText = 'project';
    customList.appendChild(project);
};

export function removeProject() {
    customList.removeChild(customList.childNodes[0]);
};