import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { settings } from '../../../data/dataStore';
import { convertTabType } from '../../../utils/convertTabType';

import Title from '../../common/Title/Title';
import ListItem from '../ListItem/ListItem';

const List = ({ apiData, checked }) => {
  const data = settings.list;

  const filteredList = apiData.filter(item => {
    const shouldBeVisible = item.tabTypes.every(type => {
      return checked[convertTabType(type)];
    });
    return shouldBeVisible;
  });

  return (
    <Fragment>
      <Row>
        <Col {...settings.col}>
          <Title subtitle={`${data.title} ${apiData.length}`} />
        </Col>
      </Row>
      <Row>
        {filteredList.map(item => (
          <ListItem key={item.id} {...item} />
        ))}
      </Row>
    </Fragment>
  );
};

List.propTypes = {
  apiData: PropTypes.array,
  checked: PropTypes.object,
};

export default List;
