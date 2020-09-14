import { createElement, Component } from 'react'

class App extends Component {

  render() {
    const h1 = React.createElement('h1', null, 'これは一つ目のアプリです');
    ReactDOM.render(h1, document.getElementById('root'));
    return h1;
  }
}

export default App;
