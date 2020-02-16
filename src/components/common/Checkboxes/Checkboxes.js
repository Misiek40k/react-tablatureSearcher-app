import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../../data/dataStore';

import Icon from '../Icon/Icon';

import styles from './Checkboxes.module.scss';

const Checkboxes = ({ label }) => {
  return (
    <label className={styles.component}>
      <input
        className={styles.input}
        type='checkbox'
      />
      {<Icon name={settings.logoIcon} />}
      <span>{label}</span>
    </label>
  );
};

Checkboxes.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Checkboxes;
