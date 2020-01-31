import React from 'react';
import Header from '../components/Header';
import History from '../components/History';
import Form from '../components/Form';
import Response from '../components/Response';
import Footer from '../components/Footer';
import { fetchWithError } from '../services/api';

export default class Postperson extends React.Component {
  state = {
    url: '',
    verb: '',
    requestBody: '',
    username: '',
    password: '',
    token: '',
    responseBody: {},
    historyItems: []
  }
  
  fetch = () => fetchWithError(this.state.url)
    .then(responseBody => {
      this.setState({ responseBody });
    });

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  handleSubmit = event => {
    event.preventDefault();

    this.setState(state => ({
      historyItems: [...state.historyItems, {
        url: state.url,
        verb: state.verb,
        requestBody: state.requestBody,
        username: state.username,
        password: state.password,
        token: state.token
      }]
    }));

    this.fetch();
  }

  render() {
    const { url, verb, requestBody, username, password, token, responseBody, historyItems } = this.state;
    return (
      <>
        <Header />
        <History historyItems={historyItems}/>
        <Form
          url={url}
          verb={verb}
          requestBody={requestBody}
          username={username}
          password={password}
          token={token}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit} />
        <Response responseBody={responseBody}/>
        <Footer />
      </>
    );
  }
}
