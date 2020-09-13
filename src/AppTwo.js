import { createElement, Component } from 'react'

class AppTwo extends Component {
  render() {
    const h1 = React.createElement('h1', null, 'これは二つ目のアプリです');
    ReactDOM.render(h1, document.getElementById('root-two'));
  }
}

export default AppTwo;