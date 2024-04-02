import React, { useState } from "react";

import SideNav from "./SideNav";
import Hud from "./Hud";
import CMS from "./CMS";
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

function Posts() {
  const [value, setValue] = useState("");

  return (
    <section className="w-screen grid grid-cols-10">
      <SideNav />
      <div className=" mx-5 col-span-8">
        <Hud img="https://picsum.photos/200" authorName="Nitish" />
        <div className="w-full grid grid-cols-2 gap-4">
          <table></table>
        </div>
        <div className="mt-6 text-center ">
          <h2 className="font-normal text-lg text-gray-700 pb-1 px-2 transition-all ease-in hover:underline">
            Articles you Published
          </h2>
        </div>
        <div className="m-3 rounded border-gray-300 border-2 p-2">
          <h1>Add a New Post</h1>

          <CMS />
        </div>
      </div>
    </section>
    //   {/* <ReactQuill
    //   theme="snow"
    //   value={value}
    //   onChange={setValue}
    //   modules={modules}
    //   formats={formats}
    // /> */}
    // </section>
  );
}

export default Posts;
