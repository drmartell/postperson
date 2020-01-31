import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ historyItem }) => (
  <>
    <span>{historyItem.verb}</span>
    <span>{historyItem.url}</span>
  </>
);

HistoryItem.propTypes = {
  historyItem: PropTypes.shape({
    url: PropTypes.string.isRequired,
    verb: PropTypes.string.isRequired,
    requestBody: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
    token: PropTypes.string
  }).isRequired
};

export default HistoryItem;
