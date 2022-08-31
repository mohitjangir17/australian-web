import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import AllBlogs from "./components/AllBlogs";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SupportEngine from "./components/SupportEngine";
// import Comm100 from "./components/Comm100/Comm100Fetch"; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/blogs">
            <AllBlogs />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
