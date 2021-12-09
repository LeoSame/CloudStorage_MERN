import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Registration from './components/Authorization/Registration';
import Login from './components/Authorization/Login';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './actions/user';
import Disk from './components/Disk/Disk';
import Profile from './components/Profile/Profile';
import './App.scss';

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
        {!isAuth ? (
          <Switch>
            <Route path='/registration' component={Registration} />
            <Route path='/login' component={Login} />
            <Redirect to='/login' />
          </Switch>
        ) : (
          <Switch>
            <Route exact path='/' component={Disk} />
            <Route exact path='/profile' component={Profile} />
            <Redirect to='/' />
          </Switch>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
