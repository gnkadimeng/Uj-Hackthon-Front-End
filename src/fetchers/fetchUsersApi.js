import axios from "axios";
import { baseUrl } from "../global/baseUrl";

export const fetchUsersApi = () => axios.get(`${baseUrl}/api/get/users`)
    .then(res => res.data.users)