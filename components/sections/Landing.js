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
      <div className="my-3 bg-gray-300 p-4 w-10/12 md:w-8/12 text-center rounded-md shadow-lg flex flex-col items-center">
        <h4 className="text-xl font-bold my-1">Information</h4>
        <p>
          Sample dApp has connect wallet built in using{" "}
          <a
            href="https://www.npmjs.com/package/web3modal"
            className="text-blue-500"
          >
            web3modal
          </a>{" "}
          package
        </p>
        <div className="my-2 w-10/12">
          <p>
            To run the app you just need to open terminal and run npm run dev in
            terminal
          </p>
          <p className="my-2">
            This project is using Next.js and was created with the --use-npm
            flag
          </p>
          <p>Tailwindcss is already pre installed</p>
          <p className="my-2">
            You can use many different platforms to host. I would personally
            recommend Vercel
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-xl font-bold">Links</h4>
          <div className="flex flex-col">
            <a href="https://nextjs.org/docs" className="text-blue-500 my-1">
              Nextjs Docs
            </a>
            <a
              href="https://www.npmjs.com/package/web3modal"
              className="text-blue-500 my-1"
            >
              Web3Modal
            </a>
            <a
              href="https://tailwindcss.com/docs/installation"
              className="text-blue-500 my-1"
            >
              Tailwindcss
            </a>
            <a href="https://vercel.com/docs" className="text-blue-500 my-1">
              Vercel
            </a>
            <a></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
