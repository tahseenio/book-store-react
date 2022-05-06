import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import { books, booksProps } from './data';
import Cart from './pages/Cart';
import { useState } from 'react';

export interface cartProps {
  id: number;
  originalPrice: number;
  rating: number;
  salePrice: number | null;
  title: string;
  url: string;
  quantity: number;
}

function App() {
  const [cart, setCart] = useState<cartProps[]>([]);

  function addToCart(book: booksProps) {
    const newArr = [...cart, { ...book, quantity: 1 }];
    setCart(newArr);
  }

  function changeQuantity(
    book: booksProps,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setCart(
      cart.map((item) => {
        if (item.id === book.id) {
          return {
            ...item,
            quantity: +event.target.value,
          };
        } else {
          return item;
        }
      })
    );
  }

  function removeItem(item: booksProps) {
    setCart(cart.filter((book) => book.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  }

  return (
    <Router>
      <div className='App'>
        <Nav numberOfItems={numberOfItems} />
        <Route path='/book-store-react' exact component={Home} />
        <Route path='/books' exact render={() => <Books books={books} />} />
        <Route
          path='/books/:id'
          render={() => (
            <BookInfo books={books} addToCart={addToCart} cart={cart} />
          )}
        />
        <Route
          path='/Cart'
          render={() => (
            <Cart
              cart={cart}
              changeQuantity={changeQuantity}
              removeItem={removeItem}
            />
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
