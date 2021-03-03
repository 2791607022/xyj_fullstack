import * as React from 'react';
import {Route, Switch, HashRouter } from 'react-router-dom';
import { App } from './app2';
import {About, MeberPage} from "./components"
export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <div className="container-fluid">
        <Route path="/" component={App}/>
        {/* js switch 有且匹配一个 */}
        <Switch>
          <Route exact path="/" component={About}/>
          <Route path="/about" component={About}/>
          <Route path="/members" component={ MeberPage}/>
        </Switch>
      </div>
    </HashRouter>
  )
}