import React, { Component } from 'react';
import Home from '@page/home';
import '@css-reset'; // TODO: move to better location
import '@font/Rubik'; // path: src\app\assets\css\Rubik.css
import '@style/app'; // path: src\app\assets\css\App.scss
import '@style/index'; // path: src\app\assets\scss\index.scss
 
function App(): JSX.Element {
    return (
        <div id="app">
            <Home />
        </div>
    );
}

export default App;