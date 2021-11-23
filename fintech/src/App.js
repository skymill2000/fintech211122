import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListExmaple from "./components/ListExmaple";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test" exact>
          <ListExmaple></ListExmaple>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
