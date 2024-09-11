import Link from 'next/link';
import React from 'react'
import { BsFacebook, BsYoutube } from "react-icons/bs";
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="bg-blue-50">
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={require("../../../public/assets/pictures/logo.png")}
      alt="IT MAN" 
      width={100} 
      height={100}
      className="w-[50px]"
      />
      <span className="ml-3 text-xl">IT MAN PAKISTAN</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 IT MAN PAKISTAN —
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link 
        target="_blank"
        href={"https://youtube.com/@sohailahmed4869?si=q7vxerwuGPa5BcoS"}
      className="text-gray-500"
      >
        <BsYoutube className="mr-3 text-3xl hover:text-[#ff0000]"/>
      </Link>
      <Link 
        target="_blank"
        href={"https://www.facebook.com/profile.php?id=100002779058254"}
      className="text-gray-500"
      >
        < BsFacebook className="mr-3 text-3xl hover:text-[#3b5998]"/>
      </Link>
    </span>
  </div>
</footer>
    </div>
  )
}

export default Footer
