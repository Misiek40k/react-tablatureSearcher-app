import React, { Component, Fragment } from 'react';
import Header from './components/Header/Header';

export default class App extends Component {

  state = {
    header: {
      name: 'Tablature searcher',
      icon: 'guitar',
    },
  }

  render() {
    return (
      <Fragment>
        <Header {...this.state.header} />
        <main>
          content
        </main>
      </Fragment>
    );
  }
}
