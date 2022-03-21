import React from 'react';
import './Page.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import FindUs from './pages/FindUs';
import More from './pages/More';
import EdhMenu from './pages/EldoradoMenu';
import RosevilleMenu from './pages/RosevilleMenu';

import {
  Switch,
  Route
} from "react-router-dom";

const Page = ( props ) => (
  <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/menu' exact component={Menu} />
      <Route path='/findus' component={FindUs} />
      <Route path='/more' component={More} />
      <Route path='/eldoradohills' component={EdhMenu} />
      <Route path='/roseville' component={RosevilleMenu} />
  </Switch>
);

export default Page;
