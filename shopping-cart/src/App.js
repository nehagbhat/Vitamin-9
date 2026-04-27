import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Redux Shopping Cart</span>
        </div>
      </nav>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12 col-md-8 mb-4">
            <ProductList />
          </div>
          <div className="col-12 col-md-4">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
