import { projectStorage, activeProjectId } from "./manage-project-logic";

const activeProject = projectStorage.find(project => project.id === activeProjectId);

export function appendTask(name) {
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
    const activeTask = e.target.id;
    activeProject.tasks.forEach(task => {
        if (task.id === activeTask) {
            (task.priority === true) ? task.priority = false : task.priority = true;
        };
    });
};