import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { settings } from '../../../data/dataStore';

import Title from '../../common/Title/Title';
import ListItem from '../ListItem/ListItem';

import styles from './List.module.scss';

const List = ({ filteredList }) => {
  const data = settings.list;

  const [activePage, setActivePage] = useState(0);
  const pageItems = 25;
  const pagination = [];

  const pagesCount = Math.ceil(filteredList.length / pageItems);

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

  return (
    <Fragment>
      <Row>
        <Col {...settings.col}>
          <Title subtitle={`${data.title} ${filteredList.length}`} />
        </Col>
      </Row>
      <Row center="xs">
        <Col xs>
          <ul className={styles.list}>{pagination}</ul>
        </Col>
      </Row>
      <Row>
        {filteredList
          .slice(activePage * pageItems, (activePage + 1) * pageItems)
          .map(item => (
            <ListItem key={item.id} {...item} />
          ))}
      </Row>
    </Fragment>
  );
};

List.propTypes = {
  filteredList: PropTypes.array,
};

export default List;
