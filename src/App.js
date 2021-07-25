import React from 'react';
import Main from './src/Componenet/Main';
import Header from './src/Componenets/Header';
import Footer from './Componenets/Footer';

class App extends React.Component {
  render() {
    return(
      <div className="allMains">
<Header />
<Main />
<Footer /> 
      </div>
    );
  }
}
export default App;