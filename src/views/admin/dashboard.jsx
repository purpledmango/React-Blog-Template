import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SideNav from "./SideNav";
import Hud from "./Hud";
import ArticleTable from "./ArticleTable";

const Dashboard = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [articleData, setArticleData] = useState([]);
  // Access userData from location.state
  const userData = location.state?.userData;
  console.log("Location State offfers these -->" + userData);

  useEffect(() => {
    // Check if user data exists or navigate to "/admin"
    if (!userData) {
      navigate("/admin");
    } else {
      const authorId = location.state.userData.author;
      try {
        axios.post(`http://api.mroadn.com/arcticle/author/all`).then((res) => {
          const authorsArticle = res.data;
          setArticleData(authorsArticle);
          console.log(
            "All Articles related to this author are:",
            authorsArticle
          );
        });
      } catch (error) {
        console.log(`Error faced while Fetching the related articles ${error}`);
      }
    }
  }, [userData, navigate]);

  return (
    <>
      <section className="w-screen grid grid-cols-10 bg-white">
        <SideNav />
        <div className="mx-5 col-span-8">
          <Hud
            img="https://picsum.photos/200"
            authorName={userData?.email || "/admin"} // Use a default route
          />
          <div className="w-full grid grid-cols-4 gap-4 px-4">
            {[
              { label: "Drafts", value: "5" },
              { label: "Published", value: "12" },
              { label: "Views", value: "12.K" },
              { label: "Active Articles", value: "46" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex text-xl space-x-6 justify-center items-center rounded-2xl bg-gray-200"
              >
                <h3>{item.label}</h3>
                <span className="bg-gray-100 px-8 py-3 rounded-2xl font-bold text-2xl">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center px-4">
            <ArticleTable tableData={articleData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
