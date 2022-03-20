import React from 'react';
import Nav from './components/Nav'
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/home';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import { books } from './data'
import Cart from './pages/Cart';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }])
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => {
      if (item.id === book.id) {
        return {
          ...item, quantity: +quantity
        }
      } else {
        return item
      }
    }))
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter
  }

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems} />
        <Route path="/book-store-react" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart} />} />
        <Route path="/Cart" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
