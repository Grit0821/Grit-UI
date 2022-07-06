import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import DialogExample from './lib/dialog/dialog.example';
import IconExample from './lib/icon/icon.example';

ReactDOM.render(
  <Router>
    <div>
      <header>
        <div>Grit-UI</div>
      </header>
      <div>
        <aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/dialog">Dialog</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path="/icon" component={IconExample} />
          <Route path="/dialog" component={DialogExample} />
        </main>
      </div>
    </div>
  </Router>
  , document.querySelector('#root'));