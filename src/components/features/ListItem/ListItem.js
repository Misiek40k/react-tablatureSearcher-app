import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { settings } from '../../../data/dataStore';

import TabType from '../../common/TabType/TabType';

import styles from './ListItem.module.scss';

const ListItem = ({ title, artist: { name }, tabTypes }) => {
  return (

    <Col {...settings.col}>
      <div className={styles.component}>
        <Row>
          <Col xs>
            <h4 className={styles.title}>{title}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs>
            <span className={styles.author}>By: <strong>{name}</strong></span>
          </Col>
        </Row>
        <Row>
          <Col xs>
            <div className={styles.tabTypes}>
              {tabTypes.map(item => (
                <TabType key={item} tabType={item} />
              ))}
            </div>
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
  tabTypes: PropTypes.array,
};

export default ListItem;
