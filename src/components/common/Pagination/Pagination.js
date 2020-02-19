import React from 'react';
import PropTypes from 'prop-types';

import styles from './Pagination.module.scss';

const Pagination = ({ pagesCount, activePage, setActivePage }) => {
  const pagination = [];

  for (let i = 0; i < pagesCount; i++) {
    pagination.push(
      <li className={styles.list} key={i}>
        <span
          onClick={() => setActivePage(i)}
          className={i === activePage ? styles.active : null}
        >
          {`page ${i}`}
        </span>
      </li>
    );
  }


  return <ul className={styles.list}>{pagination}</ul>;
};

Pagination.propTypes = {
  pagesCount: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  setActivePage: PropTypes.func.isRequired,
};

export default Pagination;
