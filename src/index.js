import './styles/index.css';
import { addTask, removeTask } from './modules/manage-task-dom';
import { renderList } from './modules/manage-project-dom';

addTask();
addTask();

removeTask();

renderList();