import axios from "axios";
import { baseUrl } from "../global/baseUrl";

export const fetchTeamLeadersApi = async () => axios.get(`${baseUrl}/api/view/team/leaders`)
    .then(res => res.data.teamLeaders)