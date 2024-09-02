import React from 'react'
import { useUserDetails } from '../context/UserDetails'
import EduCard from './EduCard'

function Education() {
    const { education } = useUserDetails()

    return (
        <>
            <h1 className='text-center mt-10 font-extrabold text-5xl sm:text-7xl gradient-title'>Education</h1>
            <div className="mx-auto w-full max-w-7xl">

                {
                    education.map(edu => <EduCard key={edu.score} edu={edu}></EduCard>)
                }
            </div>
        </>
    )
}

export default Education