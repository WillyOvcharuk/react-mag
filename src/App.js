import React from 'react';
import axios from 'axios'
/*import Header from './components/Header'
import Button from './components/Button.jsx'
import Categories from './components/Categories';*/
import { Header } from './components'
import { Home, Cart } from './pages'
import { Route } from 'react-router-dom';

import { setItems as setItemsAction } from './redux/actions/items'
import { connect } from 'react-redux'


/*function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setItems(data.pizzas);
    });
  }, []);

}*/

class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      //setItems(data.pizzas);
      this.props.setItems(data.pizzas)

    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        {/*<Button outline>hello world</Button>
        <Button onClick={buttonClick}>Goodbye</Button>*/}
        <div className="content">
          <Route path='/' render={() => <Home itemsArr={this.props.items}/>} exact />
          <Route path='/cart' component={Cart} exact />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state, 'this state')
  return {
    items: state.items.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setItems: (items) => dispatch(setItemsAction(items)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
