import axios from "axios";


export const fetchProjectsApi = () => axios.get('http://localhost:5000/api/view/projects')
    .then(res => res.data.projects);