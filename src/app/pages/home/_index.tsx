import React from "react";
import Header from "@component/header";
import Main from "@component/main";
import imagePattern from "@asset/pattern-bg-desktop.png"; // path: src\app\assets\img\pattern-bg-desktop.png
import '@style/Home'; // path: src\app\pages\home\assets\css\Home.scss
import '@style/main'; // path: src\app\assets\scss\main.scss

function Home(): JSX.Element {
  return (
    //TODO [?]: move inline style to scss file for caching purpose.
    <div id="page-home" 
    className="is-flex has-columns" 
    style={{ backgroundImage: `url(${imagePattern})` }}>
      <Header />
      <Main />
    </div>
  );
}

export default Home;
