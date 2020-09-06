import React from 'react';
import axios from 'axios'
/*import Header from './components/Header'
import Button from './components/Button.jsx'
import Categories from './components/Categories';*/
import { Header } from './components'
import { Home, Cart } from './pages'
import { Route } from 'react-router-dom';



function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setItems(data.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      {/*<Button outline>hello world</Button>
      <Button onClick={buttonClick}>Goodbye</Button>*/}
      <div className="content">
        <Route path='/' render={() => <Home itemsArr={items}/>} exact />
        <Route path='/cart' component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
