import React, {Component} from 'react';
// import loadingIcon from '../images/icon-loading.svg';

class Loading extends Component {

    render() {
        return (<div className="loading">
              <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="Loading..." />
          </div>);
    }
}

export default Loading;