import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ variant = '', ...otherProps }) => (
  <button
    {...otherProps}
    className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}
  />
);

Button.propTypes = {
  variant: PropTypes.node,
};

export default Button;