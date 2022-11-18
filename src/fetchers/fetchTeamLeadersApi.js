import axios from "axios";

export const fetchTeamLeadersApi = async () => axios.get('http://localhost:5000/api/view/team/leaders')
    .then(res => res.data.teamLeaders)