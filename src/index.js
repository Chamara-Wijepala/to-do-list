import './styles/index.css';
import { renderList } from './modules/manage-project-dom';
import { renderTaskList } from './modules/manage-task-dom';
import { activeProjectId } from './modules/manage-project-logic';

function loadPage() {
    renderList();
    if (activeProjectId !== 'null') {
        renderTaskList();
    }
    else return;
};

loadPage();