import axios from "axios";
import { baseUrl } from "../global/baseUrl";


export const fetchProjectsApi = () => axios.get(`${baseUrl}/api/view/projects`)
    .then(res => res.data.projects);