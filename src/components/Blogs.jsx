import "../styles/blogs.css";
import codingguy from "./resources/coding-g03bcc4bcb_1280.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Blogs() {
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
    <div className="Blogs">
      <span className="spanTestimonials">Blogs</span>
      <h2>Our Latest Blogs</h2>
      <div className="blogsContainer">
        {/* <Link className="Link" to="/blogs">
          {" "}
          <div className="blogsList">
            <img src={codingguy} alt="blogImg" />
            <h3>Build your Dream Software & Engineering Career</h3>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <div className="blogInfo">
              <p>Date</p>
            </div>
          </div>
        </Link>
        <Link className="Link" to="/blogs">
          {" "}
          <div className="blogsList">
            <img src={codingguy} alt="blogImg" />
            <h3>Build your Dream Software & Engineering Career</h3>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <div className="blogInfo">
              <p>Date</p>
            </div>
          </div>
        </Link>
        <Link className="Link" to="/blogs">
          {" "}
          <div className="blogsList">
            <img src={codingguy} alt="blogImg" />
            <h3>Build your Dream Software & Engineering Career</h3>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <div className="blogInfo">
              <p>Date</p>
            </div>
          </div>
        </Link>
        <Link className="Link" to="/blogs">
          {" "}
          <div className="blogsList">
            <img src={codingguy} alt="blogImg" />
            <h3>Build your Dream Software & Engineering Career</h3>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <div className="blogInfo">
              <p>Date</p>
            </div>
          </div>
        </Link> */}

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
  );
}
export default Blogs;
