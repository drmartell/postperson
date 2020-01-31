import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const History = ({ historyItems }) => {
  const historyElements = historyItems.map((historyItem, i) => (
    <li key={i}>
      <HistoryItem historyItem={historyItem} />
    </li>
  ));

  return (
    <>
      <h1>History</h1>
      <ul>
        {historyElements}
      </ul>
    </>
  );
};

History.propTypes = {
  historyItems: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    verb: PropTypes.string.isRequired,
    requestBody: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
    token: PropTypes.string
  })).isRequired
};

export default History;
