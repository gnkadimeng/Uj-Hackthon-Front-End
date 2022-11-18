import axios from "axios";


export const fetchTaskskAPi = (projectId) => axios.get(`http://localhost:5000/api/view/task/${projectId}`)
    .then(res => res.data.tasks);