import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Postsform from './components/Postsform';
import {Provider}  from 'react-redux';
import {createStore,applyMiddlewere} from 'redux';

const store= createStore (()=> [],{}, applyMiddlewere());
class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <div className ="App">
              < header className = "App-header" >
                  < img src = {logo} className = "App-logo"alt = "logo" / >
                  < h1 className = "App-title" > Welcome to React < /h1>
             </header>
              <Postsform/>
              <Posts/>
        </div>
        </Provider>
    );
  }
}

export default App;
