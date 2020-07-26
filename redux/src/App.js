import React from 'react';
import { ToastContainer } from 'react-toastify';
import './config/ReactotronConfig';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Copyright from './components/Copyright';
import Routes from './routes';
import GlobalStyle from './styles/global';
import store from './store';
import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <Routes />
        <Copyright />
      </Router>
    </Provider>
  );
}

export default App;
