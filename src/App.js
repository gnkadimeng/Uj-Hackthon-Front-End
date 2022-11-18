import { useEffect, useState } from 'react';
import { BrowserRouter, useNavigate, useParams } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Panel } from './components/panel/Panel';
import { SideBar } from './components/sideBar/SideBar'
import { fetchProjectsApi } from './fetchers/fetchProjectsApi';
import { Router } from './Router';


const App = () => {
  const [projects, setProjects] = useState([]);
  const history = useNavigate();

  const fetchProjects = () => fetchProjectsApi().then(data => {
    setProjects(data);
  });

  useEffect(() => {
    fetchProjects();
  }, [history])

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
        <SideBar />
        <div className="flex-grow overflow-hidden h-full flex flex-col">
          <Header />
          <div className="flex-grow flex overflow-x-hidden">
            {/* <Panel projects={projects} /> */}
            {/* {renderPanel()} */}
            <Panel projects={projects} />
            <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
              {/* <Main option={option} /> */}
              {/* {renderTasks()} */}
              {/* {renderMainContent(option)} */}
              <Router />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
