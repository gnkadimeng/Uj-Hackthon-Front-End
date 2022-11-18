import axios from "axios";
import { baseUrl } from "../global/baseUrl";

export const createTaskApi = async (task) => axios.post(`${baseUrl}/api/create/task`,
    task
).then(res => res.data);