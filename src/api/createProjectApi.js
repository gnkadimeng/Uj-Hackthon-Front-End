import axios from "axios";
import { baseUrl } from "../global/baseUrl";

export const createProjectApi = async (project) => axios.post(`${baseUrl}/api/create/project`,
    project
).then(res => res.data)