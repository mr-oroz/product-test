import React from 'react';
import Main from './components/main';
import "./App.scss"
import { ProductProvider } from './components/main/productProvider';


function App() {
  return (
    <ProductProvider>
      <div className='App'>
        <Main />
      </div>
    </ProductProvider>
  );
}

export default App;