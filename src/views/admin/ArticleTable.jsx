import React, { useEffect, useState } from "react";
import { PiTrashBold, PiPencilSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const ArticleRow = ({ id, title, publishedDate, author, active }) => (
  <tr className="even:bg-orange-100  hover:scale-100 hover:shadow-xl">
    <td className="py-2 px-4 border-b">{id}</td>
    <td className="py-2 px-4 border-b">{title}</td>
    <td className="py-2 px-4 border-b">{publishedDate}</td>
    <td className="py-2 px-4 border-b">{author}</td>
    <td className="py-2 px-4 border-b ">
      <div
        className={`mx-auto w-4 h-4 rounded-full ${
          active
            ? "bg-green-400 hover:bg-green-300"
            : "bg-red-400 hover:bg-red-300"
        }`}
      ></div>
    </td>
    <td className="border-b flex justify-center space-x-2 w-full py-5">
      <Link to={`/articles/${id}`}>
        <PiPencilSimpleBold className="transition-all hover:scale-150 hover:text-orange-500" />
      </Link>
      <PiTrashBold className="transition-all hover:scale-150 hover:text-orange-500" />
    </td>
  </tr>
);

const ArticleTable = ({ tableData }) => {
  return (
    <div className="w-full">
      <div className="mx-auto">
        <div className="flex justify-between">
          <h2 className="text-orange-600 py-5 transition-all">
            Recent Articles
          </h2>
          <PiPencilSimpleBold className="transition-all hover:scale-105 text-orange-600" />
        </div>
        <table className="w-full table-auto rounded-lg mx-auto text-xs">
          <thead className="text-xs capitalize bg-orange-500">
            <tr>
              <th className="py-2 px-4 border-b">S. No.</th>
              <th className="py-2 px-4 border-b">Article</th>
              <th className="py-2 px-4 border-b">Published on</th>
              <th className="py-2 px-4 border-b">Author</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {tableData.map((row, index) => (
              <ArticleRow key={row.id} {...row} id={index + 1} />
            ))}
          </tbody>
        </table>
        <div className="flex py-5 justify-center w-full space-x-3">
          <button className="text-orange-700 font-semibold text-xs rounded px-7 py-3 border-2 border-orange-700 hover:bg-orange-700 hover:text-orange-100 transition-all w-24">
            Previous
          </button>
          <button className="text-orange-500 font-semibold text-xs rounded px-7 py-3 border-2 border-orange-600 hover:bg-orange-500 hover:text-orange-100 transition-all w-24">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleTable;
