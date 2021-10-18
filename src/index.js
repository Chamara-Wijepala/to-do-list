import './styles/index.css';
import { addTask, removeTask } from './modules/manage-task-dom';
import { renderList, clearList } from './modules/manage-project-dom';

addTask();
addTask();

removeTask();

renderList();