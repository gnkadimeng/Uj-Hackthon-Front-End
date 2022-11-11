import axios from "axios";
import { useEffect, useState } from "react";


export const UserProfile = ({ userId, userProfilePicture }) => {
    const [user, setUser] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:5000/api/get/member/${userId}`).then(res => setUser(res.data.member[0]));
    }, [])
    return (
        <button className="flex items-center">
            <span className="relative flex-shrink-0">
                <img className="w-7 h-7 rounded-full" src="https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="profile" />
                <span className="absolute right-0 -mb-0.5 bottom-0 w-2 h-2 rounded-full bg-green-500 border border-white dark:border-gray-900"></span>
            </span>
            <span className="ml-2">{user.name}</span>
        </button>
    );
}