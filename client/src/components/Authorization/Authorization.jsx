import React from 'react';
import { NavLink, Route, Switch, useLocation } from 'react-router-dom';
import Login from './Forms/Login';
import Registration from './Forms/Registration';
import styles from './Authorization.module.scss';

const Authorization = () => {
  const location = useLocation();
  const tabsArr = [
    { path: '/registration', name: 'Реєстрація' },
    { path: '/login', name: 'Вхід' },
  ];
  const currentTab = location.pathname;

  const tabs = tabsArr.map(tab => {
    return (
      <NavLink key={tab.path} to={tab.path} className={`${styles.tab} ${currentTab === tab.path && styles.active}`}>
        {tab.name}
      </NavLink>
    );
  });

  return (
    <div className={styles.layout}>
      <div className={styles.authorization}>
        <div className={styles.tabs}>{tabs}</div>

        <Switch>
          <Route path='/registration' component={Registration} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </div>
  );
};

export default Authorization;
