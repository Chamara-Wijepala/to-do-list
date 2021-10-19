import './styles/index.css';
import { addTask, removeTask } from './modules/manage-task-dom';
import { renderList } from './modules/manage-project-dom';
import { setList } from './modules/manage-project-logic';

addTask();
addTask();

removeTask();

renderList();