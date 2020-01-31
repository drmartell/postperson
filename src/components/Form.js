import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ url, verb, requestBody, username, password, token, onSubmit, onChange }) => (
  <form onSubmit={onSubmit} onChange={onChange} className={styles.Form}>
    <input type="text" name="url" placeholder="Enter URL" defaultValue={url}/>

    <label>
      <input type="radio" name="verb" id="GET" value="GET" defaultChecked={verb === 'GET' ? true : false} />GET
    </label>
    <label>
      <input type="radio" name="verb" id="POST" value="POST" defaultChecked={verb === 'POST' ? true : false} />POST
    </label>
    <label>
      <input type="radio" name="verb" id="PUT" value="PUT" defaultChecked={verb === 'PUT' ? true : false} />PUT
    </label>
    <label>
      <input type="radio" name="verb" id="PATCH" value="PATCH" defaultChecked={verb === 'PATCH' ? true : false} />PATCH
    </label>
    <label>
      <input type="radio" name="verb" id="DELETE" value="DELETE" defaultChecked={verb === 'DELETE' ? true : false} />DELETE
    </label>

    <input type="textarea" name="json" placeholder='Raw Body' defaultValue={requestBody} />
    <input type="text" name="username" placeholder="Username" defaultValue={username}/>
    <input type="text" name="password" placeholder="Password" defaultValue={password}/>
    <input type="text" name="token" placeholder="Bearer Token" defaultValue={token}/>

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
