import React from 'react';
import { render } from 'react-dom';
// import 'normalize.css';
import './index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Theme

// Redux
import { Provider } from 'react-redux';
import store from 'state/store/store';
import theme from './theme/theme';

// Pages
import PageNotFound from './routes/PageNotFound/PageNotFound';
import Profile from './routes/Profile/Profile';
import Help from './routes/Help/Help';

// Components
import Sidebar from './components/Sidebar/Sidebar';

const rootElement = document.getElementById('root');
const root = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <div className="root-div">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Profile} />
            <Route exact path="/help" component={Help} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  </Provider>
);

render(root, rootElement);
