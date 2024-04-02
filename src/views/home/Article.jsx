import Nav from "../../common/Nav";
import { useParams } from "react-router-dom";
import data from "../../posts.json";

const Article = () => {
  const { id } = useParams();
  console.log(`From post page the id is ${id}`);
  console.log(`From post page ${data[id]}`);
  const article = data;
  return (
    <>
      <Nav />
      <div className="my-5 w-full">
        <div className="w-full flex justify-evenly items-center tracking-wide lg:p-4 lg:m-5 sm:flex-none">
          <span className="uppercase text-xs">May 22, 2023</span>
          <span className="uppercase text-xs">Relationships</span>
          <span className="uppercase text-xs">
            BY,<span className="text-orange-400">{article.author}</span>
          </span>
        </div>
        <div className="grid lg:grid-cols-4">
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-2 p-5 lg:my-5">
            <h1 className="text-4xl py-5 lg:my-5">{article.content}</h1>
            <p>{/* Content goes here */}</p>
          </div>
          <div className="lg:col-span-1"></div>
        </div>
      </div>
      {/* If necessary, render MoreContent component here */}
    </>
  );
};

export default Article;
