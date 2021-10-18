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

export const createProject = (name, array) => {
    name;
    array;

    return {
        name,
        array
    };
};