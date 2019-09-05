import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import 'antd/dist/antd.css';

// import ReactMarkdown from 'react-markdown';

import CustomLayout from './containers/Layout';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      link: 'Link'
    };
  }

  render() {

    //const input = "here is a picture![enter image description here](http://45.78.10.61/media/upload_image/MSE_loss_function.png)"
    
    return (
      <div className="App">
        <Router>         
          <CustomLayout link={this.state.link}>
            <BaseRouter />
            {/* <ReactMarkdown source={input}/>  */}
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

export default App;
