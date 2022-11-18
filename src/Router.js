import { Routes, Route } from 'react-router-dom';
import { Form } from './components/form/Form';
import { Main } from './components/main/Main';
import { Subtasks } from './components/subtasks/Subtasks';
import { TaskForm } from './components/TaskForm';
import { TaskInfo } from './components/TaskInfo';
import { Tasks } from './components/tasks/Tasks';

export const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Main />}></Route>
                <Route path='/project/:projectId' element={<Tasks />}></Route>
                <Route path='/subtask/:taskId' element={<Subtasks />}></Route>
                <Route path='/subtask/info/:subtaskId' element={<TaskInfo />}></Route>
                <Route path='/create/project' element={<Form />}></Route>
                <Route path='/create/task' element={<TaskForm />}></Route>
                <Route path='/create/subtask' element={<TaskForm />}></Route>
            </Routes>
        </>
    );
}
