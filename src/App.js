import "./App.css";
import "./components/components.css"
import Header from "./components/Header";
import Benifits from "./components/Benifits";
import Figures from "./components/Figures";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
// import SupportEngine from "./components/SupportEngine";
// import Comm100 from "./components/Comm100/Comm100Fetch";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Comm100 /> */}
      <Benifits />
      <Figures />
      <Courses />
      <Blogs />
      <Testimonials />
      <Footer />
      {/* <SupportEngine /> */}
    </div>
  );
}

export default App;
