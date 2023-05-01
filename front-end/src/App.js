import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import MainNavigation from './components/Navigation/MainNavigation';
import { AuthContext } from './context/auth-context';
import { useAuth } from './hooks/auth-hook';
import LoadingSpinner from './components/UIElements/LoadingSpinner';

const Home = React.lazy(() => import('./pages/Home/Home'));
const Lz77 = React.lazy(() => import('./pages/Lz77/Lz77'));
const Lzw = React.lazy(() => import('./pages/Lzw/Lzw'));
const Auth = React.lazy(() => import('./pages/Auth/Auth'));
const About = React.lazy(() => import('./pages/About/About'));

function App() {
  const { token, login, logout, userId, userName } = useAuth();

  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/lz77" exact>
          <Lz77 />
        </Route>
        <Route path="/lzw" exact>
          <Lzw />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userName: userName,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Suspense
            fallback={
              <div className="center">
                <LoadingSpinner />
              </div>
            }
          >
            {routes}
          </Suspense>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
