import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';
import Icon from '../../common/Icon/Icon';

import styles from './Search.module.scss';

export default class Search extends Component {
  static propTypes = {
    text: PropTypes.string,
    buttons: PropTypes.object,
    search: PropTypes.string,
    cancel: PropTypes.string,
  }

  static defaultProps = {
    text: 'Search for tablature...',
  }

  state = {
    value: '',
    visibleButtons: false,
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0,
    });
  }

  render() {
    const { buttons: { search, cancel } } = this.props;

    return (
      <div className={styles.component}>
        <input
          type='text'
          placeholder={this.props.text}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className={styles.buttons + (this.state.visibleButtons ? ` ${styles.buttonsShown}` : '')}>
          <Button onClick={this.handleOK}>
            <Icon name={search.ico} />
            <span>{search.txt}</span>
          </Button>
          <Button onClick={this.handleCancel} variant={cancel.variant}>
            <Icon name={cancel.ico} />
            <span>{cancel.txt}</span>
          </Button>
        </div>
      </div>
    );
  }
}
