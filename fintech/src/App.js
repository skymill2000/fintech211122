import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AxiosExample from "./components/AxiosExample";
import TopHeader from "./components/common/TopHeader";
import ListExmaple from "./components/ListExmaple";
import AuthPage from "./pages/AuthPage";
import AuthResultPage from "./pages/AuthResultPage";
import NewApiPage from "./pages/NewApiPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test" exact>
          <ListExmaple></ListExmaple>
        </Route>
        <Route path="/test2" exact>
          <TopHeader title="테스트2 입니다."></TopHeader>
        </Route>
        <Route path="/axiosTest" exact>
          <AxiosExample></AxiosExample>
        </Route>
        <Route path="/news" exact>
          <NewApiPage></NewApiPage>
        </Route>
        <Route path="/" exact>
          <AuthPage></AuthPage>
        </Route>
        <Route path="/authResult" exact>
          <AuthResultPage></AuthResultPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
