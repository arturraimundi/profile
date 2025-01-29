import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetail from "./MovieDetail"; // A nova página de detalhes
import App from "./App"; // A página principal

function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
    </Router>
  );
}

export default Main;
