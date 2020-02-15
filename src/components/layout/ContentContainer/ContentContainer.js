import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { settings } from '../../../data/dataStore';

import PageTitle from '../PageTitle/PageTitle';
import Search from '../../features/Search/Search';

import styles from './ContentContainer.module.scss';
import List from '../../features/List/List';

const ContentContainer = () => {
  const data = { ...settings.contentContainer };

  const [value, setValue] = useState('');
  const [visibleButtons, makeVisible] = useState(false);
  const [apiData, setApiData] = useState([]);

  const fetchData = (value) => {
    fetch(`http://www.songsterr.com/a/ra/songs.json?pattern=${value}`)
      .then(res => res.json())
      .then(
        (result) => {
          setApiData(result);
        },
        (error) => {
          console.log('fail');
        }
      );
  };

  return (
    <section className={styles.component}>
      <Grid>
        <Row middle="md">
          <Col sm={12} md={8} lg={6} mdOffset={2} lgOffset={3}>
            <PageTitle {...data.pageTitle} />
          </Col>
        </Row>
        <Row middle="md">
          <Col sm={12} md={8} lg={6} mdOffset={2} lgOffset={3}>
            <Search {...data.search}
              value={value}
              setValue={setValue}
              visibleButtons={visibleButtons}
              makeVisible={makeVisible}
              fetchData={fetchData}
            />
          </Col>
        </Row>
        {apiData.length > 0 && (<Row>
          <Col sm={12} md={8} lg={6} mdOffset={2} lgOffset={3}>
            <List searchValue={value} apiData={apiData} />
          </Col>
        </Row>)}
      </Grid>
    </section>
  );
};

export default ContentContainer;
