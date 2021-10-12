import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Navbar";
import TweetFeed from "./TweetFeed";
import RuleList from "./RuleList";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="introduction"></div>

        <h1 className="ui header">
          <div className="content">
            Chirp
            <div className="sub header">A NodeJs backend setup for handling tweets in realtime</div>
          </div>
        </h1>

        <div className="ui container">
          <BrowserRouter>
            <Navbar />
            <Route exact path="/" component={RuleList} />
            <Route exact path="/rules" component={RuleList} />
            <Route exact path="/tweets" component={TweetFeed} />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
