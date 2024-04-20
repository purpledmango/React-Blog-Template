import React from "react";

const Footer = () => {
  return (
    <section className=" p-6 bg-[blue]">
      <footer className="w-[95%] h-full py-3 px-4 text-white mx-auto ">
        <div className="flex flex-col justify-center items-center py-6 border-b-[1px]">
          <h3 className="text-2xl">
            Come for the blog stay for the knowledge.
          </h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
            facere!
            <span className="underline">Read More</span>
          </span>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center ">
          <div className="py-6 flex flex-col justify-center items-center gap-2 lg:w-1/3">
            <h4 className="text-md">
              Stay updated with news handpicked for you
            </h4>
            <input className=" p-5" placeholder="Join our Newsletter " />
          </div>
          <div className="py-6 grid grid-cols-6  justify-center items-center gap-2 lg:w-1/3">
            <span className="col-span-2">Food</span>
            <span className="col-span-2">Tech</span>
            <span className="col-span-2">Health</span>
            <span className="col-span-2">Life-style</span>
            <span className="col-span-2">Fashion</span>
            <span className="col-span-2">Productivity</span>
          </div>

          <div className="lg:w-1/3">
            <p className="text-xs py-6">
              PatchedWeb
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
