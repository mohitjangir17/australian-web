import Footer from "./components/Footer";
import AllBlogs from "./components/AllBlogs";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Upload from "./components/Uploads";
import ContactUs from "./components/Contact";
// import Comm100 from "./components/Comm100/Comm100Fetch"; 

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/sua">
            <Home />
          </Route>
          <Route exact path="/blogs">

            <AllBlogs />
          </Route>
          <Route exact path="/contact">

            <ContactUs />
          </Route>
          <Route exact path="/upload">

            <Upload />
          </Route>
        </Switch>
        <Footer />
        {/* <Comm100 /> */}
      </div>
    </Router>
  );
}

export default App;
