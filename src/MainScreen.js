import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Panel } from "./components/panel/Panel";
import { SideBar } from "./components/sideBar/SideBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { ProjectCard } from "./components/projectCard/ProjectCard";
import { UserProfile } from "./components/userProfile/UserProfile";
import { TaskForm } from "./components/taskForm/TaskForm";
import { ProjectForm } from "./components/projectForm/ProjectForm";
import { SubTaskForm } from "./components/subTaskForm/SubTaskForm";


const MainScreen = () => {
    // const [option, setOption] = useState(false);

    const [option, setOption] = useState('tasks');
    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [subTasks, setSubTasks] = useState([]);

    const [isLogedIn, setIsLogedIn] = useState(false);
    const [user, setUser] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);

    const [projectId, setProjectId] = useState(0);
    const [taskId, setTaskId] = useState(0);

    const [showTasks, setShowTasks] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:5000/api/view/projects').then(res => {
            // console.log(res.data);
            setProjects(res.data.projects)
        })

        axios.get(`http://localhost:5000/api/view/task/${1}`).then(res => {
            // console.log(res.data.tasks);
            setTasks(res.data.tasks)
        })
        console.log(taskId);
        // axios.get('http://localhost:5000/api/view/project/manager/').then(res => {
        //     setUser(res.data.leader[0]);
        //     console.log(res.data.leader[0]);
        // })
    }, []);

    const handleSignOut = () => {
        setIsLogedIn(!isLogedIn)
    }

    const renderSideBar = () => {
        return (
            <div className="bg-white dark:bg-gray-900 dark:border-gray-800 w-20 flex-shrink-0 border-r border-gray-200 flex-col hidden sm:flex">
                <div className="h-16 text-blue-500 flex items-center justify-center">
                    <svg className="w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33">
                        <path fill="currentColor" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="flex mx-auto flex-grow mt-4 flex-col text-gray-400 space-y-4">
                    <button onClick={() => setOption('tasks')} className="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                    </button>

                    <button onClick={() => setOption('createProject')} className="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                            <line x1="12" y1="11" x2="12" y2="17"></line>
                            <line x1="9" y1="14" x2="15" y2="14"></line>
                        </svg>
                    </button>
                </div>
            </div>
        );
    }

    const renderHeader = () => {
        return (
            <div className="h-16 lg:flex w-full border-b border-gray-200 dark:border-gray-800 hidden px-10">

                <div className="flex h-full text-gray-600 dark:text-gray-400">
                    <a href="#" className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Projects</a>
                    {/* <a href="#" className="cursor-pointer h-full border-b-2  dark:text-white dark:border-white inline-flex mr-8 items-center">Users</a> */}
                    {/* <a href="#" className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Notifications</a> */}

                </div>
                <div className="ml-auto flex items-center space-x-7">
                    <button onClick={handleSignOut} className="h-8 px-3 rounded-md shadow text-white bg-blue-500">Sign Out</button>

                    <button className="flex items-center">
                        <span className="relative flex-shrink-0">
                            <img className="w-7 h-7 rounded-full" src="https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="profile" />
                            <span className="absolute right-0 -mb-0.5 bottom-0 w-2 h-2 rounded-full bg-green-500 border border-white dark:border-gray-900"></span>
                        </span>
                        <span className="ml-2">{user.name}</span>
                        <svg viewBox="0 0 24 24" className="w-4 ml-1 flex-shrink-0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        );
    }

    const renderPanel = () => {
        return (
            <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
                <div className="text-xs text-gray-400 tracking-wider">Projects</div>
                <div className="relative mt-2">
                    <input type="text" className="pl-8 h-9 bg-transparent border border-gray-300 dark:border-gray-700 dark:text-white w-full rounded-md text-sm" placeholder="Search" />
                    <svg viewBox="0 0 24 24" className="w-4 absolute text-gray-400 top-1/2 transform translate-x-0.5 -translate-y-1/2 left-2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>
                <div className="space-y-4 mt-3">
                    {projects.map((project, i) => (
                        // <ProjectCard projectName={project.project_name} key={i}  />
                        <button key={i} onClick={() => axios.get(`http://localhost:5000/api/view/task/${project.id}`).then(res => setTasks(res.data.tasks), setOption('tasks'), setProjectId(project.id))} className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                            <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                                {project.project_name}
                            </div>
                            <div className="flex items-center w-full">
                                <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md">Design</div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    const renderTasks = () => {

        return (
            <>
                <div className="sm:p-7 p-4">
                    <div className="flex w-full items-center mb-7">
                        {/* <button className="inline-flex mr-3 items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-200 leading-none py-0">
                            <svg viewBox="0 0 24 24" className="w-4 mr-2 text-gray-400 dark:text-gray-600" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            Last 30 days
                            <svg viewBox="0 0 24 24" className="w-4 ml-1.5 text-gray-400 dark:text-gray-600" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button> */}
                        {/* <AddTask /> */}
                        {/* <button className="inline-flex items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-200 leading-none py-0">
                            Filter by
                            <svg viewBox="0 0 24 24" className="w-4 ml-1.5 text-gray-400 dark:text-gray-600" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button> */}

                        {/* <div className="ml-auto text-gray-500 text-xs sm:inline-flex hidden items-center">
                            <span className="mr-3">Page 2 of 4</span>
                            <button className="inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0">
                                <svg className="w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>
                            <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0">
                                <svg className="w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div> */}
                    </div>
                    <button onClick={() => setOption('createTask')} disabled={isAdmin} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Task</button>

                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-gray-400">
                                <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Task Name</th>
                                <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Team Leader</th>
                                <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">Start Date</th>
                                <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Due Date</th>
                                <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 dark:text-gray-100">
                            {

                                tasks.map((task, i) => (
                                    <>
                                        <tr key={i}>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                <div className="flex items-center">
                                                    <svg viewBox="0 0 24 24" className="w-4 mr-5 text-gray-400" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                                        <line x1="1" y1="10" x2="23" y2="10"></line>
                                                    </svg>
                                                    {task.task_name}
                                                </div>
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                                <div className="flex items-center">
                                                    <UserProfile userId={task.user_id} />
                                                </div>
                                            </td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">{task.start_date}</td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">{task.end_date}</td>
                                            <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-red-500">

                                                <button key={task.id} onClick={() => axios.get(`http://localhost:5000/api/view/sub/task/${task.id}`).then(res => {
                                                    setSubTasks(res.data.subTasks);
                                                    console.log(res.data.subTasks);
                                                    setTaskId(task.id)
                                                    setOption('subTask')
                                                })} className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                                    </svg>

                                                    View
                                                </button>
                                            </td>
                                        </tr>

                                        {/* {renderSubTask()} */}

                                    </>


                                ))
                            }

                        </tbody>
                    </table>

                </div>

            </>
        );
    }


    const renderSubTask = () => {
        return (
            <>
                <button onClick={() => setOption('createSubTask')} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Sub Task</button>

                <table className="w-full text-left">
                    <thead>
                        <tr className="text-gray-400">
                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Sub Task Name</th>
                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Team Member</th>
                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">Start Date</th>
                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Due Date</th>
                            {/* <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Action</th> */}
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 dark:text-gray-100">
                        {

                            subTasks.map((task, i) => (
                                <>
                                    <tr key={i}>
                                        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                            <div className="flex items-center">
                                                <svg viewBox="0 0 24 24" className="w-4 mr-5 text-gray-400" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                                    <line x1="1" y1="10" x2="23" y2="10"></line>
                                                </svg>
                                                {task.sub_task_name}
                                            </div>
                                        </td>
                                        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                            <div className="flex items-center">
                                                <UserProfile userId={task.user_id} />
                                            </div>
                                        </td>
                                        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">{task.start_date}</td>
                                        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">{task.end_date}</td>
                                        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-red-500">
                                        </td>
                                    </tr>

                                    {/* {renderSubTask()} */}

                                </>

                            ))
                        }

                    </tbody>
                </table>

            </>
        );
    }

    const renderSubTaskForUser = () => {
        console.log();
        return (
            <>
                {/* <button onClick={() => setOption('createSubTask')} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Sub Task</button> */}

                <table className="w-full text-left">
                    <thead>
                        <tr className="text-gray-400">
                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Sub Task Name</th>
                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Team Member</th>
                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">Start Date</th>
                            <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Due Date</th>
                            {/* <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Action</th> */}
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 dark:text-gray-100">
                        {

                            // subTasks.map((task, i) => (
                            // { }
                            <>
                            <tr key={subTasks[subTasks.length - 1].id}>
                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                    <div className="flex items-center">
                                        <svg viewBox="0 0 24 24" className="w-4 mr-5 text-gray-400" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                            <line x1="1" y1="10" x2="23" y2="10"></line>
                                        </svg>
                                        {subTasks[subTasks.length - 1].sub_task_name}
                                    </div>
                                </td>
                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                    <div className="flex items-center">
                                        <UserProfile userId={subTasks[subTasks.length - 1].user_id} />
                                    </div>
                                </td>
                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">{subTasks[subTasks.length - 1].start_date}</td>
                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">{subTasks[subTasks.length - 1].end_date}</td>
                                <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-red-500">
                                </td>
                            </tr>

                                    {/* {renderSubTask()} */}

                    </>

                            // ))
                        }

                </tbody>
            </table>

            </>
        );
    }


const renderMainContent = (selectedOption) => {
    let content = ''
    switch (selectedOption) {
        case 'tasks':
            content = renderTasks();
            break;

        case 'createTask':
            content = <TaskForm projectId={projectId} />
            break;

        case 'createProject':
            content = <ProjectForm />
            break;

        case 'subTask':
            content = renderSubTask();
            break;

        case 'createSubTask':
            content = <SubTaskForm projectId={taskId} />
            break;

        default:
            break;
    }
    return (
        content
    );
}

const renderLogInForm = () => {
    return (
        <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
            <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div className="rounded-xl bg-white shadow-xl">
                        <div className="p-6 sm:p-16">
                            <div className="space-y-4">
                                <img src="https://tailus.io/sources/blocks/social/preview/images/icon.svg" loading="lazy" className="w-10" alt="tailus logo" />
                                <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Sign in to unlock the <br /> best of Workfloor.</h2>
                            </div>
                            <div className="mt-16 grid space-y-4">
                                <button onClick={() => axios.get('http://localhost:5000/api/view/project/manager/').then(res => {
                                    setUser(res.data.leader[0]);
                                    setIsLogedIn(true);
                                    setIsAdmin(false);
                                    console.log(res.data.leader[0]);
                                })} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                    <div className="relative flex items-center space-x-4 justify-center">
                                        {/* <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" /> */}
                                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue as Project Manager</span>
                                    </div>
                                </button>
                                <button onClick={() => axios.get('http://localhost:5000/api/view/member').then(res => {
                                    setUser(res.data.member[0]);
                                    setIsLogedIn(true)
                                    setIsAdmin(true);
                                    console.log(res.data.member[0]);
                                })} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                    <div className="relative flex items-center space-x-4 justify-center">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute left-0 w-5 text-gray-700" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                            </svg> */}
                                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue as Team Member</span>
                                    </div>
                                </button>

                            </div>

                            <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                                <p className="text-xs">By proceeding, you agree to our <a href="#" className="underline">Terms of Use</a> and confirm you have read our <a href="#" className="underline">Privacy and Cookie Statement</a>.</p>
                                <p className="text-xs">This site is protected by reCAPTCHA and the <a href="#" className="underline">Google Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a> apply.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const renderAdmin = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
            {/* <SideBar /> */}
            {renderSideBar()}
            <div className="flex-grow overflow-hidden h-full flex flex-col">
                {renderHeader()}
                {/* <Header /> */}
                <div className="flex-grow flex overflow-x-hidden">
                    {/* <Panel projects={projects} /> */}
                    {renderPanel()}
                    <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
                        {/* <Main option={option} /> */}
                        {/* {renderTasks()} */}
                        {renderMainContent(option)}
                    </div>
                </div>
            </div>
        </div>
    );
}

const renderMember = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
            {/* <SideBar /> */}
            {/* {renderSideBar()} */}
            <div className="flex-grow overflow-hidden h-full flex flex-col">
                {renderHeader()}
                {/* <Header /> */}
                <div className="flex-grow flex overflow-x-hidden">
                    {/* <Panel projects={projects} /> */}
                    {/* {renderPanel()} */}
                    <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
                        {/* <Main option={option} /> */}
                        {renderSubTaskForUser()}
                        {/* {renderMainContent(option)} */}
                    </div>
                </div>
            </div>
        </div>
    );
}


return (
    // container

    isLogedIn ? (
        user.admin ? (
            renderAdmin()
        ) : (
            renderMember()
        )
    ) : (
        renderLogInForm()
    )

);
}

export default MainScreen


