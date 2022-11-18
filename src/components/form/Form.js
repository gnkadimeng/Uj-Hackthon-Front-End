import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { createProjectApi } from "../../api/createProjectApi";
import Auth from "../../util/Auth";
import { EventAlert } from "../EventAlert";

export const Form = () => {
    const history = useNavigate();
    const [formType, setFormType] = useState('');
    const [projectName, setProjectName] = useState('');
    // const [type, setType] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [isRedirect, setRedirect] = useState(false);


    const whatForm = () => {
        const path = window.location.pathname.split('/');
        if (path[2] === 'project') setFormType('Project')

        if (path[2] === 'task') setFormType('Task')

        if (path[2] === 'subtask') setFormType('Subtask')
    }

    const onSubmit = () => {
        if (formType === 'Project') createProjectApi(
            {
                "user_id": Auth.getClientId(),
                "project_name": projectName,
            }
        ).then(data => {
            const { message, isCreated } = data;
            setAlertMessage(message);
            setShowAlert(true);
            setTimeout(() => {
                setRedirect(isCreated);
            }, 1000)
        })

    }

    useEffect(() => {
        whatForm();
    }, [history])

    if (isRedirect) return <Navigate to='/' />;

    return (
        <>
            <div className="flex items-center justify-center p-12">

                <div className="mx-auto w-full max-w-[550px]">
                    < >
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="fName"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        {formType} Name
                                    </label>
                                    <input
                                        onChange={(e) => setProjectName(e.target.value)}
                                        type="text"
                                        name="fName"
                                        id="fName"
                                        placeholder={`${formType} Name`}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            {/* <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label
                                        htmlFor="lName"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        {formType} Type
                                    </label>
                                    <input
                                        onChange={(e) => setType(e.target.value)}
                                        type="text"
                                        name="lName"
                                        id="lName"
                                        placeholder={`${formType} Type`}
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div> */}
                        </div>


                        {
                            formType.includes('k') ?
                                <div className="-mx-3 flex flex-wrap">
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <label
                                                htmlFor="date"
                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                Start Date
                                            </label>
                                            <input
                                                type="date"
                                                name="date"
                                                id="date"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <label
                                                htmlFor="date"
                                                className="mb-3 block text-base font-medium text-[#07074D]"
                                            >
                                                End Date
                                            </label>
                                            <input
                                                type="date"
                                                name="date"
                                                id="date"
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                </div> :
                                ""
                        }



                        <div>
                            <button
                                onClick={onSubmit}
                                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                                Create {formType}
                            </button>
                        </div>
                    </>
                </div>

            </div>
            
            <EventAlert
                isAlert={showAlert}
                message={alertMessage}
            />
        </>

    );
}