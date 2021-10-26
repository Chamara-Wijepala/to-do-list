const LOCAL_STORAGE = 'project.list';
export let projectStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE)) || [];

const LOCAL_STORAGE_PROJECT_ID = 'project.projectId';
export let activeProjectId = localStorage.getItem(LOCAL_STORAGE_PROJECT_ID);

export function setList() {
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(projectStorage));
    localStorage.setItem(LOCAL_STORAGE_PROJECT_ID, activeProjectId);
};

export function selectProject(e) {
    activeProjectId = e.target.dataset.id;
};

function createProject(name) {
    return {
        id: Date.now().toString(),
        name: name,
        tasks: [],
    };
};

export function appendProject(name) {
    let project = createProject(name);
    projectStorage.push(project);
};

export function deleteProject() {
    projectStorage = projectStorage.filter(project => project.id !== activeProjectId);
    activeProjectId = null;
};