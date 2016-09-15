import React from 'react';
import { Route } from 'react-router';
import Navbar from './components/Navbar';
import Home from './modules/Home-View/Home.container.js';
import Select from './modules/Select-View/Select.container.js';
import Edit from './modules/Edit-View/Edit.container.js';
import './App.css';

const App = () => (
  <Route component={ Navbar }>
    <Route path="/" component={ Home } />
    <Route path="select" component={ Select } />
    <Route path="edit" component={ Edit }>
      <Route path="addQuestion" />
    </Route>
    <Route path="student" component={ Home }/>
  </Route>
);

export default App;
