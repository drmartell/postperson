import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const History = ({ historyItems, onClick }) => {
  const historyElements = historyItems.map((historyItem, i) => (
    <li key={i}>
      <HistoryItem historyItem={historyItem} onClick={onClick} />
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
  })).isRequired,
  onClick: PropTypes.func.isRequired
};

export default History;
