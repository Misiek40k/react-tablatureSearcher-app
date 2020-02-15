import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Icon from '../Icon/Icon';

import styles from './Header.module.scss';

const Header = ({ name, icon }) => (
  <header className={styles.component}>
    <Grid>
      <Row>
        <Col xs>
          <div className={styles.logo}>
            <Icon name={icon} />
            <span className={styles.name}>{name}</span>
          </div>
        </Col>
      </Row>
    </Grid>
  </header>
);


Header.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
};

export default Header;
