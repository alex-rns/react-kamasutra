import React from 'react';
import logo from './logo.svg';
import './App.css';
import Technologies from "./Technologies";
import Footer from "./Footer";
import Header from "./Header";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Header/>
                <Technologies/>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Footer/>
            </header>
        </div>
    );
};

export default App;
