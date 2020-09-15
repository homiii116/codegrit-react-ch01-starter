import React, { Component } from 'react'

class App extends Component {
  render() {
    const dateApp = this.props.date;
    const wordApp = 'これは一つ目のアプリです。';
    return React.createElement('h1', null, `${wordApp} 今日は${dateApp}です。`);
  }
}

export default App;
