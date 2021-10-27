import './styles/index.css';
import { activeProjectId, setList, selectProject } from './modules/manage-project-logic';
import { renderList } from './modules/manage-project-dom';
import { renderTaskList } from './modules/manage-task-dom';

const projectList = document.getElementById('project-list');

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

loadPage();