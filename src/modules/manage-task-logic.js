import { projectStorage, activeProjectId } from "./manage-project-logic";

export function appendTask(name) {
    let task = createTask(name);
    const activeProject = projectStorage.find(project => project.id === activeProjectId);
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