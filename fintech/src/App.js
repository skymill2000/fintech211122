import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AxiosExample from "./components/AxiosExample";
import TopHeader from "./components/common/TopHeader";
import ListExmaple from "./components/ListExmaple";

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

        {/* test3 추가 해주세요 ! TopHeader에 test3 입니다 내용 출력 */}
      </Switch>
    </Router>
  );
}

export default App;
