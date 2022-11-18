import axios from "axios";

export const createTaskApi = async (task) => axios.post('http://localhost:5000/api/create/task',
    task
).then(res => res.data);