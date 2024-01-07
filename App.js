import logo from './logo.svg';
import './App.css';
import { Shop } from './Components/Shop';
import {ProductList, Cart } from './Reducer/UseReducer'
import CartProvider from './Reducer/UseReducer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Shop /> 
       <CartProvider>
      <div>
        <h1>Shopping Cart Example</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
      </header>
    </div>
  );
}

export default App;