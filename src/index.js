import './styles/index.css';
import { addTask, removeTask } from './modules/manage-task-dom';
import { renderList } from './modules/manage-project-dom';
import { appendProject } from './modules/manage-project-logic';

addTask();
addTask();

removeTask();

appendProject();
renderList();