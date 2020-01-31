import React from 'react';
import PropTypes from 'prop-types';

const Response = ({ responseBody }) => (
  <pre>{JSON.stringify(responseBody)}</pre>
);

Response.propTypes = {
  responseBody: PropTypes.string
};

export default Response;
