import React, { Component } from 'react'

class AppTwo extends Component {
  render() {
    const wordAppTwo = 'これは二つ目のアプリです。';
    return React.createElement('h1', null, wordAppTwo);
  }
}

export default AppTwo;