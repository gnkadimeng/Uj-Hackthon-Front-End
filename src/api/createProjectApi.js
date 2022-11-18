import axios from "axios";

export const createProjectApi = async (project) => axios.post('http://localhost:5000/api/create/project',
    project
).then(res => res.data)