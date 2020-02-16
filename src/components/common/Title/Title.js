import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './Title.module.scss';

const PageTitle = ({ title, subtitle }) => (
  <Fragment>
    {title && <h1 className={styles.title}>{title}</h1>}
    {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
  </Fragment>

);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default PageTitle;
