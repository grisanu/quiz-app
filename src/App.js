import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navbar from './components/Navbar';
import Home from './modules/Home-View/Home.container.js';
import Select from './modules/Select-View/Select.container.js';
import Edit from './modules/Edit-View/Edit.container.js';
import Question from './modules/Question-View/Question.container.js';
import Student from './modules/Student-View/Student.container.js';
import Submit from './modules/Submit-View/Submit.container.js';

import './styles/App.css';

const App = () => (
  <Route path="/" component={ Navbar }>
    <IndexRoute component={ Home } />
    <Route path="select" component={ Select } />
    <Route path="edit" component={ Edit } />
    <Route path="/edit/addQuestion" component={ Question } />
    <Route path="student" component={ Student } />
    <Route path="/student/submit" component={ Submit } />
  </Route>
);

export default App;
