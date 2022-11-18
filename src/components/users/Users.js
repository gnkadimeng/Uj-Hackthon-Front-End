import { UsersRows } from "../UsersRows";
import { Loader } from '../Loader';

export const Users = ({ users }) => {
    return (
        <>
            {
                users.length > 0 ?
                    <div className=" lg:w-5/6 items-center justify-center p-6">
                        <div className="bg-white shadow-md rounded my-6">
                            <table className="min-w-max w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left">Name</th>
                                        <th className="py-3 px-6 text-left">Role</th>
                                        <th className="py-3 px-6 text-center">Email</th>
                                        <th className="py-3 px-6 text-center">Status</th>
                                        <th className="py-3 px-6 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                    {
                                        users.map(user => (
                                            <UsersRows
                                                key={user.id}
                                                user={user}
                                            />
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <Loader status={'Fetching users'} />
            }
        </>
    );
}