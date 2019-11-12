import React, { Component } from 'react';

const PROXY = 'https://cors-anywhere.herokuapp.com/';
const woeidAPI = 'https://www.metaweather.com/api/location/search/?query=';
const weatherAPI = 'https://www.metaweather.com/api/location/';
const DEFAULT_QUERY = 'san';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    fetch(PROXY + woeidAPI + DEFAULT_QUERY)
      .then(res => res.json())

      .then((data) => {
          fetch( PROXY + weatherAPI + data[0].woeid )
          .then( res => res.json())
          
          .then ((data) => {
            this.setState({
              data : data
            })
              // console.log(data)
          })


        // console.log(data);
        // console.log(data[0].woeid)
      })
      .catch(console.log);
  }


  render() {
    const { data } = this.state;
    return (
      <div>
        <h3>
        {data.title}
        {console.log(data)}
        </h3>
        
        <ul>

        </ul>
      </div>
    );
  }


}

export default Form;