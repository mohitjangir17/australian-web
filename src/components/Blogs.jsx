import "./components.css";
import codingguy from "./resources/coding-g03bcc4bcb_1280.jpg";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <div className="Blogs">
      <span className="spanTestimonials">Blogs</span>
      <h2>Our Latest Blogs</h2>
      <div className="blogsContainer">
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
              <p>Admin</p>
              <p>Comments</p>
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
              <p>Admin</p>
              <p>Comments</p>
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
              <p>Admin</p>
              <p>Comments</p>
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
              <p>Admin</p>
              <p>Comments</p>
              <p>Date</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Blogs;
