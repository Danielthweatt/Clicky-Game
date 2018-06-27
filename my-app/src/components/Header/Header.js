import React from "react";
import "./Header.css";

const Header = () => (
    <header>
        <h1 className="header-title">
            Clicky Game
        </h1>
        <h1 className="score-board">
            Score: <span id="score">0</span> | High Score: <span id="high-score">0</span>
        </h1>
    </header>
);

export default Header;
