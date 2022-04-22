import React from "react";

let logo ="https://logrocket-assets.io/static/home-hero-c97849b227a3d3015730e3371a76a7f0.svg";

const FirstComponent = () => {
    return(
        <div>
        <h1>Finally I have build a page with typescript anc convert class to functional component</h1>
        <h3>A Simple React Component Example with Typescript</h3>
        <div>
        <img height="250" src={logo} />
        </div>
        <p>This component shows the Logrocket logo</p>
        <p>For more info on Logrocket, please visit lul</p>
        </div>
        )
}

export default FirstComponent;
