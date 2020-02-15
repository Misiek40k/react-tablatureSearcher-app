import React, { Component, Fragment } from 'react';

import Header from './components/layout/Header/Header';
import ContentContainer from './components/layout/ContentContainer/ContentContainer';

export default class App extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <ContentContainer />
        </main>
      </Fragment>
    );
  }
}
