import { createRequire } from 'module'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 
      text-gray-900">
        My Projects
      </h1>
      </div>
    <div className="flex flex-wrap -m-8 -mt-[5rem]">
      {/*Project1*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/projects/catering.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              IT MAN PAKISTAN
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              CATERING Project
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is the Project which I've created for those who owns a 
              catering business.
            </p>
            <Link target="_blank" href={"https://catering-dun.vercel.app/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
                View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
        {/*Project2*/}
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/projects/sms.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              IT MAN PAKISTAN
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              SMS Project
            </h1>
            <p className="leading-relaxed line-clamp-2">
            This is the Project which I've created for those who owns a Small 
            SMS business.
            </p>
            <Link target="_blank" href={"https://sms-sooty-gamma.vercel.app/"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
                View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
      {/*Project3*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/projects/CountDownTimer.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              IT MAN PAKISTAN
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              CountDown Timer
            </h1>
            <p className="leading-relaxed line-clamp-2">
            This is the Project which I've Created a CountDownTimer with Node.Js & Tailwind CSS with a user-friendly layout.
            </p>
            <Link target="_blank" href={""}>
            <p className="leading-relaxed text-blue-500 hover:underline">
                View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
       {/*Project4*/}
       <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/projects/ToDoList.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              IT MAN PAKISTAN
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              ToDo List
            </h1>
            <p className="leading-relaxed line-clamp-2">
            This is the Project which I've Created a Todo List with HTML, CSS, JavaScript & Tailwind CSS with a user-friendly layout.
            </p>
            <Link target="_blank" href={""}>
            <p className="leading-relaxed text-blue-500 hover:underline">
                View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
       {/*Project5*/}
       <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/projects/Vehicle_Enter_Exit.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              IT MAN PAKISTAN
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Vehicle Enter & Exit Form
            </h1>
            <p className="leading-relaxed line-clamp-2">
            This is the Project which I've Created a Vehilce Enter & Exit form with HTML, CSS, JavaScript with a user-friendly layout.
            </p>
            <Link target="_blank" href={""}>
            <p className="leading-relaxed text-blue-500 hover:underline">
                View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
       {/*Project6*/}
       <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assets/projects/EDITABLE RESUME BUILDER.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              IT MAN PAKISTAN
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Editable Resume Builder
            </h1>
            <p className="leading-relaxed line-clamp-2">
            This is the Project which I've Created a Editable Resume Builder with HTML, CSS, TypeScript & JavaScript with a user-friendly layout as my Q2 Class Assignment.
            </p>
            <Link target="_blank" href={""}>
            <p className="leading-relaxed text-blue-500 hover:underline">
                View Project..
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
