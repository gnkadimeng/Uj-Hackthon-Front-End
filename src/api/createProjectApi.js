import axios from "axios";
import { baseUrl } from "../global/baseUrl";

export const createProjectApi = async (project) => axios.post(baseUrl,
    project
).then(res => res.data)