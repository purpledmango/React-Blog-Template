import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import LargeTiledPost from "./LargeTile";
import SideBar from "./SideBar";

const LatestPost = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Declare and initialize currentPage using useState
  const itemsPerPage = 5;

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      setArticles(response.data);
    } catch (error) {
      console.error(error);
      setArticles([]);
    }
  };

  // Function to split articles into chunks of 5 articles each
  const chunkArticles = (arr, size) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  };

  const paginatedArticles = chunkArticles(articles, itemsPerPage);

  // Function to render the articles for the current page
  const renderArticlesForCurrentPage = () => {
    const currentItems = paginatedArticles[currentPage - 1];
    return currentItems.map((post) => (
      <LargeTiledPost
        key={post.id}
        title={post.title}
        content={post.content}
        author={post.author}
        thumbnail={post.thumbnail}
      />
    ));
  };

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return <></>;
};

export default LatestPost;
