import React from 'react'
import Header from './Header'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header links={['Collection', 'Players', 'Games', 'Stats']}/>
        <h1>Test</h1>
      </div>
    );
  }
}

export default App
