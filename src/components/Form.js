import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ url, verb, requestBody, username, password, token, onSubmit, onChange, onClick }) => (
  <form onSubmit={onSubmit} className={styles.Form}>
    <input type="text" name="url" placeholder="Enter URL" defaultValue={url} onChange={onChange} />

    <label>
      <input type="radio" name="verb" id="GET" value="GET" checked={verb === 'GET'} onChange={onChange} />GET
    </label>
    <label>
      <input type="radio" name="verb" id="POST" value="POST" checked={verb === 'POST'} onChange={onChange} />POST
    </label>
    <label>
      <input type="radio" name="verb" id="PUT" value="PUT" checked={verb === 'PUT'} onChange={onChange} />PUT
    </label>
    <label>
      <input type="radio" name="verb" id="PATCH" value="PATCH" checked={verb === 'PATCH'} onChange={onChange} />PATCH
    </label>
    <label>
      <input type="radio" name="verb" id="DELETE" value="DELETE" checked={verb === 'DELETE'} onChange={onChange} />DELETE
    </label>

    <input type="textarea" name="requestBody" placeholder='Raw Body' defaultValue={requestBody} onChange={onChange} />
    <input type="text" name="username" placeholder="Username" defaultValue={username} onChange={onChange} />
    <input type="text" name="password" placeholder="Password" defaultValue={password} onChange={onChange} />
    <input type="text" name="token" placeholder="Bearer Token" defaultValue={token} onChange={onChange} />

    <button>Go!</button>
    <button type="reset" value="Clear Entries" onClick={onClick}>Clear Entries</button>
  </form>
);

Form.propTypes = {
  url: PropTypes.string.isRequired,
  verb: PropTypes.string.isRequired,
  requestBody: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  token: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Form;
