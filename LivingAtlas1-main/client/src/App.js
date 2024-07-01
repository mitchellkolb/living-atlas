import './App.css';
import Header from './Header';
import Main from './Main';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Profile from './Profile';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';



function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  return (
    <Router data-testid="test-app">



      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <Home isLoggedIn={isLoggedIn} username={username} email={email} {...props} />}
        />

        <Route
          path="/about"
          render={(routeProps) => (
            <About isLoggedIn={isLoggedIn} {...routeProps} />
          )}
        />

        <Route
          path="/contact"
          render={(routeProps) => (
            <Contact isLoggedIn={isLoggedIn} {...routeProps} />
          )}
        />

        <Route path="/contact" component={Contact} isLoggedIn={isLoggedIn} />
        <Route
          path="/login"
          render={(props) => (
            <Login
              email={email} setEmail={setEmail}
              password={password} setPassword={setPassword}
              message={message} setMessage={setMessage}
              isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
              username={username} setUsername={setUsername}
              {...props}
            />
          )}
        />

        <Route
          path="/profile"
          render={(props) => (
            <Profile
              email={email} setEmail={setEmail}
              password={password} setPassword={setPassword}
              message={message} setMessage={setMessage}
              isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
              username={username} setUsername={setUsername}
              {...props}
            />
          )}
        />






      </Switch>





    </Router >

  );
}




export default App;
