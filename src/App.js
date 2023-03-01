import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Pages/Header";

function App() {
  return (
    <>
    <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
