import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter, FiGithub } from "react-icons/fi";
import { SiPinterest } from "react-icons/si";
const SideBar = () => {
  const data = Array([1, 2, 3, 4]);
  return (
    <div className="hidden lg:block lg:col-span-3 lg:w-full p-6">
      <div className="w-full h-auto border-black border-b-[1px] flex flex-col justify-evenly sticky top-0 z-10">
        <img
          src="https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2020/08/1597814870881.jpg "
          className="w-full object-cover object-center border-4 border-black rounded-xl"
          alt="dsadsd"
        />
        <div className="flex  font-extrabold items-center justify-center gap-5 text-2xl border-b-[1px] border-black pb-3">
          Follow us on:
          <span className="flex gap-3 text-orange-500 ">
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
            <FiGithub />
            <SiPinterest />
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 my-9">
          <h3 className="text-3xl font-semibold">Most Popular</h3>
          {data.map((post) => {
            return (
              <div className="text-center text-blue-500 text-3xl my-6">
                <span className="block">0</span>
                <div className=" font-medium py-4 underline transition-transform duration-200 ease-in-out hover:scale-125 hover:text-[orange-500]">
                  <Link>THis is the itle</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
