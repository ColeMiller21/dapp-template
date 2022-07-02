import React, { useEffect } from "react";

const Landing = () => {
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };

  useEffect(() => {
    window.addEventListener("resize", appHeight);
    appHeight();
  }, []);

  return (
    <div className="min-full-page w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl">dApp Template</h1>
      <div className="my-3 bg-gray-300 p-4 w-10/12 md:w-8/12 text-center rounded-md shadow-lg flex flex-col items-center font-quatt">
        <h4 className="text-xl font-bold my-1 font-oswald">Information</h4>
        <p>Sample dApp has connect wallet built in using web3modal package</p>
        <div className="my-2 w-10/12">
          <p>
            To run the app you just need to open terminal run npm i and run npm
            run dev in terminal
          </p>
          <p className="my-1">
            This project is using Next.js and was created with the --use-npm
            flag
          </p>
          <p className="my-1">Tailwindcss is already pre installed</p>
          <p className="my-1">Icons installed from react-icons</p>
          <p className="my-2">
            You can use many different platforms to host. I would personally
            recommend Vercel
          </p>
        </div>
        <div className="flex flex-col items-center font-quatt">
          <h4 className="text-xl font-bold font-oswald">Links</h4>
          <div className="flex w-6/12 flex-wrap justify-center">
            <a href="https://nextjs.org/docs" className="text-blue-500 m-1">
              Nextjs
            </a>
            <a
              href="https://www.npmjs.com/package/web3modal"
              className="text-blue-500 m-1"
            >
              Web3Modal
            </a>
            <a
              href="https://tailwindcss.com/docs/installation"
              className="text-blue-500 m-1"
            >
              Tailwindcss
            </a>
            <a href="https://vercel.com/docs" className="text-blue-500 m-1">
              Vercel
            </a>
            <a
              href="https://react-icons.github.io/react-icons/"
              className="text-blue-500 m-1"
            >
              React Icons
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
