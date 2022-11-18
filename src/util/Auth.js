import Axios from "axios";
import { baseUrl } from "../global/baseUrl";

const Auth = {
    isAuthenticated: false,
    client_id: 0,
    token: '',

    async check() {
        try {
            let jwt = {
                token: '',
            };
            jwt.token = window.localStorage.getItem('token');
            const getToken = window.localStorage.getItem('token');
            console.log(jwt.token !== '');
            console.log(getToken + " getting token");
            if (jwt.token !== '') {
                await Axios.post(`${baseUrl}/api/auth`, jwt)
                    .then(res => {
                        console.log(res);
                        this.isAuthenticated = res.data.isAuthenticated;
                        this.client_id = res.data.client_id;
                        this.token = res.data.token;
                    });
            };
        } catch (error) {

        };
    },

    getToken() {
        return this.token;
    },
    getAuth() {
        return this.isAuthenticated;
        // return true
    },
    getClientId() {
        // return this.client_id;
        return 8;
    }

};

export default Auth;