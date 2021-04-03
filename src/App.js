import React from 'react';
import Main from './pages/Main';
import "./App.scss"
import {ProductProvider} from './pages/ProductProvider';
import Header from './components/Header';
import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom'


function App() {
    return (
        <BrowserRouter >
            <ProductProvider>
                <div className='App'>
                    <Router>
                        <Header/>
                        <Main/>
                    </Router>
                </div>
            </ProductProvider>
        </BrowserRouter>
    );
}

export default App;