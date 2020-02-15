import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { settings } from '../../../data/dataStore';

import PageTitle from '../PageTitle/PageTitle';
import Search from '../../features/Search/Search';

import styles from './ContentContainer.module.scss';

const ContentContainer = () => {
  const pageTitleData = settings.contentContainer.pageTitle;
  const searchData = settings.contentContainer.search;

  return (
    <section className={styles.component}>
      <Grid>
        <Row middle="md">
          <Col sm={12} md={8} lg={6} mdOffset={2} lgOffset={3}>
            <PageTitle {...pageTitleData} />
          </Col>
        </Row>
        <Row middle="md">
          <Col sm={12} md={8} lg={6} mdOffset={2} lgOffset={3}>
            <Search {...searchData} />
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
};

export default ContentContainer;
