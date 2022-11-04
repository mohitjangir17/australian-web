import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderOtherPages from "./HeaderOtherPages";
import codingguy from "./resources/coding-g03bcc4bcb_1280.jpg";
import uploadHeaderImage from "./resources/mainBanner.jpg";
function AllBlogs() {
  const [blogData, setBlogsData] = useState([
    {
      id: 1,
      title: "Blog 1",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      date: "30-12-2022",
      thumbnail: codingguy,
    },
    {
      id: 2,
      title: "Blog 2",
      description:
        "A small river named Duden flows by their place and  supplies it with the necessary regelialia.",
      date: "30-12-2022",
      thumbnail: codingguy,
    },
    {
      id: 3,
      title: "Blog 3",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      date: "30-12-2022",
      thumbnail: codingguy,
    },
    {
      id: 4,
      title: "Blog 4",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      date: "30-12-2022",
      thumbnail: codingguy,
    },
  ]);
  return (
    <>
      <HeaderOtherPages headerImage={uploadHeaderImage} title="Our Blogs" />
      <div className="AllBlogs">
        <div className="blogsContainer">
          {blogData.map((blog) => (
            <Link key={blog.id} className="Link" to="/blogs/">
              {" "}
              <div className="blogsList">
                <img src={blog.thumbnail} alt="blogImg" />
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <div className="blogInfo">
                  <p>{blog.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
export default AllBlogs;
