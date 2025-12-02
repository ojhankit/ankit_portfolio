import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const InfoCard = ({ linkedin, github, email }) => {
  return (
    <div className="
      w-72 sm:w-80 md:w-96 
      rounded-lg p-6 sm:p-8 
      flex flex-col items-center justify-center space-y-1
    ">
      <h1 className="text-3xl sm:text-4xl hover:underline text-gray-800 font-semibold">
        Ankit Ojha
      </h1>

      <h2 className="text-lg sm:text-xl hover:underline text-gray-600 tracking-wide">
        software developer
      </h2>

      <h3 className="text-sm sm:text-lg hover:underline text-gray-500">
        b.tech undergrad
      </h3>

      <div className="flex gap-4 sm:gap-6 mt-4">
        <a href={linkedin} target="_blank" 
        rel="noopener noreferrer" className="text-black hover:text-blue-800 transition">
          <FaLinkedin size={32} className="sm:size-8" />
        </a>
        <a href={github} target="_blank" 
        rel="noopener noreferrer" className="text-black hover:text-gray-600 transition">
          <FaGithub size={32} className="sm:size-8" />
        </a>
        <a href={email} target="_blank" 
        rel="noopener noreferrer" className="text-black hover:text-red-800 transition">
          <MdEmail size={32} className="sm:size-8" />
        </a>
      </div>
    </div>
  )
}

export default InfoCard
