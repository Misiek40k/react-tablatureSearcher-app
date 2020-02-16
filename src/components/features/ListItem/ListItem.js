import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { settings } from '../../../data/dataStore';

import styles from './ListItem.module.scss';

const ListItem = props => {
  return (
    <Col {...settings.col}>
      lista
    </Col>
  );
};

ListItem.propTypes = {

};

export default ListItem;
