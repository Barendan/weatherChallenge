import React, { Component } from 'react';

const API = '/api/location/search/?query=';
// const DEFAULT_QUERY = 'redux';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityQuery: '',
      data: '',
    }

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    fetch(API + this.state.cityQuery )
        .then(res => res.json())
        .then((data) => {
          this.setState({ data: data })
        })
        .catch(console.log);

  }

  handleClearForm(e) {
      e.preventDefault();
      this.setState({ city: "" });
  }

  render() {
      return (
          <form onSubmit={this.handleSubmit}>
              <label>
                  City:
                  <input type="text" ref={(city) => this.state.city = city} />
              </label>
              <input type="submit" value="Submit" />
          </form>
      );
  }
}

export default Form;