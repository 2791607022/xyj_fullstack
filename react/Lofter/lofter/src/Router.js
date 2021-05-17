import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
const RouterMap=()=>{
  return <Router>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/Home">
        <Home/>
      </Route>
      </Switch>
    </Router>
}

export default RouterMap