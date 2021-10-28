import './styles/index.css';
import { activeProjectId, setList, selectProject } from './modules/manage-project-logic';
import { renderList } from './modules/manage-project-dom';
import { renderTaskList } from './modules/manage-task-dom';
import { togglePriority } from './modules/manage-task-logic';

const projectList = document.getElementById('project-list');
const taskMenu = document.getElementById('task-menu');

function loadPage() {
    renderList();
    if (activeProjectId !== 'null') {
        renderTaskList();
    }
    else return;
};

//Applies a class to a clicked project then saves project's id in localStorage
projectList.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'li') {
        selectProject(e);
        setList();
        loadPage();
    };
});

//Toggles task priority
taskMenu.addEventListener('change', e => {
    if (e.target.tagName.toLowerCase() === 'input') {
        togglePriority(e);
        setList();
        loadPage();
    };
});

loadPage();