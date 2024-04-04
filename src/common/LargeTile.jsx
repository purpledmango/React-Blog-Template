import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HOST_NAME } from "../constants/hosts";
import { formatAuthorName } from "../utlis/authorNames";
import { formatDate } from "../utlis/dateFormatter";

const LargeTiledPost = ({ title = "Hello", content = "", createdAt = "", author = "", thumbnail = null, id = "", comments = 0, slug = "" }) => {
  const [authorName, setAuthorName] = useState("");

  useEffect(() => {
    const fetchAuthorName = async () => {
      try {
        const name = await formatAuthorName(author);
        setAuthorName(name);
      } catch (error) {
        console.error("Error fetching author name:", error);
      }
    };

    fetchAuthorName();
  }, [author]);

  return (
    <div className="w-[90%] hover:shadow-lg">
      <div className="w-full mx-auto py-5">
        <img
          src={`${HOST_NAME}/${thumbnail.path}`}
          className="w-full h-[300px] lg:h-[480px] xl:h-[650px] object-center object-cover rounded-xl"
          alt={thumbnail?.filename}
        />
      </div>
      <div className="w-[80%] lg:w-full mx-auto container p-2 lg:p-1 border-b-[1px] border-gray-500">
        <div className="w-full flex flex-col content-center">
          <div className="w-full flex justify-center gap-2 font-extralight">
            <div className="hidden lg:block mb-2">
              {formatDate(createdAt)}
              <span className="mx-2">●</span>
              <span>{authorName}</span>
            </div>
          </div>
          <h2 className="text-3xl font-medium my-1 text-center">
            {title}
          </h2>
          <p className="text-center text-sm font-extralight mt-2" dangerouslySetInnerHTML={{ __html: `${content.replace(/<\/?[^>]+(>|$)/g, "")} ...` }} />

          <div className="w-full flex justify-between py-3 items-center mb-8 lg:mb-1">
            <Link
              to={`/article/${slug}`}
              className="px-2 py-3 font-extralight text-md text-center border-orange-500 border-2 transition-all duration-500 ease-in-out hover:bg-orange-500 hover:text-white hover:rounded"
            >
              Continue Reading
            </Link>
            <div className="text-sm flex gap-3 font-extralight">
              Comments
              <span className="text-orange-500 font-medium">{comments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeTiledPost;
