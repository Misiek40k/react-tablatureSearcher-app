import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../../data/dataStore';

import Button from '../../common/Button/Button';
import Icon from '../../common/Icon/Icon';
import Checkboxes from '../../common/Checkboxes/Checkboxes';

import styles from './Search.module.scss';

const Search = ({ makeVisible, visibleButtons, setValue, value, fetchData, checked, setChecked }) => {
  const data = { ...settings.contentContainer.search };

  return (
    <div className={styles.component}>
      <input
        type='text'
        placeholder={data.placeholder}
        value={value}
        onChange={event => {
          setValue(event.target.value);
          event.target.value.length ? makeVisible(true) : makeVisible(false);
        }}
      />
      <div className={styles.checkboxes}>
        {data.checkboxes.map(item => (
          <Checkboxes key={item} label={item} checked={checked} setChecked={setChecked} />
        ))}
      </div>
      <div className={styles.buttons + (visibleButtons ? ` ${styles.buttonsShown}` : '')}>
        <Button onClick={() => fetchData(value)}>
          <Icon name={data.buttons.search.ico} />
          <span>{data.buttons.search.txt}</span>
        </Button>
        <Button
          variant={data.buttons.cancel.variant}
          onClick={() => {
            setValue('');
            makeVisible(false);
          }}
        >
          <Icon name={data.buttons.cancel.ico} />
          <span>{data.buttons.cancel.txt}</span>
        </Button>
      </div>
    </div>
  );
};

Search.propTypes = {
  makeVisible: PropTypes.func,
  visibleButtons: PropTypes.bool,
  setValue: PropTypes.func,
  value: PropTypes.string,
  fetchData: PropTypes.func,
  checked: PropTypes.object,
  setChecked: PropTypes.func,
};


export default Search;
