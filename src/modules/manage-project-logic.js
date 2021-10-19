export let projectStorage = [
    {
        id: 0,
        name: 'Home',
    },
    {
        id: 1,
        name: 'Today',
    },
    {
        id: 2,
        name: 'This Week',
    },
];

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