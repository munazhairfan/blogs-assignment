import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-blue-50">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image src={"/logo.png"} alt="logo" height={40} width={40}></Image>
          <span className="ml-3 text-xl text-cyan-700 font-dancing">Wellness Warriors</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2025 Wellness Warriors —
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="ml-16 text-gray-500"
            href="https://github.com/munazhairfan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.801 8.207 11.396.6.111.828-.258.828-.573 0-.283-.011-1.035-.016-2.033-3.338.727-4.038-1.348-4.038-1.348-.546-1.383-1.334-1.755-1.334-1.755-1.09-.743.082-.728.082-.728 1.205.084 1.842 1.242 1.842 1.242 1.07 1.828 2.804 1.299 3.491.996.107-.776.418-1.3.759-1.597-2.663-.303-5.467-1.332-5.467-5.929 0-1.309.468-2.381 1.24-3.221-.124-.303-.537-1.527.118-3.177 0 0 1.008-.323 3.306 1.231.962-.267 1.996-.401 3.02-.405 1.023.004 2.057.138 3.019.405 2.297-1.554 3.305-1.231 3.305-1.231.657 1.65.242 2.874.118 3.177.773.84 1.241 1.912 1.241 3.221 0 4.6-2.808 5.625-5.481 5.92.43.372.826 1.102.826 2.225 0 1.607-.015 2.904-.015 3.294 0 .317.227.688.832.573C20.561 21.801 24 17.303 24 12c0-6.628-5.372-12-12-12z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a className="ml-16 text-gray-500" href="https://www.linkedin.com/in/munazha-irfan-0534742ba/"
          target="_blank">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
