import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { settings } from '../../../data/dataStore';

import TabType from '../../common/TabType/TabType';

import styles from './ListItem.module.scss';

const ListItem = ({ id, title, artist: { name }, tabTypes }) => {
  return (

    <Col {...settings.col}>
      <div className={styles.component}>
        <a href={`https://www.songsterr.com/a/wa/song?id=${id}`}
          target='blank'
          className={styles.link}
        >
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
        </a>
      </div>
    </Col>
  );
};

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.object.isRequired,
  name: PropTypes.string,
  tabTypes: PropTypes.array.isRequired,
};

export default ListItem;
