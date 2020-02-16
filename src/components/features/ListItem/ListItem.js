import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { settings } from '../../../data/dataStore';

import styles from './ListItem.module.scss';

const ListItem = ({ title, artist: { name } }) => {
  return (

    <Col {...settings.col}>
      <div className={styles.component}>
        <Row>
          <Col md={6}>
            <h4 className={styles.name}>Song: {title}</h4>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <span className={styles.name}>Artist: {name}</span>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.object.isRequired,
  name: PropTypes.string,
};

export default ListItem;
