import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ClassesContainer from "./ClassesContainer";
import Home from "./Home";
import AboutUs from "./AboutUs";
import courseData from "../src/db.json";

class App extends React.Component {
  state = {
    classes: courseData
  }
  render () {
    console.log(this.state.classes.classes)
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/classes">Classes</Link>
              </li>
              <li>
                <Link to="/about_us">About Us</Link>
              </li>
            </ul>
          </nav>
  
          <Switch>
            <Route path="/classes">
              <ClassesContainer classes={this.state.classes.classes}/>
            </Route>
            <Route path="/about_us">
              <AboutUs />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;