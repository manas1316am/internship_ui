import "./App.css";
import "./global.css";
import Home from "./components/Home";
import Post from "./components/pages/Post";
import Error from "./components/pages/Error";


import {Route, Switch} from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/posts' component={Post} />
        <Route component={Error} />
      </Switch>

      {/* <Home />
      <Post /> */}
    </>
  );
}

export default App;
