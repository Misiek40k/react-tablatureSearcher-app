import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../../data/dataStore';

import Icon from '../Icon/Icon';

import styles from './TabType.module.scss';

const TabType = ({ tabType }) => {

  const convertTabType = (tabType) => {
    switch (tabType) {
      case 'TEXT_GUITAR_TAB':
        return 'guitar';
      case 'CHORDS':
        return 'chords';
      case 'TEXT_BASS_TAB':
        return 'bass';
      default:
        return 'player';
    }
  };

  return (
    <span className={styles.component}><Icon name={settings.logoIcon} />{convertTabType(tabType)}</span>
  );
};

TabType.propTypes = {
  tabType: PropTypes.string.isRequired,
};

export default TabType;
