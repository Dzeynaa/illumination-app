import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
      <div>
        <a className="brand" href="/">amazona</a>
      </div>
      <div>
        <a href="/cart">Cart</a>
        <a href="/signin">Sign In</a>
      </div>
    </header>
    <main>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
      
    </main>
    <footer className="row center">All right reserved</footer>
  </div>
  </BrowserRouter>
  );
}

export default App;


/* <div key={product._id} className="card">
<a href={`/product/${product._id}`}>
<img className="medium" src={product.image} alt={product.name} />
</a>
<div className="card-body">
<a href={`/product/${product._id}`}>  
  <h2>{product.name}</h2>
</a>
<div className="rating">
  <span> <i className="fa fa-star"></i> </span>
  <span> <i className="fa fa-star"></i> </span>
  <span> <i className="fa fa-star"></i> </span>
  <span> <i className="fa fa-star"></i> </span>
  <span> <i className="fa fa-star"></i> </span>
</div>
<div className="price">${product.price}</div>
</div>
</div> */

/* <div>
        <div className="row center">
          {data.products.map(product => (
              <Product key={product._id} product={product}></Product>
            ))
          }
        </div>
      </div> */