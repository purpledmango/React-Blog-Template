import { PiBellBold } from "react-icons/pi";
import $ from "jquery";
const Hud = (props) => {
  const { authorName, img } = props;
  const triggerUserPanel = () => {
    $("#userPanel").click(() => {
      console.log("Rounded Clicked");
    });
  };
  return (
    <div className="flex items-center justify-end my-5 mx-2 relative">
      <input
        placeholder="Search"
        className="p-2 w-4/5 mx-2 rounded border-gray-400 border-2"
      />

      <div className="px-2">
        <PiBellBold className="text-xl" />
      </div>

      <img
        alt={authorName}
        src={img}
        className="w-10 h-10 rounded-full border-orange-500 border-2 relative z-0"
        onClick={triggerUserPanel}
      />

      <div
        id="userPanel"
        className="h-24 w-24 bg-gray-600 absolute z-10 top-12 rounded flex flex-col justify-center py-2 space-y-2"
      >
        <button className="h-8 px-3 py-1 bg-orange-200 hover:bg-orange-500">
          Logout
        </button>
        <button className="h-8 px-3 py-1 bg-orange-200 hover:bg-orange-500 ">
          Logout
        </button>
      </div>
    </div>
  );
};
export default Hud;
