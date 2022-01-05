import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './views/layout/Layout';
import Home from './views/home/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route>
            <Auth path="/login" />
          </Route>
          <PrivateRoute>
            <Home path="/guestbook" />
          </PrivateRoute>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
