import { BrowserRouter, Switch, Route } from "react-router-dom";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Navigation from "./Pages/Shared/Navigation/Navigation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
