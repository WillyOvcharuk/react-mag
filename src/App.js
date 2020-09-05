import React from 'react';
/*import Header from './components/Header'
import Button from './components/Button.jsx'
import Categories from './components/Categories';*/
import { Header } from './components'
import { Home, Cart } from './pages'
import { Route } from 'react-router-dom';



function App() {
  const buttonClick = () => {
    alert('hello')
  }

  return (
    <div className="wrapper">
      <Header />
      {/*<Button outline>hello world</Button>
      <Button onClick={buttonClick}>Goodbye</Button>*/}
      <div className="content">
        <Route path='/' component={Home} exact />
        <Route path='/cart' component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
