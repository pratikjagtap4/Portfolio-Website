import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard({ proj }) {
    return (

        <div class=" mt-10 mb-5 bg-white border border-gray-200 rounded-lg shadow flex flex-col sm:flex-row mx-10">
            <a href={proj.link} className='sm:w-1/3 mx-auto my-auto p-5 '>
                <img class="rounded-t-lg " src={`${proj.image}`} alt="" />
            </a>
            <div class="md:pl-20 p-5 sm:w-2/3 mx-auto">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{proj.name}</h5>
                    <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">{proj.tech}</h5>
                    <h5 class="mb-2 text-md  tracking-tight text-gray-900">{proj.desc}</h5>
                </a>
                <p className='text-md text-gray-700 float-left'>{proj.duration}</p>
                <Link
                    to={proj.link}
                    className='mb-3 font-normal text-blue-500 float-right'
                >Project Link</Link>
            </div>
        </div >
    )
}

export default ProjectCard