import { projectStorage, activeProjectId } from "./manage-project-logic";

export function appendTask(name) {
    let activeProject = projectStorage.find(project => project.id === activeProjectId);
    let task = createTask(name);
    activeProject.tasks.push(task);
};
function createTask(name) {
    return {
        id: Date.now().toString(),
        name: name,
        date: null,
        priority: false,
    };
};

export function togglePriority(e) {
    let activeProject = projectStorage.find(project => project.id === activeProjectId);
    const activeTaskId = e.target.id;
    activeProject.tasks.forEach(task => {
        if (task.id === activeTaskId) {
            (task.priority === true) ? task.priority = false : task.priority = true;
        };
    });
};

export function deleteTask(e) {
    const activeProject = projectStorage.find(project => project.id === activeProjectId);
    const activeTaskId = e.target.id;
    activeProject.tasks = activeProject.tasks.filter(task => task.id !== activeTaskId);
};