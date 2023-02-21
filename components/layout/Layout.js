import Navbar from "../sections/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-w-screen overflow-x-hidden bg-white text-black min-full-page">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
      </div>
    </>
  );
};

export default Layout;
