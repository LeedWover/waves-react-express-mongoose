import React, { useState, useEffect } from "react";
import { Switch, Route} from 'react-router-dom';
import './App.css';
import axios from "axios";

import Layout from './components/hoc/Layout';
import Home from './components/Home';

export default () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  )
};
