import { PiPenLight } from "react-icons/pi";
const Stats = () => {
  return (
    <>
      <div className="w-full grid grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2 p-3 justify-center items-center text-xs rounded h-16 bg-gradient-to-r from-[#FF928B] to-[#FFAC81] shadow hover:shadow-xl transition-all ease-in-out duration-200">
          <h3 className="font-bold">Drafts</h3>
          <h4 className="text-red-600">5</h4>
        </div>
        <div className="flex flex-col space-y-2 p-3 justify-center items-center text-xs rounded h-16 bg-gradient-to-r from-[#FE5858] to-[#EE9617] shadow hover:shadow-xl transition-all ease-in-out duration-200">
          <h3 className="font-bold">Published</h3>
          <h4 className="text-green-600">12</h4>
        </div>
        <div className="flex flex-col space-y-2 p-3 justify-center items-center text-xs rounded h-16 bg-gradient-to-r from-[#B02E0C] to-[#EB4511] shadow hover:shadow-xl transition-all ease-in-out duration-200">
          <h3 className="font-bold">Views</h3>
          <h4 className="text-yellow-500">136</h4>
        </div>
      </div>
      <div className="mt-6 text-center ">
        <h2 className="font-normal text-lg text-gray-700 pb-1 px-2 transition-all ease-in hover:underline">
          Articles you Published
        </h2>
      </div>
    </>
  );
};

export default Stats;
