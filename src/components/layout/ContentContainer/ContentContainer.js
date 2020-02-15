import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import PageTitle from '../PageTitle/PageTitle';

import styles from './ContentContainer.module.scss';

const ContentContainer = ({ title, subtitle }) => (
  <section className={styles.component}>
    <Grid>
      <Row middle="md">
        <Col md={12} lg={6}>
          <PageTitle title={title} subtitle={subtitle} />
        </Col>
        <Col md={12} lg={4} lgOffset={2}>
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
