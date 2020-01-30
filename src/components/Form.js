import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ url, verb, requestBody, username, password, token, onSubmit, onChange }) => (
  <form onSubmit={onSubmit} onChange={onChange} className={styles.Form}>
    <input type="text" name="url" placeholder="Enter URL" value={url}/>

    <input type="radio" name="verb" id="GET" value="GET" checked={(verb === '' || verb === 'GET') ? true : false} />
    <input type="radio" name="verb" id="POST" value="POST" checked={verb === 'POST' ? true : false} />
    <input type="radio" name="verb" id="PUT" value="PUT" checked={verb === 'PUT' ? true : false} />  
    <input type="radio" name="verb" id="PATCH" value="PATCH" checked={verb === 'PATCH' ? true : false} />  
    <input type="radio" name="verb" id="DELETE" value="DELETE" checked={verb === 'DELETE' ? true : false} />

    <input type="textarea" name="json" placeholder='Raw Body' value={requestBody} />
    <input type="text" name="username" placeholder="Username" value={username}/>
    <input type="text" name="password" placeholder="Password" value={password}/>
    <input type="text" name="token" placeholder="Bearer Token" value={token}/>

    <button>Go!</button>
    <button type="reset" value="Clear Entries">Clear Entries</button>
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
  onChange: PropTypes.func.isRequired
};

export default Form;
