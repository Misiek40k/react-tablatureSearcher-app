import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { settings } from '../../../data/dataStore';

import Title from '../../common/Title/Title';
import ListItem from '../ListItem/ListItem';
import Pagination from '../../common/Pagination/Pagination';


const List = ({ filteredList }) => {
  const data = settings.list;

  const [activePage, setActivePage] = useState(0);
  const pageItems = data.pageItems;
  const pagesCount = Math.ceil(filteredList.length / pageItems);

  return (
    <Fragment>
      <Row>
        <Col {...settings.col}>
          <Title subtitle={`${data.title} ${filteredList.length}`} />
        </Col>
      </Row>
      <Row center="xs">
        <Col xs>
          <Pagination
            pagesCount={pagesCount}
            activePage={activePage}
            setActivePage={setActivePage} />
        </Col>
      </Row>
      <Row>
        {filteredList
          .slice(activePage * pageItems, (activePage + 1) * pageItems)
          .map(item => (
            <ListItem key={item.id} {...item} />
          ))}
      </Row>
    </Fragment>
  );
};

List.propTypes = {
  filteredList: PropTypes.array,
};

export default List;
