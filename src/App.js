import Home from "component/Home/Home";
import NotFound from "component/NotFound";
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const users = React.lazy(() => import('./component/users/index'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>


        <Switch>

          <Route exact path="/" component={Home} />

          <Route path="/user" component={users} />
          <Route component={NotFound} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

