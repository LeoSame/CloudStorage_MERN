import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Registration from './components/Authorization/Registration';
import Login from './components/Authorization/Login';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './actions/user';
import Disk from './components/Disk/Disk';
import Account from './components/Account/Account';
import './App.scss';
import Home from './components/Home/Home';

function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          {!isAuth ? (
            <Switch>
              <Route path='/registration' component={Registration} />
              <Route path='/login' component={Login} />
            </Switch>
          ) : (
            <Switch>
              <Route exact path='/files' component={Disk} />
              <Route exact path='/files/:folderId' component={Disk} />
              <Route exact path='/account' component={Account} />
            </Switch>
          )}
          <Redirect to='/' />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
