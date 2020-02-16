import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../../data/dataStore';

import Icon from '../Icon/Icon';

import styles from './Checkboxes.module.scss';

const Checkboxes = ({ label, checked, setChecked }) => {

  return (
    <label className={styles.component}>
      <input
        type='checkbox'
        checked={checked[label]}
        onChange={() => setChecked({ ...checked, [label]: !checked[label] })}
      />
      {<Icon name={settings.logoIcon} />}
      <span>{label}</span>
    </label>
  );
};

Checkboxes.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.object.isRequired,
  setChecked: PropTypes.func.isRequired,
};

export default Checkboxes;
