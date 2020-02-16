import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../../data/dataStore';
import { convertTabType } from '../../../utils/convertTabType';

import Icon from '../Icon/Icon';

import styles from './TabType.module.scss';

const TabType = ({ tabType }) => {
  return (
    <span className={styles.component}><Icon name={settings.logoIcon} />{convertTabType(tabType)}</span>
  );
};

TabType.propTypes = {
  tabType: PropTypes.string.isRequired,
};

export default TabType;
