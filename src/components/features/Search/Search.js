import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';

import styles from './Search.module.scss';

export default class Search extends Component {
  static propTypes = {
    text: PropTypes.string,
    action: PropTypes.func,
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
    return (
      <div className={styles.component}>
        <input
          type='text'
          placeholder={this.props.text}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className={styles.buttons + (this.state.visibleButtons ? ` ${styles.buttonsShown}` : '')}>
          <Button onClick={this.handleOK}>OK</Button>
          <Button onClick={this.handleCancel} variant='danger'>cancel</Button>
        </div>
      </div>
    );
  }
}
