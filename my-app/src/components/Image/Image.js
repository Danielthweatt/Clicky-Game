import React from "react";
import "./Image.css";

const Image = props => (
    <div className="img-container">
        <img alt={props.name} src={props.image} className="img-fluid img-thumbnail" />
    </div>
);

export default Image;
