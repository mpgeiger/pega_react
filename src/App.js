import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes} from "./utils";
import {SiteFooter} from "./components/footer/footer";
import {SiteHeader} from "./components/header";

class App extends Component {

    render() {
        return (
            <main>
                <BrowserRouter>
                    <SiteHeader/>
                    <div className="application">
                        <Routes/>
                    </div>
                    <SiteFooter/>
                </BrowserRouter>
            </main>
        );
    }
}

export default App;
