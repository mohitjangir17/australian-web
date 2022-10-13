import HeaderOtherPages from "./HeaderOtherPages";
import uploadHeaderImage from "./resources/mainBanner.jpg";
function AllBlogs() {
  return (
    <div className="AllBlogs">
      <HeaderOtherPages headerImage={uploadHeaderImage} title="Our Blogs" />
      <h2>All Blogs</h2>
    </div>
  );
}
export default AllBlogs;
