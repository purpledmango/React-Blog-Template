import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleApi } from "../services/homeApi";
import Spinner from "../components/Spinner";
import { formatDate } from "../utlis/dateFormatter";
import { HOST_NAME } from "../constants/hosts";
import { formatAuthorName } from "../utlis/authorNames";

const Article = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [authorName, setAuthorName] = useState("Unknown");

  const fetchArticleData = async () => {
    try {
      const fetchedArticle = await getArticleApi(slug);
      console.log("Fetched Article", fetchedArticle);
      setArticle(fetchedArticle.data);
    } catch (error) {
      console.error("Error fetching article:", error);
    }
  };

  useEffect(() => {
    fetchArticleData();
  }, [slug]);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} • PatchedWeb`;

      const fetchAuthorName = async () => {
        try {
          const name = await formatAuthorName(article.author);
          setAuthorName(name);
        } catch (error) {
          console.error("Error fetching author name:", error);
        }
      };

      fetchAuthorName();
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
    <div className="my-5 w-full">
      <div className="w-full flex justify-evenly items-center tracking-wide lg:p-4 lg:m-5 sm:flex-none">
        <span className="uppercase text-xs">{formatDate(article.createdAt) || "N/A"}</span>
        <span className="uppercase text-xs">{article.category || "N/A"}</span>
        <span className="uppercase text-xs">
          BY,<span className="text-orange-400">{authorName}</span>
        </span>
      </div>
      <div className="grid lg:grid-cols-4">
        {/* for banners ord ads */}
        <div className="lg:col-span-1"></div>
        <div className="lg:col-span-2 p-5 lg:my-5">
          <h1 className="text-4xl py-5 lg:my-5">{article.title}</h1>
          {/* Render article content with HTML tags safely */}
          <img
            src={`${HOST_NAME}/${article.thumbnail.path}`}
            className="w-full h-[300px] lg:h-[480px] xl:h-[650px] object-contain rounded-xl"
            alt={article.thumbnail.filename}
          />
          <p id="content" dangerouslySetInnerHTML={{ __html: article.content || "" }} />
        </div>
        <div className="lg:col-span-1"></div>
      </div>
    </div>
  );
};

export default Article;
