import axios from "axios";
import { baseUrl } from "../global/baseUrl";

export const createTaskApi = async (task) => axios.post(baseUrl,
    task
).then(res => res.data);