import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProvideAuth } from './context/ProvideAuth';
import PrivateRoute from './components/privateroute/PrivateRoute';
import Layout from './views/layout/Layout';
import Home from './views/home/Home';
import Login from './views/auth/Login';

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
          </Switch>
        </Layout>
      </Router>
    </ProvideAuth>
  );
}

export default App;
