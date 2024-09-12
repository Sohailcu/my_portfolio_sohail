import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div id="About">
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto w-[350px] h-[400px]"
        alt="hero"
        src={require("../../../public/assets/pictures/fullpic.jpeg")}
        width={300}
        height={500}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
        </h1>
      <p className="mb-5 leading-relaxed">
        Hello! I'm Sohail Ahmed, a graduate currently enrolled in the Governor's Initiative on Artificial Intelligence. 
        I'm passionate about generative AI and am actively expanding my skills in this exciting field.
      </p>
      <p className="mb-5 leading-relaxed">
        I work at Mehran Spice and Foods Industries as HRBP - Sales & MARKETING Since 13 Years,
        where I contribute to our innovative projects.
      </p>
      <div className="flex justify-center">
        <Link target='_blank' href={"/assets/cv/Sohail Ahmed (Resume AM-HR).pdf"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          View CV
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
