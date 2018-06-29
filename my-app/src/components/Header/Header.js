import React from "react";
import "./Header.css";

const Header = props => (
    <header>
        <h1 className="header-title">
            Clicky Game
        </h1>
        <h1 className="score-board">
            <span>Score: {props.score}</span> | <span>High Score: {props.highScore}</span>
        </h1>
    </header>
);

export default Header;
