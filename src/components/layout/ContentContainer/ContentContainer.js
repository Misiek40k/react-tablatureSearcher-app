import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { settings } from '../../../data/dataStore';

import Title from '../../common/Title/Title';
import Search from '../../features/Search/Search';

import styles from './ContentContainer.module.scss';
import List from '../../features/List/List';

const ContentContainer = () => {
  const data = { ...settings.contentContainer };

  const [value, setValue] = useState('');
  const [visibleButtons, makeVisible] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [checked, setChecked] = useState({
    player: true,
    guitar: true,
    chords: true,
    bass: true,
  });

  const fetchData = (value) => {
    fetch(`${data.fetchReq}${value}`)
      .then(res => res.json())
      .then(
        (result) => {
          setApiData(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <section className={styles.component}>
      <Grid>
        <Row middle="md">
          <Col {...settings.col}>
            <Title {...data.pageTitle} />
          </Col>
        </Row>
        <Row middle="md">
          <Col {...settings.col}>
            <Search
              value={value}
              setValue={setValue}
              visibleButtons={visibleButtons}
              makeVisible={makeVisible}
              fetchData={fetchData}
              checked={checked}
              setChecked={setChecked}
            />
          </Col>
        </Row>
        {apiData.length > 0 &&
          <List apiData={apiData} ckecked={checked} />
        }
      </Grid>
    </section>
  );
};

export default ContentContainer;
