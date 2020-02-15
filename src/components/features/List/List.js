import React from 'react';
import PropTypes from 'prop-types';

const List = ({ searchValue }) => {
  return (
    <div>
      List {searchValue}
    </div>
  );
};

List.propTypes = {
  searchValue: PropTypes.string,
};

export default List;
