import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';

import styles from './ListItem.module.scss';

const ListItem = props => {
  return (
    <Col sm={12} md={8} lg={6} mdOffset={2} lgOffset={3}>
      lista
    </Col>
  );
};

ListItem.propTypes = {

};

export default ListItem;
