import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { settings } from '../../../data/dataStore';
import { convertTabType } from '../../../utils/convertTabType';

import Title from '../../common/Title/Title';
import ListItem from '../ListItem/ListItem';

const List = ({ apiData, checked }) => {
  const data = settings.list;

  const compareTabTypes = (item, checked) => {
    console.log(item.tabTypes[0]);
    if (checked[convertTabType(item.tabTypes[0])]) { return item; }
  };

  return (
    <Fragment>
      <Row>
        <Col {...settings.col}>
          <Title subtitle={`${data.title} ${apiData.length}`} />
        </Col>
      </Row>
      <Row>
        {apiData
          .filter(item => {
            return compareTabTypes(item, checked);
          })
          .map(item => (
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
