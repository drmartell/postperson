import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ historyItem, onClick }) => (
  <div onClick={() => onClick(historyItem)}>
    <span>{historyItem.verb}</span>
    <span>{historyItem.url}</span>
  </div>
);

HistoryItem.propTypes = {
  historyItem: PropTypes.shape({
    url: PropTypes.string.isRequired,
    verb: PropTypes.string.isRequired,
    requestBody: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
    token: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default HistoryItem;
