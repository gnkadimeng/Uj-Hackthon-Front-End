import axios from "axios";
import { baseUrl } from "../global/baseUrl";


export const fetchTaskskAPi = (projectId) => axios.get(`${baseUrl}/api/view/task/${projectId}`)
    .then(res => res.data.tasks.length > 0 ? {
        tasks: res.data.tasks,
        isFound: true
    } : {
        tasks: [],
        isFound: false
    });