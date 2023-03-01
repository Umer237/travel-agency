import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer"

function App() {
  return (
<>
<Header/>
<Switch>
  <Route exact path="/" component={Home}/>
  <Redirect to='/'/>
</Switch>
<Footer/>
</>
  );
}

export default App;
