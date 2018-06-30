import React from "react";
import "./Main.css";

const Main = props => (
    <main>
        <h1 className="info-title">
            Click on an image to earn points, but do not click on any more than once!
        </h1>
        {props.children}
    </main>
);

export default Main;
