import React from "react";
import "./Header.css";

const Header = props => (
    <header>
        <h1 className="header-title">
            Clicky Game
        </h1>
        <h1 className="score-board">
            <span className={props.gameType}>Score: {props.score}</span> | <span className={props.newHighScore}>High Score: {props.highScore}</span>
        </h1>
    </header>
);

export default Header;
