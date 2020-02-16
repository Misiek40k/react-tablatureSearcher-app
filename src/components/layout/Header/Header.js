import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { settings } from '../../../data/dataStore';

import Icon from '../../common/Icon/Icon';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.component}>
    <Grid>
      <Row>
        <Col xs>
          <div className={styles.logo}>
            <Icon name={settings.logoIcon} />
            <span className={styles.name}>{settings.header.name}</span>
          </div>
        </Col>
      </Row>
    </Grid>
  </header>
);

export default Header;
