import React from 'react'
import { useUserDetails } from '../context/UserDetails'
import ProjectCard from './ProjectCard'

function Projects() {
    const { projects } = useUserDetails()

    return (
        <>
            <h1 className='text-center mt-10 font-extrabold text-5xl sm:text-7xl gradient-title'>Projects</h1>
            <div className="mx-auto w-full sm:max-w-7xl">
                {
                    projects.map(proj => <ProjectCard key={proj.name} proj={proj}></ProjectCard>)
                }
            </div>
        </>
    )
}

export default Projects