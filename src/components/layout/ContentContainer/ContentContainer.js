import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import PageTitle from '../PageTitle/PageTitle';
import Search from '../../features/Search/Search';

import styles from './ContentContainer.module.scss';

const ContentContainer = (props) => (
  <section className={styles.component}>
    <Grid>
      <Row middle="md">
        <Col sm={12} md={8} lg={6} mdOffset={2} lgOffset={3}>
          <PageTitle {...props} />
        </Col>
      </Row>
      <Row middle="md">
        <Col sm={12} md={8} lg={6} mdOffset={2} lgOffset={3}>
          <Search />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={8} lg={6} mdOffset={2} lgOffset={3}>
          list
        </Col>
      </Row>
    </Grid>
  </section>
);


ContentContainer.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default ContentContainer;
