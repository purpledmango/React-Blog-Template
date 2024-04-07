import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { getArticleApi } from "../services/homeApi";
import Spinner from "../components/Spinner";
import { formatDate } from "../utlis/dateFormatter";

const Article = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const fetchedArticle = await getArticleApi(slug);
        console.log("Fetched Article", fetchedArticle);
        setArticle(fetchedArticle.data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [slug]); // Include slug in the dependency array

  useEffect(() => {
    if (article) {
      document.title = `${article.title} • PatchedWeb`; // Update document title when article changes
    }
  }, [article]);

  if (!article) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <Nav />
      <div className="my-5 w-full">
        <div className="w-full flex justify-evenly items-center tracking-wide lg:p-4 lg:m-5 sm:flex-none">
          <span className="uppercase text-xs">{formatDate(article.createdAt) || "N/A"}</span>
          <span className="uppercase text-xs">{article.category || "N/A"}</span>
          <span className="uppercase text-xs">
            BY,<span className="text-orange-400">{article.author || "Unknown"}</span>
          </span>
        </div>
        <div className="grid lg:grid-cols-4">
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-2 p-5 lg:my-5">
            <h1 className="text-4xl py-5 lg:my-5">{article.title}</h1>
            {/* Render article content with HTML tags safely */}
            <div dangerouslySetInnerHTML={{ __html: article.content || "" }} />
          </div>
          <div className="lg:col-span-1"></div>
        </div>
      </div>
      {/* If necessary, render MoreContent component here */}
    </>
  );
};

export default Article;
