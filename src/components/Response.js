import React from 'react';
import PropTypes from 'prop-types';
import ReactJSON from 'react-json-view';

const Response = ({ responseBody }) => {
  return (Object.keys(responseBody).length !== 0 && responseBody.constructor === Object) ?
    <ReactJSON src={responseBody}/> :
    '';
};

Response.propTypes = {
  responseBody: PropTypes.object
};

export default Response;
