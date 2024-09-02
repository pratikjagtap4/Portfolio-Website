import React from 'react'

function EduCard({ edu }) {
    return (

        <div class=" mt-10 mb-5 bg-white border border-gray-200 rounded-lg shadow flex sm:flex-row flex-col mx-20">
            <a href="#" className='sm:w-1/2 mx-auto '>
                <img class="rounded-t-lg p-3" src={`${edu.image}`} alt="" />
            </a>
            <div class="py-5 sm:w-1/2 mx-auto">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{edu.qualification}</h5>
                    <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900">{edu.college}</h5>
                </a>
                <p className='text-md text-gray-700 float-left'>{edu.duration}</p>
                <p class="mb-3 font-normal text-gray-700 sm:float-right text-center">{edu.score}</p>
            </div>
        </div >
    )
}

export default EduCard