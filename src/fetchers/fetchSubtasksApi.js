import axios from "axios";
import { baseUrl } from "../global/baseUrl";


export const FetchSubtasksApi = (taskId) => axios.get(`${baseUrl}/api/view/sub/task/${taskId}`)
    .then(res => res.data.subtasks)