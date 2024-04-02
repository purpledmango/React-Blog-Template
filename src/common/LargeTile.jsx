import { useEffect } from "react";
import { Link } from "react-router-dom";

const LargeTiledPost = (props) => {
  return (
    <div className="w-[90%] hover:shadow-lg">
      <div className="w-full mx-auto py-5">
        <img
          src={props.thumbnail}
          className="w-full h-[300px] lg:h-[480px] xl:h-[650px] object-center object-cover rounded-xl"
          alt="dsdawlkkj"
        />
      </div>
      <div className="w-[80%] lg:w-full mx-auto container p-2 lg:p-1 border-b-[1px] border-gray-500">
        <div className="w-full flex flex-col content-center">
          <div className="w-full flex justify-center gap-2 font-extralight">
            <div className="hidden lg:block mb-2">
              Apr 18, 2023
              <span className="mx-2">●</span>
              <span>{props.author?.name}</span>
            </div>
          </div>
          <h2 className="text-3xl font-medium my-1 text-center">
            {props.title}
          </h2>
          <p className="text-center text-sm font-extralight mt-2">
            {props.content} ...
          </p>
          <div className="w-full flex justify-between py-3 items-center mb-8 lg:mb-1">
            <Link
              to={`/article/${props.id}`}
              className="px-2 py-3 font-extralight text-md text-center border-orange-500 border-2 transition-all duration-500 ease-in-out hover:bg-orange-500 hover:text-white hover:rounded"
            >
              Continue Reading
            </Link>
            <div className="text-sm flex gap-3 font-extralight">
              Comments
              <span className="text-orange-500 font-medium">26</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeTiledPost;
