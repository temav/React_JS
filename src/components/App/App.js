import React, { PureComponent } from 'react';
import { Switch, withRouter, Link, Route, Redirect } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';
import Login from '../Login';
import Public from '../Public';
import './App.css';
export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <div>
            <nav>
            <Link to="/">Главная</Link>
            <Link to="/login">Войти</Link>
            <Link to="/private">Секретная страница</Link>
            </nav>
        </div>
        <Switch>
          <Route exact path="/" component={Public} />
          <Route path="/login" component={Login} />
          <Redirect from="/private" to="/login" />    
        </Switch>
      </AuthorizeProvider>
    );
  }
}

// это важно!
// необходимо использовать этот хок(withRouter), потому что при использовании нескольких контекстов
// реакт-роутер теряет свой контекст. Причина — использование старого апи.
export default withRouter(App);
