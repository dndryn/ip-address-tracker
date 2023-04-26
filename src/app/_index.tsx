import React, { Component } from 'react';
import Home from '@page/home';
import './assets/css/reset.css'; 
import '@style/App'; // path: src\app\assets\css\App.scss
 
function App(): JSX.Element {
    return (
      <div>
        <Home />
      </div>
    );
}

export default App;