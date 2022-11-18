import axios from "axios";


export const FetchSubtasksApi = (taskId) => axios.get(`http://localhost:5000/api/view/sub/task/${taskId}`)
    .then(res => res.data.subtasks)