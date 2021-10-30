import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../containers/about";
import Contact from "../containers/contact";
import ErrorPage from "../containers/error";
import Home from "../containers/home";
import Profile from "../containers/profile";
import Service from "../containers/services";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/service" component={Service} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}
