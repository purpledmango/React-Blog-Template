import React, { useEffect, useState } from "react";

import WSGI from "./WSGI";

import userData from "../../users.json";

// Define tabs
const tabs = ["Content", "Meta", "SEO"];

// Tab button component
const TabButton = ({ title, isActive, onClick }) => {
  const activeStyle = isActive
    ? "bg-orange-600 border-4 border-orange-500 rounded font-medium "
    : "border-none";

  return (
    <button
      onClick={onClick}
      className={`bg-orange-300 px-6 py-2 font-lg border-1 rounded hover:shadow-lg hover:scale-100 border-gray-600 ${activeStyle}`}
    >
      {title}
    </button>
  );
};

// WYSIWYG Editor component

// Editor component with WYSIWYG Editor and author selection
const Editor = ({ content, setContent, handleAuthorSelect, authors }) => {
  return (
    <div className="w-full">
      <WSGI value={content} setValue={setContent} />
    </div>
  );
};

// Meta component
const Meta = () => {
  return (
    <div className="w-full p-5">
      <input className="" placeholder="Meta Content" />
    </div>
  );
};

// SEO component
const SEO = () => {
  return (
    <div className="w-full p-5">
      <input className="" placeholder="SEO Tools" />
    </div>
  );
};

// CMS (Content Management System) component
const CMS = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [content, setContent] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const authors = userData; // Load the authors data from users.json

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleAuthorSelect = (event) => {
    const selectedAuthorId = parseInt(event.target.value, 10);
    const selectedAuthor = authors.find(
      (author) => author.id === selectedAuthorId
    );
    setSelectedAuthor(selectedAuthor);
  };

  const tabButtons = tabs.map((tab) => (
    <TabButton
      key={tab}
      title={tab}
      isActive={tab === activeTab}
      onClick={() => handleTabClick(tab)}
    />
  ));

  const PostInfo = ({ handleAuthorSelect }) => {
    const [postDate, setPostDate] = useState("");
    const authors = userData; // Load the authors data from users.json

    useEffect(() => {
      const today = new Date().toISOString().split("T")[0];
      setPostDate(today);
    }, []);

    // Initialize selectedAuthor state with the default author
    const [selectedAuthor, setSelectedAuthor] = useState(authors[0]);

    // Set the initial selected author based on the default author
    useEffect(() => {
      setSelectedAuthor(authors[0]);
    }, [authors]);

    return (
      <div className="col-span-2 flex flex-col items-center border border-orange-900 rounded p-2 my-2">
        <h3 className="pb-2">Author </h3>
        <select
          onChange={handleAuthorSelect}
          value={selectedAuthor.id}
          className="px-4 py-2 border-orange-900 border-2 rounded "
        >
          {authors.map((author) => (
            <option key={author.id} value={author.id} data-image={author.image}>
              {author.name}
            </option>
          ))}
        </select>
        <div className="flex space-x-2 py-3 my-2">
          <span>Date</span>
          <input
            type="date"
            value={postDate}
            onChange={(e) => {
              setPostDate(e.target.value);
            }}
            className="border-orange-900 border-2 rounded"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="px-2 py-6 border-2 rounded h-5/6">
      <div className="flex pb-6 space-x-3 w-full justify-start bg-white ">
        {tabButtons}
      </div>
      <div className="w-full my-4">
        <input className="w-full border-2 rounded p-2" placeholder="Title" />
      </div>
      <div className="mb-2 h-auto grid grid-cols-10 gap-2">
        <div className="col-span-8">
          {/* Render different tabs */}
          {activeTab === "Content" && (
            <Editor
              value={content}
              setValue={setContent}
              handleAuthorSelect={handleAuthorSelect}
              authors={authors}
            />
          )}
          {activeTab === "Meta" && <Meta />}
          {activeTab === "SEO" && <SEO />}
        </div>
        <PostInfo handleAuthorSelect={handleAuthorSelect} />
      </div>
      {/* Additional tabs can be added with corresponding components */}
    </div>
  );
};

export default CMS;
