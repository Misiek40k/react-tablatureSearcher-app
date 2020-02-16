import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { settings } from '../../../data/dataStore';

import Title from '../../common/Title/Title';

const List = ({ apiData }) => {
  const data = settings.list;

  return (
    <Fragment>
      <Row>
        <Col sm={12} md={8} lg={6} mdOffset={2} lgOffset={3}>
          <Title subtitle={`${data.title} ${apiData.length}`} />
        </Col>
      </Row>
      <Row>

      </Row>
    </Fragment>
  );
};

List.propTypes = {
  searchValue: PropTypes.string,
  apiData: PropTypes.array,
};

export default List;
