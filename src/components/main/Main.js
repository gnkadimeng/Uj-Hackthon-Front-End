import { UserProfile } from "../userProfile/UserProfile";
import { useState } from 'react'
import { ProjectForm } from "../projectForm/ProjectForm";
import { TaskContent } from "../taskContent/TaskContent";

export const Main = ({ option }) => {

    const renderOption = () => {
        if (option === 'createProject') {
            return <ProjectForm />
        } else if (option === 'home') {
            return <TaskContent />
        }
    }

    return (
       renderOption()
    );
}