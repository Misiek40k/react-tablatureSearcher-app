import React, { Component, Fragment } from 'react';

import Header from './components/layout/Header/Header';
import ContentContainer from './components/layout/ContentContainer/ContentContainer';

export default class App extends Component {

  state = {
    header: {
      name: 'Tablature searcher',
      icon: 'guitar',
    },
    content: {
      title: 'Search',
      subtitle: 'and play your best songs',
    },
  }

  render() {
    return (
      <Fragment>
        <Header {...this.state.header} />
        <main>
          <ContentContainer {...this.state.content} />
        </main>
      </Fragment>
    );
  }
}
