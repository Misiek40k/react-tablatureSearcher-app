import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';
import Icon from '../../common/Icon/Icon';

import styles from './Search.module.scss';

const Search = ({ buttons: { search, cancel }, placeholder }) => {
  const [value, setValue] = useState('');
  const [visibleButtons, makeVisible] = useState(false);

  return (
    <div className={styles.component}>
      <input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          event.target.value.length ? makeVisible(true) : makeVisible(false);
        }}
      />
      <div className={styles.buttons + (visibleButtons ? ` ${styles.buttonsShown}` : '')}>
        <Button >
          <Icon name={search.ico} />
          <span>{search.txt}</span>
        </Button>
        <Button variant={cancel.variant}>
          <Icon name={cancel.ico} />
          <span>{cancel.txt}</span>
        </Button>
      </div>
    </div>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  buttons: PropTypes.object,
  search: PropTypes.string,
  cancel: PropTypes.string,
};


export default Search;
