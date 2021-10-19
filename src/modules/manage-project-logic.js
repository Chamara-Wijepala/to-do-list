const LOCAL_STORAGE = 'project.list';
export let projectStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE)) || [];

export function setList() {
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(projectStorage));
};

function createProject(name) {
    return {
        id: projectStorage.length,
        name: name,
        tasks: [],
    };
};

export function appendProject(name) {
    let project = createProject(name);
    projectStorage.push(project);
};